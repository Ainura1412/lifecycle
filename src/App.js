import React, { Component } from 'react'
import Counter from './components/Counter'

class App extends Component {
  constructor() {
    super()
    this.state = {
      mounted: true
    }
  }
  handleMount() {
    this.setState({ mounted: true })
  }
  unhandleMount() {
    this.setState({ mounted: true })
  }
  render() {
    return (
      <div>
        <button onClick={() => this.handleMount}>Mount my Componente</button>
        <button onClick={() => this.unhandleMount}>unMount my Componente</button>
        {this.state.mounted ? <Counter /> : null}
      </div>
    )
  }
}
export default App
