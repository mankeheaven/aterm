import { observer } from 'mobx-react'
import styles from './index.module.css'
import ActivityItem from './item'
import { useLayoutStore } from '@renderer/store/layout'

const Activity = () => {
  const { layoutStore } = useLayoutStore()

  return (
    <div className="activity">
      <ActivityItem
        type="device"
        title={'device'}
        active={layoutStore.activity === 'device'}
        onClick={() => {}}
        onDoubleClick={() => layoutStore.initSiderbarSize()}
      />
      <ActivityItem
        type="plugin"
        title={'plugin'}
        active={layoutStore.activity === 'plugin'}
        onClick={() => layoutStore.changeActivity('plugin')}
        onDoubleClick={() => layoutStore.initSiderbarSize()}
      />

      <div className={styles.bottom}>
        <ActivityItem type="setting" title={'setting'} onClick={() => {}} />
      </div>
    </div>
  )
}

export default observer(Activity)
