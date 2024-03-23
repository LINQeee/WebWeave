import { FC } from 'react'
import classes from './WindowHeader.module.sass'

interface WindowHeaderProps {
  children: string
}

const WindowHeader: FC<WindowHeaderProps> = ({ children }) => {
  return <h1 className={classes.header}>{children}</h1>
}

export default WindowHeader
