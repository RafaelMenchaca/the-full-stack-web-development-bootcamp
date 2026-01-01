import React from "react";
import Games from "./Games.jsx"
import video_games from "../video_game.js";


function App() {
    return (
        <div>
            {video_games.map(games => (
                <Games 
                    key={games.id}
                    name={games.name}
                    price={games.price}
                    year={games.year}
                    mode={games.mode}

                />
            ))}
        </div>
    );
}




export default App;