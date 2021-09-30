import React from 'react';
import PropTypes from 'prop-types';
import formatDate from '../../utils/formatDate';

const ProfileEducation = ({
  education: { school, degree, fieldofstudy, current, to, from, description },
}) => (
  <div>
    <h3 className='text-dark'>{school}</h3>
    <p>
      {formatDate(from)} - {to ? formatDate(to) : 'Now'}
    </p>
    <p>
      <strong>Degree : </strong>
      {degree}
    </p>
    <p>
      <strong>Field Of Study : </strong>
      {degree}
    </p>
    {description && (
      <p>
        <strong>Description : </strong>
        {description}
      </p>
    )}
  </div>
);
ProfileEducation.propTypes = {
  education: PropTypes.array.isRequired,
};

export default ProfileEducation;
