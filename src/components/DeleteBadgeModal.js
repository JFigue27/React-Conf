import React from 'react';
import Modal from './Modal';

const DeleteBadgeModal = prosp => {
  return (
    <Modal isOpen={prosp.isOpen} onClose={prosp.onClose}>
      <div className='DelteBadgeModal'>
        <h1>Are You Sure?</h1>
        <p>You are about to detele this badge.</p>

        <div>
          <button onClick={prosp.onDeleteBadge} className='btn btn-danger mr-4'>
            Delete
          </button>
          <button onClick={prosp.onClose} className='btn btn-primary'>
            Cancel
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default DeleteBadgeModal;
