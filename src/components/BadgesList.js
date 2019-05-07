import React from 'react';
import './styles/BadgesList.css';
import twitterLogo from '../images/twitter.svg';

export default class BadgesList extends React.Component {
  render() {
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
