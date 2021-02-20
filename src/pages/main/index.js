import React from 'react';
import { StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Header from '../../components/Header';
import Menu from '../../components/Menu';
import Tabs from '../../components/Tabs';

import {
    Container,
    Content,
    Card,
    CardHeader,
    CardContent,
    CardFooter,
    Title,
    Description,
    Annotation,
    SafeAreaView,
} from './styles';

const Main = () => {
    return (
        <>
            <StatusBar barStyle="light-content" backgroundColor="#8b10ae" />

            <Container>
                <Header />

                <Content>
                    <Menu />

                    <Card>
                        <CardHeader>
                            <Icon name="attach-money" size={28} color="#666" />
                            <Icon
                                name="visibility-off"
                                size={28}
                                color="#666"
                            />
                        </CardHeader>

                        <CardContent>
                            <Title>Saldo disponível</Title>
                            <Description>R$ 1.550.965,79</Description>
                        </CardContent>

                        <CardFooter>
                            <Annotation>
                                Transferência de R$ 30,00 recebida de Dom Pedro
                                hoje às 08:00h
                            </Annotation>
                        </CardFooter>
                    </Card>
                </Content>

                <Tabs />
            </Container>
        </>
    );
};

export default Main;
