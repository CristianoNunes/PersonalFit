import React, {useState} from 'react';
import styled from 'styled-components/native';
import DateTimePicker from '@react-native-community/datetimepicker';

const Page = styled.SafeAreaView`
    flex: 1;
    justify-content: center;
    background-color:#7b70e6;
`;

const AreaCadastro = styled.View`
    flex-wrap: wrap;
    align-self: center;
    padding: 15px;
    border: 1px solid #fff;
    border-radius: 20px;
    width: 90%;
    height: 90%;
    background-color:#fff; 
`;

const TitleInputs = styled.Text`
    font-size: 15px;
    color: #7b70e6;
    width: 50%; 
`;

const AreaRow = styled.View`
    flex-direction: row;
`;

const InputNome = styled.TextInput`
    margin-top: 5px;
    margin-bottom: 10px;
    font-size: 15px;
    border: 1px solid #7b70e6;
    width: 100%;
    height: 50px;
    border-radius: 25px;
    padding: 15px;
`;

const InputDataNiver = styled.TouchableHighlight`
    margin-top: 5px;
    margin-bottom: 10px;
    border: 1px solid #7b70e6;
    width: 45%;
    height: 50px;
    border-radius: 25px;
    padding: 15px;
`;

const ImgBtnDate = styled.Image`
    align-self: flex-end;
    tintColor: #7b70e6;
    width:20px;
    height:20px;
`;

const ViewSexo = styled.View`
    margin-left: 10px;
    margin-top: 5px;
    font-size: 15px;
    border: 1px solid #7b70e6;
    width: 50%;
    height: 50px;
    border-radius: 25px;
    padding-left: 5px;
`;

const InputSexo = styled.Picker`
    color: #7b70e6;
`;

const InputEndereco = styled.TextInput`
    margin-top: 5px;
    margin-bottom: 10px;
    font-size: 15px;
    border: 1px solid #7b70e6;
    width: 100%;
    height: 50px;
    border-radius: 25px;
    padding: 15px;
`;
const Screen = () => {
    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
    };
    
    const showMode = currentMode => {
        setShow(true);
        setMode(currentMode);
    };
    
    const showDatepicker = () => {
        showMode('date');
    };

    return (
        <Page>
            <AreaCadastro>
                
                <TitleInputs>Nome Completo</TitleInputs>
                <InputNome />
                
                <AreaRow>
                    <TitleInputs>Data de Nascimento</TitleInputs>
                    <TitleInputs>Sexo</TitleInputs>
                </AreaRow>
                <AreaRow>
                <InputDataNiver onPress={showDatepicker}>
                    <ImgBtnDate source={require('../../assets/icon-data.png')} />
                </InputDataNiver>
                    {show && (<DateTimePicker
                        testID="dateTimePicker"
                        timeZoneOffsetInMinutes={0}
                        value={date}
                        mode={mode}
                        is24Hour={true}
                        display="default"
                        onChange={onChange} /> )}
                    <ViewSexo>
                        <InputSexo>
                            <InputSexo.Item label="Masculino" value="masculino" />
                            <InputSexo.Item label="Feminino" value="feminino" />
                        </InputSexo>
                    </ViewSexo>
                </AreaRow>
                
                <TitleInputs>Endereço</TitleInputs>
                <InputEndereco />
                
                <TitleInputs>Bairro</TitleInputs>
                <InputEndereco />
                
                <TitleInputs>Município</TitleInputs>
                <InputEndereco />
                
            </AreaCadastro>
        </Page>

    );
}

Screen.navigationOptions = () =>{
    return{
        title:'Cadastre-se'
    }; 
};

export default Screen;