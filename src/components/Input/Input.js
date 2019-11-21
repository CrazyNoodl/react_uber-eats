/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
import React, { PureComponent, createRef } from 'react';
import './Input.scss';
import cx from 'classname';

class Input extends PureComponent {
  state = {
    isFocused: false,
  };

  inputRef = createRef();

  handleFocus = () => this.setState({ isFocused: true })

  handleBlur = () => this.setState({ isFocused: false })

  focus = () => this.inputRef.current.focus

  render() {
    const {
      iconUrl,
      value,
      onChange,
      type,
      placeholder,
      name,
      className,
      isSmall,
      label,
    } = this.props;
    const { isFocused } = this.state;

    const inputWrapperClass = cx('control__input-wrapper', {
      'control__input-wrapper--focused': isFocused,
      [className]: !!className,
    });

    const inputClass = cx('control__input', {
      'control__input--small': isSmall,
    });

    return (
      <label className="control">
        {label && (
          <p className="control__label">
            { label }
          </p>
        )}
        <div className={inputWrapperClass}>
          {!!iconUrl && (
            <img src={iconUrl} alt={placeholder} className="control__icon" />
          )}
          <input
            ref={this.inputRef}
            type={type}
            value={value}
            onChange={onChange}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
            className={inputClass}
            name={name}
            placeholder={placeholder}
          />
        </div>
      </label>
    );
  }
}

export default Input;
