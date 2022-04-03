import React from 'react';
import '../../stylesheet/travel_journal.css';
import PINICON from '../../assets/TravelJournal/Fill219.svg';

export default function Tile(props) {
  return (
    <div className="tile">
      <nav className="tile--nav">
        <div className="tile--card">
          <img
            className="tile--imageUrl"
            src={props.item.imageUrl}
            alt={props.item.title}
          />
        </div>
        <ul className="tile--items">
          <li className="tile--locationProperties">
            <img className="tile--pinicon" src={PINICON} alt="Pin Icon" />
            <p className="tile--location">
              {props.item.location.toUpperCase()}
            </p>
            <a className="tile--googleMapsUrl" href={props.item.googleMapsUrl}>
              View on Google Maps
            </a>
          </li>
          <li className="tile--title">{props.item.title}</li>
          <li className="tile--dates">
            {props.item.startDate} -{props.item.endDate}
          </li>
          <li className="tile--description">{props.item.description}</li>
        </ul>
      </nav>
      <div className="tile--spacer" />
    </div>
  );
}
