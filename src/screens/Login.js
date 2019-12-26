import React, { useState } from 'react';
import styled from 'styled-components/native';

const Page = styled.SafeAreaView`
    flex: 1;
    background-color:#7b70e6;
    justify-content:center;
`;

const AreaLogin = styled.View`
    flex-direction: column;
    align-self: center;
    border: 1px solid #fff;
    border-radius: 20px;
    width: 290px;
    height: 290px;
    justify-content: space-around;
    align-items: center;
    background-color:#fff;
    
`;

const Titulo = styled.Text`
    padding-top:20px;
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

const BtnEntrar = styled.Button`
`;

const Separador = styled.View`
    width: 180px;
    border: 1px solid #eee;
`;

const BtnCadastrar = styled.Text`
    color: #ccc;
`;

const Screen = (props) => {

    const [nome, setNome] = useState('');

    const fazerLogin = () => {
        props.navigation.navigate('Home', {nome});
    }

    const cadastrar = () => {
        props.navigation.navigate('CadastroUser');
    }

    return (
        <Page>
            <AreaLogin>
                <Titulo>Bem vindo ao Personal Fit</Titulo>
                <InputLogin placeholder='Login' value={nome} onChangeText={e=>setNome(e)} />
                <InputSenha placeholder='Senha'/>
                <BtnEntrar title='Entrar' onPress={fazerLogin} />
                <Separador></Separador>
                
                <BtnCadastrar onPress={cadastrar}> Cadastre-se </BtnCadastrar>
                

            </AreaLogin>
        </Page>

    );
}

export default Screen;