const rootContainer = document.getElementById('root');

const root = ReactDOM.createRoot(rootContainer);

class Counter2 extends React.Component {

    state = {
        counter: 0
    }

    increase = () => {this.setState({ counter: this.state.counter + 1 })}
    decrease = () => {this.setState({ counter: this.state.counter - 1 })}

    valueEl = () => {
        // javascript xml (jsx)
        // this code is jsx change this to dom element
        return <span>{this.state.counter}</span>
    }
    increateEl = <button style={{margin: '5px'}} onClick={() => this.increase()}>increase</button>
    decreateEl = <button onClick={() => {this.decrease()}}>decrease</button>
    
    
    render() {
        return <div>{[this.valueEl(),this.increateEl,this.decreateEl]}</div>
    }

    // this return equals to upper render method with all elements
    render() {
        return <div>
            <span>{this.state.counter}</span>
            <button style={{margin: '5px'}} onClick={() => {this.increase()}}>increase</button>
            <button onClick={() => {this.decrease()}}>increase</button>
            </div>
    }
    
}

root.render([<Counter2/>,<Counter2/>]);
// same to upper render method
root.render(<div><Counter2/><Counter2/></div>);
