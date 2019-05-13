import React from 'react';
import confLogo from '../images/platziconf-logo.svg';
import Badge from '../components/Badge';
import { Link } from 'react-router-dom';
import './styles/BadgeDetails.css';
import DeleteBadgeModal from '../components/DeleteBadgeModal';

const useIncreaseCount = max => {
  const [count, setCount] = React.useState(0);
  if (count > max) {
    setCount(0);
  }
  return [count, setCount];
};

const BadgeDetails = props => {
  const [count, setCount] = useIncreaseCount(7);
  //   const count = 3;
  const badge = props.badge;
  return (
    <React.Fragment>
      <div className='BadgeDetails__hero'>
        <div className='container'>
          <div className='row'>
            <div className='col-6'>
              <img src={confLogo} alt='Logo de la conferenci' />
            </div>
            <div className='col-6 BadgeDetails__hero-attendant-name'>
              <h1>
                {badge.firstName} {badge.lastName}
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='row'>
          <div className='col-6'>
            <Badge
              firstName={badge.firstName || 'First Name'}
              lastName={badge.lastName || 'Last Name'}
              twitter={badge.twitter || 'Twitter'}
              jobTitle={badge.jobTitle || 'Job Title'}
              email={badge.email || 'Emal'}
            />
          </div>
          <div className='col-6'>
            <h2>Actions</h2>
            <div>
              <div
                onClick={() => {
                  setCount(count + 1);
                }}
                className='btn btn-primary mr-4'
              >
                Increase Count: {count}
              </div>
              <Link className='btn btn-primary mb-4' to={`/badges/${badge.id}/edit`}>
                Edit
              </Link>
            </div>
            <div>
              <button onClick={props.onOpenModal} className='btn btn-danger'>
                Delete
              </button>
              <DeleteBadgeModal isOpen={props.modalIsOpen} onClose={props.onCloseModal} onDeleteBadge={props.onDeleteBadge} />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default BadgeDetails;
