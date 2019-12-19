import React, { useState } from 'react';
import styled from 'styled-components/native';

const Page = styled.SafeAreaView`
    flex: 1;
`;

const Quadro = styled.View`
    align-self:flex-start;
    width: 100%;
    height: 250px;
    border-radius: 25px;
    background-color:#7b70e6;
`;

const AreaLogin = styled.View`
    align-self: center;
    border: 1px solid #000;
    border-radius: 20px;
    width: 270px;
    height: 250px;
    justify-content: center;
    align-items: center;
    background-color:#fff;
`;

const Titulo = styled.Text`
    font-size: 20px;
`;

const Input = styled.TextInput`
    font-size: 15px;
    border: 1px solid #000;
    width: 200px;
    height: 50px;
    border-radius: 25px;
    padding: 15px;
    background-color:#eee;
`

const Botao = styled.Button`
`;

const Screen = (props) => {

    const [nome, setNome] = useState('');

    const fazerLogin = () => {
        props.navigation.navigate('Home', {nome});
    }

    return (
        <Page>
            <Quadro></Quadro>
            <AreaLogin>
                <Titulo>Bem vindo ao Personal Fit</Titulo>
                <Input placeholder='Login' value={nome} onChangeText={e=>setNome(e)} />
                <Input placeholder='Senha'/>
                <Botao title='Entrar' onPress={fazerLogin} />
            </AreaLogin>
        </Page>

    );
}

Screen.navigationOptions = () =>{
    return{
        title:'Login'
    };
};

export default Screen;