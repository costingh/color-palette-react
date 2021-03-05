import { createMuiTheme } from '@material-ui/core/styles';

export const lightTheme = createMuiTheme({
    palette: {
        type: 'light',
        primary: {
            main: '#f9f3f3',
        },
        secondary: {
            main: '#dddddd',
        },
        primaryButton: {
            main: '#7b2e6a'
        },
        icons: {
            main: '#111'
        },
        hover: {
            main: '#ccc'
        },
        text: {
            main: '#444'
        }
    }
  });
  
  export const darkTheme = createMuiTheme({
    palette: {
        type: 'dark',
        primary: {
            main: '#222',
        },
        secondary: {
            main: '#333',
        },
        primaryButton: {
            main: '#211994'
        },
        icons: {
            main: '#111'
        },
        hover: {
            main: '#444'
        },
        text: {
            main: 'rgb(150, 150, 150)'
        }
    }
  });