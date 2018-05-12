import React from 'react';
import PropTypes from 'prop-types';

import LocationDetails from './location-details';
import ForecastSummaries from './forecast-summaries';

const App = props => (
  <div className="forecast">
    <LocationDetails
      city={props.location.city}
      country={props.location.country}
    />
    <ForecastSummaries />
  </div>
);

App.propTypes = {
  location: PropTypes.shape({
    city: PropTypes.string,
    country: PropTypes.string,
  }).isRequired,
};

export default App;
