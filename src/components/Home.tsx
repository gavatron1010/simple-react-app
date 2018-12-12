import * as React from "react";
import PropTypes from 'prop-types';

interface Homeprops {
  user: string;
}

const Home = (props: Homeprops) => (
  <div>
    <h2>Home</h2>
  </div>
);

export default Home;
