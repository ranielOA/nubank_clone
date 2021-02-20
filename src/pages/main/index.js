import React from 'react';
import {StatusBar, View} from 'react-native';
import {Container} from './styles';

const Main = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#8b10ae" />
      <Container />
    </>
  );
};

export default Main;
