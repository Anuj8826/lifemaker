import React from 'react';
import AppBar from 'material-ui/AppBar';
import ActionSearch from 'material-ui/svg-icons/action/search';
import ActionPermIdentity from 'material-ui/svg-icons/action/perm-identity';
import AlertAddAlert from 'material-ui/svg-icons/alert/add-alert';
import {fullWhite} from 'material-ui/styles/colors';

const iconStyles = {
  marginTop: 12,
  marginRight: 24,
};

const SvgAppBarIcons = () => (
  <div>
    <ActionSearch style={iconStyles} color={fullWhite} viewBox= {'0 0 24 24'}/>
    <AlertAddAlert style={iconStyles} color={fullWhite} viewBox= {'0 0 24 24'}/>
    <ActionPermIdentity style={iconStyles} color={fullWhite} viewBox= {'0 0 24 24'}/>
  </div>
);


const AppBarComp = () => (
  <AppBar
    title="LifeMaker"
    iconElementRight= {<SvgAppBarIcons/>}
  />
);

export default AppBarComp;
