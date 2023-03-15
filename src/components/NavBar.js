import "./NavBar.css";
import { Home } from "./Home.js";
import { Link } from "react-router-dom";
import { BrowserRouter, Route, Router } from "react-router-dom"
import { React } from "react";

export function NavBar() {
    return (
        <header>
            <article>
                <h1>
                    <Link to="">YouTube </Link>
                </h1>
            </article>
            <nav>
                <ul>
                    <li>
                        <Link to="/"><p>Home</p> </Link>
                    </li>
                    <li>
                        <Link to="/About"> <p>About</p></Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}