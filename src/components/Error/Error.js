/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
import React from 'react';
import './Error.scss';

const Error = (props) => {
  const { message } = props;

  return (
    <div className="error">
      <p className="error__text">
        {message}
      </p>
      <a href="/" className="error__link">
        Go to Home
      </a>
    </div>
  );
};

export default Error;
