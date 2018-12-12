import * as React from "react";
import PropTypes from 'prop-types';
import { BeatLoader } from 'react-spinners';
import User from "./User";

interface Listprops {
  isFetching: boolean;
  users: [];
  loadUser(): void;
}

var key = 0;

const List = (props: Listprops) => (
  <div style={{'margin': 'auto', 'width': '100%', 'textAlign': 'center'}}>

    <div>
      <h2>User List</h2>
    </div>

    <div>
      {props.users.map(user=>(
        <User
          key={key++}
          name={user.name.title+' '+user.name.first+' '+user.name.last}
          email={user.email} picture={user.picture.large} age={user.dob.age} />
      ))}
    </div>

    <div>
      { props.isFetching ?
        <BeatLoader
          sizeUnit={"px"}
          size={25}
          color={'#12bc3a'}
          loading={true}
        />
        :
        <button onClick={() => props.loadUser()}>Load User</button>
      }
    </div>

  </div>
)

List.propTypes = {
  isFetching: PropTypes.bool.isRequired
};

export default List;
