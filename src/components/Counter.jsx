import React, { Component } from 'react'

class Counter extends Component {
    constructor() {
        super()
        this.state = {
            counter: 0
        }
        console.log("calling the constuctor")
        console.log("--------------------")
    }
    componentDidMount() {
        console.log("the component was mounted")
        console.log("--------------------")
        //the usual place for calling API

    }
    componentWillUnmount() {
        console.log("the component was unmounted")
        console.log("--------------------")

    }
    plusOne() {
        this.setState({ counter: this.state.counter + 1 })
    }
    render() {
        console.log("calling the render")
        console.log("--------------------")
        return (
            <div>
                <h1>{this.state.counter}</h1>
                <button onClick={() => this.plusOne()}>add one</button>
            </div>
        )
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log(" calling the updated component")
        console.log(" -----------------")
        console.log(prevState)
        return prevState

    }
    componentDidUpdate() {
        console.log(" calling the updated component")
        console.log(" -----------------")

    }
}
export default Counter
