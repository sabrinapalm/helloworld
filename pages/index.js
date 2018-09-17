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

// TODO:
// För godkänt krävs ska appen uppfylla
// server-side rendering med Next.js
// Express används som webbserver
// appen har webbsidor som stöder CRUD-funktionalitet
// appen använder ett API för CRUD, som använder querystring och/eller parametrar och levererar dynamisk data i JSON-format
// varje webbsida är uppbyggd med flera olika React-komponenter
// minst en webbsida (route) är uppbyggd med många olika React-komponenter
// appen innehåller formatering (CSS) och bilder
// appen är funktionell i sitt gränssnitt
//
// För väl godkänt ska appen uppfylla
// inlämnad och redovisad i tid
// tekniken lifting state eller Redux används
// appen är funktionell och elegant i sitt gränssnitt


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
        <FormDialog />
      </BackgroundImage>
      <CityContainer>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </CityContainer>
    </MuiThemeProvider>
  </Fragment>
)
