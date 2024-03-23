import WindowHeader from '@renderer/components/UI/WindowHeader/WindowHeader'
import classes from './Inspector.module.sass'

const Inspector = () => {
  return (
    <div className={classes.inspector}>
      <WindowHeader>{'Inspector'}</WindowHeader>
    </div>
  )
}

export default Inspector
