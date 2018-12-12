import * as React from "react";
import PropTypes from 'prop-types';

interface Userprops {
  name: string;
  email: string;
  picture: string;
  age: number;
}

const User = (props: Userprops) => (
  <div style={{'margin': '25px'}}>
    <div>
      <img src={props.picture} />
    </div>
    <div>{props.name} - {props.age}</div>
    <div><a href='mailto:{props.email}'>{props.email}</a></div>
  </div>
);

User.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
};

export default User;
