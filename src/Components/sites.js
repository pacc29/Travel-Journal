import React from "react";

export default function Site(props) {
  return (
    <>
      <div className="site-wrapper">
        <img className="site-img" src={props.imageUrl} alt="img" />
        <div className="site-info">
          <div className="basic-info">
            <ion-icon name="pin-outline" class="site-pin"></ion-icon>
            <span className="site-country">{props.location}</span>
            <a className="site-link" href={props.googleMapsUrl}>
              View on Google Maps
            </a>
          </div>
          <h3 className="site-location">{props.title}</h3>
          <span className="site-time">
            {props.startDate} - {props.endDate}
          </span>
          <p className="site-description">{props.description}</p>
        </div>
      </div>
      <hr className="split-line"></hr>
    </>
  );
}
