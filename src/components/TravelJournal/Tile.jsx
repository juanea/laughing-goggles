import React from 'react';
import '../../stylesheet/travel_journal.css';

export default function Tile(props) {
  return (
    <div className="tile">
      <div className="tile--location">{props.item.location}</div>
      <a className="tile--googleMapsUrl" href={props.item.googleMapsUrl}>
        View on Google Maps!
      </a>
      <div className="tile--title">{props.item.title}</div>
      <div className="tile--dates">{props.item.startDate}</div>
      <div className="tile--dates">{props.item.endDate}</div>
      <div className="tile--description">{props.item.description}</div>
      <img
        className="tile--imageUrl"
        src={props.item.imageUrl}
        alt={props.item.title}
      />
    </div>
  );
}
