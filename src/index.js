import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

function Display(props){
    return(
      <input type="text" className="displayarea" value={props.value} disabled/>
    );
}

function Key(props) {
  return (
    <button className="key" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

class Board extends React.Component{
  constructor(props) {
  super(props);
    this.state = {
      key: 0,
    };
  }

  renderKey(i) {
   return (
     <Key
       value={[i]}
       onClick={() =>  this.handleClick(i)}
     />
   );
 }
 renderDisplay(i) {
  return (
    <Display
      value={this.state.key}
    />
  );
}
 handleClick(i,calculate){
   let key;
   if (i === "=") {
     let result = this.state.key;
      key = eval(result);
   }else {
      key = (this.state.key +i).toString();
   }
   this.setState({
     key:key
   });
 }
  render(){
    return(
      <div className="wrapper">
        {this.renderDisplay()}
        <div className="board-row">
          {this.renderKey(7)}
          {this.renderKey(8)}
          {this.renderKey(9)}
          {this.renderKey('/')}
        </div>
        <div className="board-row">
          {this.renderKey(4)}
          {this.renderKey(5)}
          {this.renderKey(6)}
          {this.renderKey('*')}
        </div>
        <div className="board-row">
          {this.renderKey(1)}
          {this.renderKey(2)}
          {this.renderKey(3)}
          {this.renderKey('-')}
        </div>
        <div className="board-row">
          {this.renderKey(0)}
          {this.renderKey('.')}
          {this.renderKey('=')}
          {this.renderKey('+')}
        </div>
      </div>
    );
  }
}

class  Calculator extends React.Component {
  render(){
    return(
      <div className="calc">
        <Board />
      </div>
    );
  }
}

ReactDOM.render(<Calculator />, document.getElementById('root'));
