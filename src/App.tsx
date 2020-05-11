import React from 'react';
import './App.css';
import Poker from './poker';

class App extends React.Component {
  private poker: Poker = new Poker([13, 8, 2, 19, 45, 31, 13, 9, 14, 52, 37, 47, 24, 42, 8, 7]);
  componentDidMount(){
    this.poker.initGame();
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
