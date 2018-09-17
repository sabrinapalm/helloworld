import React,{ Component, Fragment } from 'react'
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

import fetch from 'isomorphic-unfetch'
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

const Index = (props) => (
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
      { Object.keys(props.data).map( id =>{
        const item = props.data[id];
        return <Card data={item} key={id} />
      })}
    </CityContainer>
  </MuiThemeProvider>
  </Fragment>
)

Index.getInitialProps = async function() {
  const res = await fetch('http://localhost:3000/travel/')
  const data = await res.json()
  return {
    data
  }
}

export default Index;
