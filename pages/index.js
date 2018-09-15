import { Fragment } from 'react'
import createMuiTheme from '@material-ui/core/styles/createMuiTheme'
import createPalette from '@material-ui/core/styles/createPalette'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import GlobalStyle from '../components/GlobalStyle'
import AddButton from '../components/AddButton'
import BackgroundImage from '../components/BackgroundImage'
import Logo from '../components/Logo'
import Card from '../components/Card'
import FormDialog from '../components/Form'
import CityContainer from '../components/CityContainer'


const muiTheme = createMuiTheme({
  palette: createPalette({
    primary: {
      main: "#FFF",
    },
    secondary: {
      main: "#222",
      contrastText: '#222',
    },
  }),
  overrides: {
    MuiTab: {
      fullWidth: {
        maxWidth: 'initial',
      },
    },
  },
});


export default (props) => (
  <Fragment>
  <MuiThemeProvider theme={muiTheme}>
    <BackgroundImage>
      <GlobalStyle />
      <Logo />
        <AddButton>
          ADD YOUR TRIP
        </AddButton>
    </BackgroundImage>
    <CityContainer>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </CityContainer>
  </MuiThemeProvider>
  </Fragment>
)
