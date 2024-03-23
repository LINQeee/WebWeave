import { useAppDispatch, useAppSelector } from '@renderer/hooks/Redux'
import { tabsSlice } from '@renderer/store/reducers/TabsSlice'
import classes from './MainLayout.module.sass'
import Editor from './editor/Editor'
import Inspector from './inspector/Inspector'

const MainLayout = () => {
  const { allTabs, currentTab } = useAppSelector((state) => state.tabsReducer)
  const dispatch = useAppDispatch()

  return (
    <div className={classes.layout}>
      <ul className={classes.header}>
        {allTabs.map((tab) => (
          <li
            key={tab}
            className={currentTab === tab ? classes.active : undefined}
            onClick={() => dispatch(tabsSlice.actions.switchTab(tab))}
          >
            {tab}
          </li>
        ))}
      </ul>
      <div className={classes.main}>
        <Inspector />
        <Editor />
      </div>
    </div>
  )
}

export default MainLayout
