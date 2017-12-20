import React from 'react';
import Quadrant from './Quadrant.js';
import RaisedButton from 'material-ui/RaisedButton';
import {
  Link
} from 'react-router-dom' ;


const style = {
margin: 12,
};

const Atman = () => (
  <div>
  <Quadrant />
  <Link to="/SelfCheck">
  <RaisedButton label="Take your Self check" primary={true} style={style}/>
  </Link>
  </div>
);
export default Atman;
