import GlobalStyle from '../components/GlobalStyle'
import AddButton from '../components/AddButton'
import BackgroundImage from '../components/BackgroundImage'
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import createPalette from '@material-ui/core/styles/createPalette';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import Logo from '../components/Logo'

const muiTheme = createMuiTheme({
  palette: createPalette({
    primary: {
      main: "#FFF",
    },
    secondary: {
      main: "#eee",
      contrastText: '#fff',
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
  <MuiThemeProvider theme={muiTheme}>
    <BackgroundImage>
      <GlobalStyle />
      <Logo />
        <AddButton>
        LOREM IPSUM
        </AddButton>
    </BackgroundImage>
  </MuiThemeProvider>
)
