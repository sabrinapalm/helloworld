import React,{ Component, Fragment } from 'react'
import createMuiTheme from '@material-ui/core/styles/createMuiTheme'
import createPalette from '@material-ui/core/styles/createPalette'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import GlobalStyle from '../components/GlobalStyle'
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


class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fetched: false,
      data: this.props.data
    }
  }

  updateData = () => {
    fetch('http://localhost:3000/travel/')
    .then((response) => {
      return response.json();
    }).then((result) => {
      this.setState({ data: result })
    })
  }

  render() {
    const { data, fetched } = this.state;
    return (
      <Fragment>
        <MuiThemeProvider theme={muiTheme}>
          <BackgroundImage>
            <GlobalStyle />
            <Logo />
              <FormDialog updateData={this.updateData}/>
            </BackgroundImage>
            <CityContainer>
          {Object.keys(data).map(id => {
            const item = data[id];
            return <Card data={item} key={id} updateData={this.updateData}/>
          })}
          </CityContainer>
        </MuiThemeProvider>
      </Fragment>
    )
  }
}

Index.getInitialProps = async function() {
  const res = await fetch('http://localhost:3000/travel/')
  const data = await res.json()
  return {
    data
  }
}

export default Index;
