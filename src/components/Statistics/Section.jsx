import React from "react";
import propTypes from 'prop-types';
import css from './Section.css';

export const Section = ({ title, children }) => (
  <div>
    <h2 className={css.title}>{title}</h2>
    {children}
  </div>
);

Section.propTypes = {
  title: propTypes.string.isRequired,
  children: propTypes.node.isRequired,
};

export default Section;