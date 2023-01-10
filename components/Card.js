import React from 'react'

export default function Card(props) {
    console.log(props)
    return (
        <div>
            <div className='card--main'>
                    <img className="card--image" src={props.imageUrl} />
                    <div className="card--text">
                         <div className='card--first_row'>
                            <i className="fas fa-map-marker-alt card--map_marker fa-2xs">
                                <span className='card--location'>{props.location.toUpperCase()}</span>
                                <a href={props.googleMapsUrl} className='card--view_map'>View on Google Maps</a> 
                            </i>
                         </div>
                         <h1 className='card--title'> {props.title} </h1>
                         <span className='card--date'><b>{props.startDate} - {props.endDate}</b> </span>
                         <p className='card--description'>Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>
                    </div>
                    
            </div>
            {props.location !== "Norway" && <hr className="hr--line" />}
       </div> 
    )
}