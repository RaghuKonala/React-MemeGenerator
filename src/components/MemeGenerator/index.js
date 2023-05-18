import {Component} from 'react'
import {
  AppContainer,
  AppResponsiveContainer,
  AppHeader,
  FormAndMemeContainer,
  MemeGeneratorForm,
  LabelAndFieldContainer,
  CustomLabel,
  CustomInputField,
  CustomSelectField,
  CustomOption,
  GenerateButton,
  MemeContainer,
  MemeContent,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]
// Write your code here

class MemeGenerator extends Component {
  state = {
    backgroundImageUrlInput: '',
    topTextInput: '',
    bottomTextInput: '',
    fontSizeInput: fontSizesOptionsList[0].optionId,
    isMemeGenerated: false,
  }

  generateMeme = event => {
    event.preventDefault()
    this.setState({isMemeGenerated: true})
  }

  updateFontSize = event => {
    this.setState({fontSizeInput: parseInt(event.target.value)})
  }

  updateBottomText = event => {
    this.setState({bottomTextInput: event.target.value})
  }

  updateTopText = event => {
    this.setState({topTextInput: event.target.value})
  }

  updateImageUrl = event => {
    this.setState({backgroundImageUrlInput: event.target.value})
  }

  renderMeme = () => {
    const {
      backgroundImageUrlInput,
      topTextInput,
      bottomTextInput,
      fontSizeInput,
    } = this.state
    return (
      <MemeContainer bgImage={backgroundImageUrlInput} data-testid="meme">
        <MemeContent font={fontSizeInput}>{topTextInput}</MemeContent>
        <MemeContent font={fontSizeInput}>{bottomTextInput}</MemeContent>
      </MemeContainer>
    )
  }

  renderMemeGeneratorForm = () => {
    const {
      backgroundImageUrlInput,
      topTextInput,
      bottomTextInput,
      fontSizeInput,
    } = this.state

    return (
      <MemeGeneratorForm onSubmit={this.generateMeme}>
        <LabelAndFieldContainer>
          <CustomLabel htmlFor="imageUrl">Image URL</CustomLabel>
          <CustomInputField
            type="text"
            id="imageUrl"
            value={backgroundImageUrlInput}
            onChange={this.updateImageUrl}
            placeholder="Enter the Image URL"
          />
        </LabelAndFieldContainer>
        <LabelAndFieldContainer>
          <CustomLabel htmlFor="topText">Top Text</CustomLabel>
          <CustomInputField
            type="text"
            id="topText"
            value={topTextInput}
            onChange={this.updateTopText}
            placeholder="Enter the Top Text"
          />
        </LabelAndFieldContainer>
        <LabelAndFieldContainer>
          <CustomLabel htmlFor="bottomText">Bottom Text</CustomLabel>
          <CustomInputField
            type="text"
            id="bottomText"
            value={bottomTextInput}
            onChange={this.updateBottomText}
            placeholder="Enter the Bottom Text"
          />
        </LabelAndFieldContainer>
        <LabelAndFieldContainer>
          <CustomLabel htmlFor="fontOption">Font Size</CustomLabel>
          <CustomSelectField
            id="fontOption"
            onChange={this.updateFontSize}
            value={fontSizeInput}
          >
            {fontSizesOptionsList.map(each => (
              <CustomOption key={each.optionId}>
                {each.displayText}
              </CustomOption>
            ))}
          </CustomSelectField>
        </LabelAndFieldContainer>
        <GenerateButton type="submit">Generate</GenerateButton>
      </MemeGeneratorForm>
    )
  }

  render() {
    const {isMemeGenerated} = this.state
    return (
      <AppContainer>
        <AppResponsiveContainer>
          <AppHeader>Meme Generator</AppHeader>
          <FormAndMemeContainer>
            {this.renderMemeGeneratorForm()}
            {isMemeGenerated && this.renderMeme()}
          </FormAndMemeContainer>
        </AppResponsiveContainer>
      </AppContainer>
    )
  }
}

export default MemeGenerator
