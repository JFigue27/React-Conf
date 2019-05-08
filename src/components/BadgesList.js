import React from 'react';
import './styles/BadgesList.css';
import twitterLogo from '../images/twitter.svg';
import { Link } from 'react-router-dom';

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
              <li key={badge.id} className='BadgesListItem'>
                <div>
                  <img className='BadgesListItem__avatar' src={badge.avatarUrl} alt='Avatar' />
                </div>
                <div>
                  <p>
                    {badge.firstName} - {badge.lastName}
                  </p>
                  <p className='twitterColor'>
                    <img src={twitterLogo} alt='twitter-logo' className='twitter' />
                    {badge.twitter}
                  </p>
                  {badge.jobTitle}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
