import React from 'react'
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";

export default function Site({site}) {
    // Just for fun
    const handleClick = e => {
        e.currentTarget.children[0].innerHTML++
    }
    // showing site details
    return (
        <div className="site">
            <img src={site.img} alt=""/>
            <div className="bar">
                <h6>{site.rank}</h6>
                <hr/>
                <div className="details">
                    <h3>{site.title}</h3>
                    <p>{site.details}</p>
                </div>
                <div className="vote-button" onClick={handleClick}>
                    <h5>500</h5>
                    <ArrowDropUpIcon />
                </div>
            </div>
        </div>
    )
}
