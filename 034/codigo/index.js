const canvasSketch = require('canvas-sketch')
const math = require('canvas-sketch-util/math')

const settings = {
  dimensions: [500, 500],
  animate: true,
  // -- for debug
  duration: 10,
  fps: 10,
  // -- for export
  // duration: 100,
  // fps: 1,
}

const sketch = ({ width, height }) => {
  const getUnit = (n) => n % 10
  const getTen = (n) => Math.trunc(n % 100 / 10)
  const getHundred = (n) => Math.trunc(n / 100)

  return ({ context, width, height, playhead, frame }) => {
    let counter = frame + 1
    let currUnit = getUnit(counter)
    let currTen = getTen(counter)
    let currHundred =  getHundred(counter)

    context.fillStyle = 'black'
    context.fillRect(0, 0, width, height)

    context.fillStyle = 'white'
    // 0-9
    let unitHeight = math.mapRange(currUnit, 0, 9, 0, height)
    context.fillRect(width/2, 0, Math.ceil(width/2), unitHeight)
    // 10-90
    let tenHeight = math.mapRange(currTen, 0, 9, 0, height)
    context.fillRect(width/6, 0, Math.ceil(width/6 * 2), tenHeight)
    // 100
    let hundredHeight = math.mapRange(currHundred, 0, 1, 0, height)
    context.fillRect(0, 0, Math.ceil(width/6), hundredHeight)
  }
}

canvasSketch(sketch, settings)
