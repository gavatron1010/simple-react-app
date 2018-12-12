import * as React from "react";
import PropTypes from 'prop-types';

interface Profileprops {
  profileObj: any;
}

const Profile = (props: Profileprops) => (
  <div style={{'margin': 'auto', 'width': '100%', 'textAlign': 'center'}}>
    <h2>Profile</h2>
    <div>
      <img src={props.profileObj.imageUrl} />
    </div>
    <div>{props.profileObj.name}</div>
    <div><a href='mailto:{props.profileObj.email}'>{props.profileObj.email}</a></div>
    <div style={{'margin': '25px'}}>
      <div style={{'width':'700px', 'textAlign':'left', 'margin':'auto'}}>
        <b>Google Token:</b><br />
      </div>
      <textarea
        style={{'width':'700px', 'height':'700px'}}
        defaultValue={JSON.stringify(props.tokenObj, null, 2)}
      ></textarea>
    </div>
  </div>
);

export default Profile;
