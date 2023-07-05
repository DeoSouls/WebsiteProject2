import React from 'react';
import styles from '../CssModules/App.module.css';
import Main from './Main/Main';
import Registration from './Registration/Registration';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Auth } from './Auth/Auth';

class App extends React.Component {

  styleComponent: string = styles.main_title;

  render(): React.ReactNode {

    return (
      <div>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Main/>} />
              <Route path='/auth' element={<Auth/>} />
              <Route path='/register' element={<Registration/>} />
            </Routes>
          </BrowserRouter>
      </div>
    );
  }
}

export default App;