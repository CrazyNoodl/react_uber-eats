/* eslint-disable react/prop-types */
import React from 'react';
import './Select.scss';

const Select = (props) => {
  const {
    name,
    value,
    onSelect,
    options,
    iconUrl,
  } = props;

  return (
    <div className="select">
      <select
        name={name}
        value={value}
        onChange={onSelect}
        className="select__input"
      >
        {options.map(({ value: optionValue, label }) => (
          <option value={optionValue} selected={value === optionValue}>
            {label}
          </option>
        ))}
      </select>
      {!!iconUrl && (
        <img className="select__icon" src={iconUrl} alt="select icon" />
      )}
      <img
        className="select__arrow"
        src="./images/arrow.png"
        alt="arrow down"
      />
    </div>
  );
};

export default Select;
