import { Fragment, PureComponent, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CounterWithProp from './part2/1-set-prop-to-component/CounterWithProp'
import LifeCycle from './part2/2-lifeCycle/LifeCycle'
import UnMounting from './part2/3-unmounting/UnMounting'
import ErrorHandler from './part2/4-error-boundary/Error'
import ListKeys from './part2/5-listKeys/ListKeys'
import FragmentTest from './part2/6-fragment/FragmentTest'
import PortalTest from './part2/7-portal/PortalTest'
import FormTest from './part2/8-form/FormTest'
import FormTest2 from './part2/8-form/FormTest-2'
import AdvancedSetState from './part2/9-advancedSetState/AdvancedSetState'

import CreateRef from './part3/1-createRef/CreateRef'
import PureComponentTest from './part3/2-pureComponent/PureComponentTest'
import HOC from './part3/3-HOCs/App'

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
        {/* <AdvancedSetState /> */}

        {/* <CreateRef /> */}
        {/* <PureComponentTest /> */}

        <HOC />
      </div>
      <h1>Vite + React</h1>
    </>
  )
}

export default App
