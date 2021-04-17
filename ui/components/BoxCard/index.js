import React from 'react';
import {Box, BoxBackground} from "./style"
import City1 from "../../assets/city01.jpg"
import City2 from "../../assets/city3.jpg"
import City3 from "../../assets/city4.png"

export default function BoxCard() {

    const selectBackground = () => {
        const selectChamp = {
            0: City1,
            1: City2,
            2: City3,
            3: City2
        };
        const ramdomNumber = Math.floor(Math.random() * (3 + 1));
        return selectChamp[ramdomNumber];
    };
    return (
        <Box>
            <BoxBackground source={selectBackground()}>
            </BoxBackground>
        </Box>
    )
}