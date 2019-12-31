import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Landing from './components/Landing/Landing';
import Animals from './components/Animals';

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <main className='App_main'>
          <Switch>
            <Route exact path={'/'} component={Landing} />
            <Route path={'/adopt'} component={Animals} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;