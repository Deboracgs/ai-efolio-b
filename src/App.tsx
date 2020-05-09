import React from 'react';
import './App.css';
import Poker from './poker';

class App extends React.Component {
  private poker: Poker = new Poker();
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
