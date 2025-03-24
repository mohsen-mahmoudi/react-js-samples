import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CounterWithProp from './1-set-prop-to-component/CounterWithProp'
import LifeCycle from './2-lifeCycle/LifeCycle'
import UnMounting from './3-unmounting/UnMounting'
import ErrorHandler from './4-error-boundary/Error'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        {/* <CounterWithProp defaultValue={5} testProp />
        <CounterWithProp /> */}
        <p>============</p>
        {/* <LifeCycle /> */}
        <p>============</p>
        {/* <UnMounting /> */}
        <p>============</p>
        <ErrorHandler />
        <p>============</p>
      </div>
      <h1>Vite + React</h1>
    </>
  )
}

export default App
