import React from 'react';
import './App.css';
import Poker from './poker';
import { instances } from './instances';

class App extends React.Component {
  //private poker: Poker = new Poker(instances[9]); // CHANGE HERE THE INDEX TO EXECUTE
  componentDidMount(){
    

    instances.map((value, i): void => {
      var startTime = window.performance.now();
      new Poker(value).initGame();
      console.log(`End ${i+1}`, window.performance.now() - startTime);
    })
  }

  render(): React.ReactNode{
    return (
      <div className="App">
        <header className="App-header">
        
          <p>
            Consulte o console do navegador
          </p>
        
        </header>
      </div>
    );
  }
}

export default App;
