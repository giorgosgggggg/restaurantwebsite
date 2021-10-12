import React from 'react'
import { Link } from "react-router-dom"
import BannerImage from "../assets/background.jpg"
import "../Styles/Home.css"

function Home() {
    return (
        <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}  >
            <div className="headerContainer"
            >
                <h1>The Best Pizzeria</h1>
                <p>AN OASIS OF PLEASURE</p>
                <Link to="/menu"  >
                    <button>ORDER NOW</button>
                </Link>
            </div>
        </div>
    )
}

export default Home
