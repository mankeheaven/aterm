import { Splitter } from 'antd'
import Titlebar from './parts/titlebar'
import { env } from './utils/env'
import Activity from './parts/activity'
import Status from './parts/status'
import Siderbar from './parts/siderbar'
import Main from './parts/main'

//TODO spliter bar background color
const App = () => {
  const platformClass = env.isMac ? 'macApp' : env.isLinux ? 'linuxApp' : 'windowsApp'

  return (
    <div className={`app ${platformClass}`}>
      <div className="parts">
        <Titlebar />
        <div className="contents nonDraggable">
          <Activity />

          <Splitter>
            <Splitter.Panel defaultSize={200} min={0} max={600}>
              <Siderbar />
            </Splitter.Panel>
            <Splitter.Panel>
              <Main />
            </Splitter.Panel>
          </Splitter>
        </div>
        <Status />
      </div>
    </div>
  )
}

export default App
