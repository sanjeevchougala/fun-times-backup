import React,{ Component } from 'react'
import PropTypes from 'prop-types'
import './Counter.css'
import CounterButton from './CounterButton'

class Counter extends Component{

    //Define the initial state in a constructor
    // state=> counter 0

    constructor(){
        super();

        this.state={
            counter : 0
        }

        // DONT NEED WITHJ Arrow function==> this.increment= this.increment.bind(this)
    }

    render (){
        return( 
        <div>
            <div> 
                <span className="counterval" >{this.state.counter}</span>
            </div>          
            <div className="buttonBlock"> 
                <CounterButton incrementMethod={this.increment} decrementMethod={this.decrement}></CounterButton>
                <CounterButton by={2} incrementMethod={this.increment} decrementMethod={this.decrement}></CounterButton>
                <CounterButton by={3} incrementMethod={this.increment} decrementMethod={this.decrement}></CounterButton>
                <CounterButton by={4} incrementMethod={this.increment} decrementMethod={this.decrement}></CounterButton>
                <CounterButton by={5} incrementMethod={this.increment} decrementMethod={this.decrement}></CounterButton>
                <CounterButton by={10} incrementMethod={this.increment} decrementMethod={this.decrement}></CounterButton>
                <CounterButton by={100} incrementMethod={this.increment} decrementMethod={this.decrement}></CounterButton>
                <CounterButton by={1000} incrementMethod={this.increment} decrementMethod={this.decrement}></CounterButton>
            </div> 
            <div> 
                <button className="reset" onClick={this.reset}>RESET</button>
            </div>  

        </div>
    )
    }
    
    increment = (by) => {
        //console.log('inside increment func in Counter{by}')
        //Called from increment method in CounterButton
        this.setState( 
            (prevState) => { 
                return{counter : this.state.counter + by}
            }

        )
    }

    decrement = (by) => {
        this.setState( 
            (prevState) => { 
                return{counter : this.state.counter - by}
            }
        )
    }

    reset= () => {
        //console.log('inside reset func in Counter{by}')
        this.setState({
            counter : 0
        })
    }
}

export default Counter