const canvasSketch = require('canvas-sketch')
const PoissonDiskSampling = require('poisson-disk-sampling')

const settings = {
  dimensions: [500, 500],
  animate: true,
  duration: 10,
  fps: 10,
}

const TWO_PI = Math.PI * 2

const sketch = ({ canvas, width, height }) => {

  const pointSize = width * 0.085
  const pointsLimit = 100

  const psc = new PoissonDiskSampling({
    shape: [width-pointSize, height-pointSize],
    minDistance: pointSize,
    maxDistance: pointSize* 1.2,
    tries: 1000,
  })

  let points = psc.fill()

  console.log(points)

  if (points.length < pointsLimit) {
    console.error(`Less than ${pointsLimit} points generated! Reload to try again!`)
    points = []
  } else {
    points = points.slice(0, pointsLimit).map(point => {
      return {
        x: point[0],
        y: point[1],
      }
    })
  }

  return ({ context, width, height, playhead, frame }) => {
    context.fillStyle = 'black'
    context.fillRect(0, 0, width, height)

    context.fillStyle = 'white'
    points.forEach((point, i) => {
      if (i <= frame) {
        let x = point.x + pointSize/2
        let y = point.y + pointSize/2

        context.beginPath()
        context.ellipse(x, y, pointSize/2, pointSize/2, 0, 0, TWO_PI)
        context.fill()
      }
    })
  }
}

canvasSketch(sketch, settings)
