import React from "react";

import PropTypes from 'prop-types';
// import './Feedback.module.css';

export const FeedbackOptions = ({ options, onHandleIncrement }) => {
  const stateArr = Object.keys(options);
  // console.log(stateArr);

  return (
    <div>
      {stateArr.map(option => (
        <button
          key={option}
          type="button"
          name={option}
          onClick={() => onHandleIncrement(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.object,
  onLeaveFeedback: PropTypes.func,
};

export default FeedbackOptions;