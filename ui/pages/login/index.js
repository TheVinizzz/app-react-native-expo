import React, {useState} from 'react';
import {Image, ScrollView, StyleSheet, Text, View, TextInput} from 'react-native';
import IconLogin from "../../assets/login/iconLogin.png"
import {Container, IconLoginTag, InputLogin} from "./style"

export default function LoginPage() {
 const [text, onChangeText] = React.useState("Login");
 const [password, onChangePassword] = React.useState("Senha");
    return (
        <Container>
            <IconLoginTag source={IconLogin}/>
            <InputLogin onChangeText={onChangeText} value={text}/>
            <InputLogin onChangeText={onChangePassword} value={password}/>
        </Container>
    );
}