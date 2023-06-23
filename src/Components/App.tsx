import React from 'react';
import styles from '../CssModules/App.module.css';
import Button from '@mui/material/Button';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import Main from './Main/Main';
import Registration from './Registration/Registration';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { purple, red } from '@mui/material/colors';

class App extends React.Component {

  styleComponent: string = styles.main_title;

  render(): React.ReactNode {

    const theme = createTheme({
      breakpoints: {
        values: {
          xs: 0,
          sm: 600,
          md: 900,
          lg: 1200,
          xl: 1536,
        },
      },
      palette: {
        primary: {
          main: '#FFA07A'
        }
      }
    });

    const styles = (theme) => ({
      root: {
        backgroundColor: 'blue',
        // Match [0, md)
        //       [0, 900px)
        [theme.breakpoints.down('md')]: {
          backgroundColor: 'red',
        },
      },
    });

    // const classes = styles(theme);

    return (
      <div>
          {/* <h1 className='text-3xl font-bold underline'>hi</h1>
          <div className={this.styleComponent}>Hello World From React-Rollup</div> */}
          {/* <ThemeProvider theme={theme}>
            <CssBaseline />
            <h1>h1 element</h1>
            <Button sx={classes.root}>Primary</Button>
            <Button color="secondary">Secondary</Button>
          </ThemeProvider> */}

          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Main/>} />
              <Route path='/auth' element={<Main/>} />
              <Route path='/register' element={<Registration/>} />
            </Routes>
          </BrowserRouter>
      </div>
    );
  }
}

export default App;