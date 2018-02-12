import React from 'react';
import { compose } from 'redux'
import { connect } from 'react-redux';
import { firebaseConnect } from 'react-redux-firebase';
import HomeDescriptor from '../components/HomeDescriptor';
import SEO from 'components/SeoHead';
import meta from './meta.json';

const enhance = compose(
    firebaseConnect([
        'home'
    ]),
    connect((state) => ({
        home: state.firebase.data.home
    }))
);

const Home = ({ home }) =>
  <div>
    <SEO {...meta}/>
    <HomeDescriptor description={home && home.description}/>;
  </div>;

export default enhance(Home);