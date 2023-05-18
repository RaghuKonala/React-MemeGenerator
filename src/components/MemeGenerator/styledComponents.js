// Style your components here
import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`
export const AppResponsiveContainer = styled.div`
  width: 100%;
  max-width: 550px;
  padding: 32px 24px;
  @media screen and (min-width: 768px) {
    width: 85%;
    max-width: 1140px;
  }
`

export const AppHeader = styled.h1`
  color: #35469c;
  font-size: 25px;
  font-weight: 600;
  font-family: 'Open Sans';
  text-align: center;
  @media screen and (min-width: 768px) {
    font-size: 35px;
    text-align: left;
  }
`
export const FormAndMemeContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`

export const MemeGeneratorForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (min-width: 768px) {
    width: 40%;
  }
`
export const LabelAndFieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`
export const CustomLabel = styled.label`
  color: #7e858e;
  font-size: 12px;
  font-weight: 500;
  font-family: 'Open Sans';
  margin-bottom: 3px;
`
export const CustomInputField = styled.input`
  height: 40px;
  padding: 12px 15px;
  border-radius: 5px;
  border: 1px solid #d7dfe9;
  color: #7e858e;
  font-size: 14px;
  font-family: 'Open Sans';
  outline: none;
`
export const CustomSelectField = styled.select`
  padding: 12px 15px;
  border-radius: 5px;
  border: 1px solid #d7dfe9;
  color: #1e293b;
  font-size: 14px;
  font-family: 'Open Sans';
  outline: none;
`
export const CustomOption = styled.option`
  font-size: 14px;
  padding: 12px 15px;
`
export const GenerateButton = styled.button`
  color: #ffffff;
  font-size: 14px;
  font-weight: 600;
  font-family: 'Open Sans';
  background-color: #0b69ff;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 12px 24px;
  border-radius: 5px;
`

export const MemeContainer = styled.div`
  background-image: url(${props => props.bgImage});
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  min-height: 300px;
  padding: 10px;
  margin-bottom: 20px;
  @media screen and (min-width: 768px) {
    width: 50%;
    margin: 0px;
  }
`
export const MemeContent = styled.p`
  color: #ffffff;
  font-size: ${props => props.font}px;
  font-weight: 600;
  font-family: 'Open Sans';
`
