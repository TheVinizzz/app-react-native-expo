import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import IconLogin from "../../assets/login/iconLogin.png"
import {Container, IconLoginTag} from "./style"

export default function LoginPage() {
    return (
        <Container>
            <IconLoginTag source={IconLogin}/>
            <Text>Aparece Poha</Text>
        </Container>
    );
}