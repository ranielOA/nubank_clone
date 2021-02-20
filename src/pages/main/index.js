import React from 'react';
import { StatusBar, View } from 'react-native';
import Header from '../../components/Header';
import Tabs from '../../components/Tabs';
import { Container } from './styles';

const Main = () => {
    return (
        <>
            <StatusBar barStyle="light-content" backgroundColor="#8b10ae" />

            <Container>
                <Header />

                <Tabs />
            </Container>
        </>
    );
};

export default Main;
