/* eslint-disable react/jsx-one-expression-per-line */
import React, { Component } from 'react';
import Input from '../Input/Input';
import './Header.scss';

class Header extends Component {
  state = {
    adress: '',
    time: '',
    search: '',
    isMobileSearchVisible: false,
    isMobileDeliveryInfoVisible: false,
  };

  handleChange = ({ target }) => {
    this.setState({
      [target.name]:
        target.value,
    });
  }

  toggleSearch = () => this.setState(({ isMobileSearchVisible }) => ({
    isMobileSearchVisible: !isMobileSearchVisible,
    isMobileDeliveryInfoVisible: false,
  }));

  toggleDeliveryInfo = () => this.setState((prevState) => {
    const { isMobileDeliveryInfoVisible } = prevState;

    return {
      isMobileDeliveryInfoVisible: !isMobileDeliveryInfoVisible,
      isMobileSearchVisible: false,
    };
  });

  closeMobile = () => this.setState({
    isMobileSearchVisible: false,
    isMobileDeliveryInfoVisible: false,
  });

  render() {
    const {
      adress,
      time,
      search,
      isMobileDeliveryInfoVisible,
      isMobileSearchVisible,
    } = this.state;

    return (
      <header className="header">
        <div className="container">
          <div className="header__inner">
            <img
              className="header__logo"
              src="./images/logo.png"
              alt="UberEats-logo"
            />

            <div className="header__delivery-info">
              <Input
                name="address"
                value={adress}
                onChang={this.handleChange}
                placeholder="Adress"
                iconUrl="./images/place.png"
              />
              <Input
                name="time"
                value={time}
                onChang={this.handleChange}
                placeholder="Time"
                type="time"
              />
            </div>

            <div className="header__search">
              <Input
                name="search"
                value={search}
                onChang={this.handleChange}
                placeholder="Search"
                iconUrl="./images/Group.png"
              />
            </div>

            <div className="header__toggle-buttons">
              <button
                onClick={this.toggleDeliveryInfo}
                type="button"
                className="header__toggle-btn"
              >
                <img
                  src="./images/place.png"
                  alt="place"
                />
              </button>
              <button
                onClick={this.toggleSearch}
                type="button"
                className="header__toggle-btn"
              >
                <img
                  src="./images/search.png"
                  alt="search0icon"
                />
              </button>
            </div>
            <a
              className="header__link"
              href="/sing-in"
            >
              Sing In
            </a>
          </div>
          {(isMobileSearchVisible || isMobileDeliveryInfoVisible) && (
            <div className="header__mobile-controls mobile-controls">
              {isMobileSearchVisible && (
                <Input
                  label="Find"
                  name="search"
                  value={search}
                  onChang={this.handleChange}
                  placeholder="Search"
                  iconUrl="./images/Group.png"
                  isSmall={false}
                />
              )}
              {isMobileDeliveryInfoVisible && (
                <>
                  <Input
                    label="Where"
                    name="address"
                    value={adress}
                    onChang={this.handleChange}
                    placeholder="Adress"
                    iconUrl="./images/place.png"
                    isSmall={false}
                  />
                  <Input
                    label="To"
                    name="time"
                    value={time}
                    onChang={this.handleChange}
                    placeholder="Time"
                    type="time"
                    isSmall={false}
                  />
                </>
              )}
              <button
                onClick={this.closeMobile}
                type="button"
                className="mobile-controls__close"
              >
                <img
                  src="./images/x.png"
                  alt="search-icon"
                />
              </button>
            </div>
          )}
        </div>
      </header>
    );
  }
}

export default Header;
