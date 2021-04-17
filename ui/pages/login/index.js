import React, {useState} from 'react';
import {Image, ScrollView, StyleSheet, Text, View, TextInput, Button, Alert} from 'react-native';
import IconLogin from "../../assets/login/iconLogin.png"
import {Container, IconLoginTag, InputLogin, ButtonLogin, ContainerButton} from "./style"

export default function LoginPage() {
 const [text, onChangeText] = React.useState("Login");
 const [password, onChangePassword] = React.useState("Senha");
    return (
        <Container>
            <IconLoginTag source={IconLogin}/>
            <InputLogin onChangeText={onChangeText} value={text}/>
            <InputLogin onChangeText={onChangePassword} value={password}/>
            <ContainerButton>
                <ButtonLogin
                    title="Entrar"
                    color="#f194ff"
                    backgroundColor="#007bff"
                    onPress={() => Alert.alert('Simple Button pressed')}
                />
            </ContainerButton>
        </Container>
    );
}