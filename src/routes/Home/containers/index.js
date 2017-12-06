import React from 'react';
import { compose } from 'redux'
import { connect } from 'react-redux';
import { firebaseConnect } from 'react-redux-firebase';
import HomeDescriptor from '../components/HomeDescriptor';

const enhance = compose(
    firebaseConnect([
        'home'
    ]),
    connect((state) => ({
        home: state.firebase.data.home
    }))
);

const Home = ({ home }) =>
  <HomeDescriptor description={home && home.description}/>;


export default enhance(Home);