import React, { useState } from 'react';
import styled from 'styled-components/native';

const Page = styled.SafeAreaView`
    flex: 1;
    background-color:#7b70e6;
    justify-content:center;
`;

/*const Quadro = styled.View`
    align-self:flex-start;
    width: 100%;
    height: 250px;
    border-radius: 25px;
    background-color:#7b70e6;
`;*/

const AreaLogin = styled.View`
    flex-direction: column;
    align-self: center;
    border: 1px solid #fff;
    border-radius: 20px;
    width: 270px;
    height: 250px;
    justify-content: center;
    align-items: center;
    background-color:#fff;
    align-content:space-between;
`;

const Titulo = styled.Text`
    padding-bottom: 20px;
    font-size: 20px;
`;

const InputLogin = styled.TextInput`
    font-size: 15px;
    border: 1px solid #eee;
    width: 200px;
    height: 50px;
    border-radius: 25px;
    padding: 15px;
    background-color:#eee;
`;

const InputSenha = styled.TextInput`
    padding-top:10px;
    font-size: 15px;
    border: 1px solid #eee;
    width: 200px;
    height: 50px;
    border-radius: 25px;
    padding: 15px;
    background-color:#eee;
`;

const Botao = styled.Button`
`;

const Separator = styled.View`
    marginVertical: 8px;
    borderBottomColor: #737373;
    borderBottomWidth: 100px;
`;

const Screen = (props) => {

    const [nome, setNome] = useState('');

    const fazerLogin = () => {
        props.navigation.navigate('Home', {nome});
    }

    return (
        <Page>
            <AreaLogin>
                <Titulo>Bem vindo ao Personal Fit</Titulo>
                <InputLogin placeholder='Login' value={nome} onChangeText={e=>setNome(e)} />
                <InputSenha placeholder='Senha'/>
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