import * as React from 'react';
import './App.css';
import Youtube from './Youtube';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <p className="App-intro">
          Youtube api fetch test
        </p>
        <Youtube />
      </div>
    );
  }
}

export default App;
