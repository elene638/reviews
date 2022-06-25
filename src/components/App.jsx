import React from "react";
//import {BiAlarmAdd} from "react-icons/bi";
import Review from "./Review";
function App() {
    return (
        <div className="main">
            <div>
                <h1 className="title">Our reviews</h1>
                <div className="underline"></div>
            </div>
            <Review />
        </div>
    )
}

export default App;