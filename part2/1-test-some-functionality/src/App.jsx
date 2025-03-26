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
import Stateless from './part3/4-stateless/Stateless'
import ClassVsFunctionComponent from './part3/5-classVsFunctionComponent/ClassVsFunctionComponent'
import UseSateFunctionComponent from './part3/6-useSate/ClassVsFunctionComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h2>Vite + React</h2>
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
        {/* <HOC /> */}
        {/* <Stateless /> */}
        {/* <ClassVsFunctionComponent /> */}
        <UseSateFunctionComponent />
      </div>
    </>
  )
}

export default App
