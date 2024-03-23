import { DrawEditor } from '@renderer/core/Core'
import { useEffect } from 'react'
import classes from './Editor.module.sass'

const Editor = () => {
  useEffect(DrawEditor, [])
  return (
    <div className={classes.editor}>
      <canvas id="mainEditorCanvas"></canvas>
    </div>
  )
}

export default Editor
