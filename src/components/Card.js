import React from "react"
import pin from "../images/pin.svg"


function Card(props) {

    return (
        <div className="place-card">
            <img src={props.imageUrl} alt={props.location}></img>
            <div className="details">
                <span className="location-details">
                    <img src={pin} alt="pin"></img>
                    <span className="country">{props.location}</span>
                    <a href={props.googleMapsUrl}>View on Google Maps</a>
                </span>
                <h1>{props.title}</h1>
                <div className="dates">{props.startDate} - {props.endDate}</div>
                <p>{props.description}</p>
            </div>
        </div>
    )
}

export default Card