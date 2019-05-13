import React from 'react';
import './styles/BadgesList.css';

import { Link } from 'react-router-dom';
import BadgesListItem from './BadgesListItem';

export default class BadgesList extends React.Component {
  render() {
    if (this.props.badges.length === 0) {
      return (
        <div>
          <h3>No badges were found!</h3>
          <Link className='btn btn-primary' to='/badges/new'>
            Create new badge
          </Link>
        </div>
      );
    }
    return (
      <div className='BadgesList'>
        <ul className='list-unstyle'>
          {this.props.badges.map(badge => {
            return (
              <li key={badge.id}>
                <Link className='text-reset text-decoration-none' to={`/badges/${badge.id}`}>
                  <BadgesListItem badge={badge} />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
