
import React from "react";
import Click from "./components/click";
import Hover from "./components/Hover";

export default class App extends React.Component {
        render () {
            return(
                <>
                    <Hover />
                    <Click />
                </>
            )
        }
}