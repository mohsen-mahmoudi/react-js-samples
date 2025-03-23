const rootContainer = document.getElementById('root');

const root = ReactDOM.createRoot(rootContainer);

//========1
const span = React.createElement('span', {}, 'Hello')
const span2 = React.createElement('span', {}, ' World')
const el = React.createElement('div', {}, span, span2);
root.render(el);

//========2
class Counter extends React.Component {
    render() {
        return 'Hi '
    }
}

const el2 = React.createElement(Counter);
root.render(el2);

//========3
class Counter2 extends React.Component {

    state = {
        counter: 0
    }

    // this must be a method (not variable) that call every time that we want to rerender 
    valueEl = () => {
        return React.createElement('span', {}, this.state.counter)
    }

    increateEl = React.createElement('button',
        {
            style: { margin: '5px' },
            onClick: () => {
                this.setState({ counter: this.state.counter + 1 })
            }
        },
        'increase'
    )
    decreateEl = React.createElement('button',
        {
            onClick: () => {
                this.setState({ counter: this.state.counter - 1 })
            }
        },
        'decrease'
    )
    render() {
        return React.createElement('div', {}, 
            this.valueEl(),
            this.increateEl,
            this.decreateEl
        )
    }
}

//const el3 = React.createElement(Counter2);

// we can create multiple instances of the same component
const el3 = React.createElement(
    'div', {},
    React.createElement(Counter2),
    React.createElement(Counter2)
);

root.render(el3);
