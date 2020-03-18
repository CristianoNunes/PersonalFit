import React from 'react';
import styled from 'styled-components/native';

const Page = styled.SafeAreaView`
    flex: 1;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-top:15px;
`;

const AreaButton = styled.View`
    width: 46%;
    height: 130px;
    margin-top: 15px;
    border: 1px solid #7b70e6;
    border-radius: 10px;
    justify-content: space-around;
    align-items: center;
    background-color:#fff; 
`;

const TitleButton = styled.Text`
    font-weight: bold;
    font-size: 17px;
    color: #7b70e6;
`;

const ImgBtn = styled.Image`
    width: 60px;
    height:60px;
`;

const Screen = (props) => {
    return (
        <Page>
            <AreaButton>
                <ImgBtn source={require('../../assets/icon-trena.png')} />
                <TitleButton>Perimetria</TitleButton>
            </AreaButton>
            <AreaButton>
            <ImgBtn source={require('../../assets/icon-dobras.png')} />
                <TitleButton>Dobras Cutâneas</TitleButton>
            </AreaButton>
            <AreaButton>
            <ImgBtn source={require('../../assets/icon-anamnese.png')} />
                <TitleButton>Anamnese</TitleButton>
            </AreaButton>
            <AreaButton>
                <ImgBtn source={require('../../assets/icon-treino.png')} />
                <TitleButton>Treinos</TitleButton>
            </AreaButton>
        </Page>

    );
}

Screen.navigationOptions = () =>{
    return{
        title:'Personal Fit'
    }
};

export default Screen;