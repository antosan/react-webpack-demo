import React from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends React.Component {
    render() {
        return (
            <div className="app">
                <header className="app-header">
                    <img src={logo} className="app-logo" alt="logo" />
                    <h1 className="app-title">Welcome to React</h1>
                </header>
                <p className="app-intro">
                    A JavaScript library for building user interfaces.
                </p>
            </div>
        );
    }
}

export default App;
