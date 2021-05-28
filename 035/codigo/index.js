const canvasSketch = require('canvas-sketch')
const random = require('canvas-sketch-util/random')

const settings = {
  dimensions: [500, 500],
  animate: true,
  // -- for debugging
  duration: 10,
  fps: 10,
  // -- for exporting
  // duration: 100,
  // fps: 1,
}

const sketch = ({ width, height }) => {
  const getUnit = (n) => n % 10
  const getTen = (n) => Math.trunc(n % 100 / 10)
  const getHundred = (n) => Math.trunc(n / 100)
  const padZero = (n, width) => {
    n = n + ''
    return (n.length >= width)
      ? n
      : Array.from({length: width - n.length}, (_) => '0').join('') + n
  }

  const randomCounter = [
    1,
    ...random.shuffle(Array.from({length: 98}, (_, i) => i + 2)),
    100
  ]

  return ({ context, width, height, playhead, frame }) => {
    let currNumber = randomCounter[frame % randomCounter.length]

    context.fillStyle = 'black'
    context.fillRect(0, 0, width, height)

    context.fillStyle = 'white'
    context.font = '60px "JetBrains Mono NL Slashed", monospace';
    context.textAlign = 'center'
    context.textBaseline = 'middle'

    context.fillText(padZero(currNumber, 3), width/2, height/2);
  }
}

canvasSketch(sketch, settings)
