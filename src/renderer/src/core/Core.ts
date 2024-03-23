let mainCanvas: HTMLCanvasElement
let context: CanvasRenderingContext2D

export const DrawEditor = () => {
  mainCanvas = document.getElementById('mainEditorCanvas') as HTMLCanvasElement
  context = mainCanvas.getContext('2d')!
  context.fillStyle = 'white'
  context.fillRect(0, 0, mainCanvas.width, mainCanvas.height)
}
