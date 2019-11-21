/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import './Footer.scss';
import Select from '../Select/Select';

const Footer = props => (
  <footer className="footer">
    <div className="container">
      <div className="footer__top-part">
        <div className="footer__main">
          <div className="footer__logo-container">
            <img
              className="footer__logo"
              src="./images/logo_bottom.png"
              alt=""
            />
            <Select
              name="language"
              options={[
                { value: 'eu', label: 'English' },
                { value: 'ua', label: 'Ukranian' },
              ]}
              value="en"
              iconUrl="./images/world.svg"
            />
          </div>
          <div className="footer_mobile-apps">
            <a
              className="footer__mobile-app"
              href="https//"
            >
              <img src="./images/app_store.png" alt="App Store" />
            </a>
            <a
              className="footer__mobile-app"
              href="https//"
            >
              <img src="./images/google-play.png" alt="Google Play" />
            </a>
          </div>
        </div>
        <div className="footer__top-links links">
          <a
            href="https//"
            className="links__link link__link--intended"
          >
            About UberEats
          </a>
          <a
            href="https//"
            className="links__link"
          >
            Read our blog
          </a>
          <a
            href="https//"
            className="links__link"
          >
            Sing up to deliver
          </a>
          <a
            href="https//"
            className="links__link"
          >
            Add your restaurant
          </a>
        </div>
        <div className="footer__top-links links">
          <a
            href="https//"
            className="links__link link__link--intended"
          >
            Get help
          </a>
          <a
            href="https//"
            className="links__link"
          >
            Read FAQs
          </a>
          <a
            href="https//"
            className="links__link"
          >
            View all cities
          </a>
        </div>
      </div>

      <div className="footer__bottom-part">
        <p className="footer__copyright">
          2019 Uber Technologies Inc.
        </p>
        <div className="footer__misc">
          <div className="footer__bottom-links links">
            <a
              href="https//"
              className="links__link link__link--intended"
            >
          Privacy policy
            </a>
            <a
              href="https//"
              className="links__link"
            >
              Terms of use
            </a>
            <a
              href="https//"
              className="links__link"
            >
              Pricing
            </a>
          </div>

          <div className="footer__social social">
            <a
              href="https//"
              className="social__link"
            >
              <img src="./images/fb.png" alt="facebook" />
            </a>
            <a
              href="https//"
              className="social__link"
            >
              <img src="./images/tw.png" alt="twitter" />
            </a>
            <a
              href="https//"
              className="social__link"
            >
              <img src="./images/ig.png" alt="instagram" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
