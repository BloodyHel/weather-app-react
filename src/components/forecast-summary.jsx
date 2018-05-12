import React from 'react';
import PropTypes from 'prop-types';


const ForecastSummary = props => (
  <div className="forecast-summary">
    <div className="forecast-summary__date"><span>{props.date}</span></div>
    <div className="forecast-summary__temperature"><span>{props.temperature}</span></div>
    <div className="forecast-summary__description"><span>{props.description}</span></div>
    <div className="forecast-summary__icon"><span>{props.icon}</span></div>

  </div>
);

export default ForecastSummary