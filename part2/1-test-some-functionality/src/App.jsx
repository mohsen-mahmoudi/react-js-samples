import { Fragment, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CounterWithProp from './1-set-prop-to-component/CounterWithProp'
import LifeCycle from './2-lifeCycle/LifeCycle'
import UnMounting from './3-unmounting/UnMounting'
import ErrorHandler from './4-error-boundary/Error'
import ListKeys from './5-listKeys/ListKeys'
import FragmentTest from './6-fragment/FragmentTest'
import PortalTest from './7-portal/PortalTest'
import FormTest from './8-form/FormTest'
import FormTest2 from './8-form/FormTest-2'
import AdvancedSetState from './9-advancedSetState/AdvancedSetState'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        {/* <CounterWithProp defaultValue={5} testProp />
        <CounterWithProp />*/}
        {/* <LifeCycle />*/}
        {/* <UnMounting />/}
        {/* <ErrorHandler />*/}
        {/* <ListKeys />*/}
        {/* <FragmentTest />*/}
        {/* <PortalTest /> */}
        {/* <FormTest2 /> */}
        <AdvancedSetState />
      </div>
      <h1>Vite + React</h1>
    </>
  )
}

export default App
