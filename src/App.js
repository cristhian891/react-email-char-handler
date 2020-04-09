import React, {Component} from 'react';
import './App.css';
import UserInput from './Input/UserInput'
import UserOutput from './Output/UserOutput'
import Validation from './Validation/Validation'
import Char from './Chart/Chart'

class App extends Component {

    state = {
        username: 'crisprec',
        length: 0,
        textArray: [],
        input: null
    };

    eventHandler = (event) => {
        this.setState({username: event.target.value})
    };

    lengthHandler = (event) => {
        let username = event.target.value;
        this.setState({
            length: username.length,
            textArray: username.split('')
        })
    };

    deleteCharHandler = (letter) => {
        const txtArray = [...this.state.textArray];

        txtArray.splice(letter, 1);
        console.log(letter);
        let newInput = txtArray.join('');

        this.setState({
            textArray: txtArray,
            input: newInput
        });
    };

    render() {
        return (
            <div className="App">
                <h1>This is my FIRST ASSIGMENT</h1>
                <UserInput changed={this.eventHandler} nameVal={this.state.username}/>
                <UserOutput username={this.state.username}/>
                <UserOutput username={this.state.username}/>
                <UserOutput username={this.state.username}/>
                <UserOutput username={this.state.username}/>
                <input type="text" id="email" onChange={this.lengthHandler} value={this.state.input}/>
                <p>Email length:{this.state.length}</p>
                <Validation len={this.state.length}/>

                {this.state.textArray.map((nameChar, index) => {
                    return <Char charac={nameChar}
                                 delete={() => this.deleteCharHandler(index)}/>
                })}
            </div>
        );
    }
}

export default App;
