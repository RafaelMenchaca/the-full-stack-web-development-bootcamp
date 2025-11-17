import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

// --- DATABASE CONNECTION ---
const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "world",
  password: "Th3R4f4%123",
  port: 5432,
});
db.connect();

// --- MIDDLEWARE ---
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// --- HOME PAGE (READ FROM DB) ---
app.get("/", async (req, res) => {
  const visited = await db.query("SELECT country_code FROM visited_countries");

  const countries = visited.rows.map(row => row.country_code);

  res.render("index.ejs", {
    countries: countries,
    total: countries.length,
    error: null,
  });
});

// --- ADD NEW COUNTRY (WRITE TO DB) ---
app.post("/add", async (req, res) => {
  const countryInput = req.body.country.trim();

  try {
    // 1. Look up the country in the countries table
    const result = await db.query(
      "SELECT country_code FROM countries WHERE LOWER(country_name) = LOWER($1)",
      [countryInput]
    );

    // 2. If no match found
    if (result.rows.length === 0) {
      const visited = await db.query("SELECT country_code FROM visited_countries");
      return res.render("index.ejs", {
        countries: visited.rows.map(r => r.country_code),
        total: visited.rows.length,
        error: `Country "${countryInput}" not found`,
      });
    }

    // 3. Extract country_code
    const countryCode = result.rows[0].country_code;

    // 4. Insert into visited_countries (avoid duplicates)
    await db.query(
      "INSERT INTO visited_countries (country_code) VALUES ($1) ON CONFLICT DO NOTHING",
      [countryCode]
    );

    // 5. Refresh page
    res.redirect("/");

  } catch (err) {
    console.error(err);
    res.send("Database error");
  }
});

// --- START SERVER ---
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
