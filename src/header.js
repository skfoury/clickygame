import React from "react";
import footprint from './footprint.png'

const Header = props => (
    <div className="header">
        <div className="scoreBoard">
            DinoClicker
            <br></br>
            Score: {props.score} <img src={footprint} height="30"></img>
            <br></br>
            Highscore: {props.highscore} <img src={footprint} height="30"></img>
        </div>
    </div>
);

export default Header;