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
    height: 300px;
    justify-content: space-around;
    align-items: center;
    background-color:#fff;
    
`;

const Titulo = styled.Text`
    padding-top:20px;
    padding-bottom: 20px;
    font-size: 20px;
`;

const BtnEntrar = styled.TouchableHighlight`
    justify-content: center;
    align-items: center;
    border: 1px solid #eee;
    width: 200px;
    height: 50px;
    border-radius: 25px;
    padding: 15px;
    background-color:#7b70e6;
`;

const TitleBtnEntrar = styled.Text`
    font-size: 15px;
    color:#fff;
`;

const BtnCadastrar = styled.TouchableHighlight`
    justify-content: center;
    align-items: center;
    padding-top:10px;
    border: 1px solid #7b70e6;
    width: 200px;
    height: 50px;
    border-radius: 25px;
    padding: 15px;
    background-color:#fff;
`;

const TitleBtnCadastrar = styled.Text`
    font-size: 15px;
    color:#7b70e6;
`;

const AreaSeparador = styled.View`
    justify-content: space-around;
    align-items: center;
    flex-direction: row;
`;

const Separador = styled.View`
    width: 40px;
    height: 1px;
    background-color: #ccc;
`;

const TextSeparador = styled.Text`
    padding: 5px;
    color: #ccc;
`;

const AreaSocial = styled.View`
    width:50%;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding-bottom: 10px;
`;

const BtnFacebook = styled.TouchableHighlight`
    justify-content: center;
    align-items: center;
    width:35px;
    height: 35px;
    border-radius: 5px;
    background-color: blue;
`;

const BtnGmail = styled.TouchableHighlight`
    justify-content: center;
    align-items: center;
    width:35px;
    height: 35px;
    border-radius: 5px;
    background-color: red;
`;

const TitleBtnSocial = styled.Text`
    font-size: 23px;
    color: white;
    font-weight: bold;
`;


const Screen = (props) => {

    const [nome, setNome] = useState('');

    const fazerLogin = () => {
        props.navigation.navigate('Login');
    }

    const cadastrar = () => {
        props.navigation.navigate('CadastroUser');
    }

    return (
        <Page>
            <AreaLogin>
                <Titulo>Bem vindo ao Personal Fit</Titulo>
                <BtnEntrar onPress={fazerLogin}>
                    <TitleBtnEntrar>Entrar</TitleBtnEntrar>
                </BtnEntrar>
                <BtnCadastrar>
                    <TitleBtnCadastrar onPress={cadastrar}>Cadastre-se</TitleBtnCadastrar>
                </BtnCadastrar>
                <AreaSeparador>
                    <Separador></Separador>
                    <TextSeparador>Ou entre usando</TextSeparador>
                    <Separador></Separador>
                </AreaSeparador>
                <AreaSocial>
                    <BtnFacebook>
                        <TitleBtnSocial>f</TitleBtnSocial>
                    </BtnFacebook>
                    <BtnGmail>
                        <TitleBtnSocial>g</TitleBtnSocial>
                    </BtnGmail>
                </AreaSocial>
            </AreaLogin>
        </Page>

    );
}

export default Screen;