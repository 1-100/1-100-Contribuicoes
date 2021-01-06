import random
import functools 
import math

CANVAS = 500
STEPS = 100

for step in range(STEPS):
    newPage(CANVAS, CANVAS)
    points = []

    for vertex in range(step + 1):
        # Adiciona um ponto com coordenadas aleatórias à matriz
        points.append((random.randint(0, CANVAS), random.randint(0, CANVAS)))
    
    # Poligonização dos pontos, código de Pawel Pieczul
    # https://stackoverflow.com/a/57019203
    center = functools.reduce(lambda a, b: (a[0] + b[0], a[1] + b[1]), points, (0, 0))
    center = (center[0] / len(points), (center[1] / len(points)))
    points.sort(key=lambda a: math.atan2(a[1] - center[1], a[0] - center[0]))
    
    if len(points) == 1:
        r = 4
        
        oval(points[0][0], points[0][1], r, r)
    elif len(points) == 2:
        strokeWidth(2)
        stroke(0)
        line(points[0], points[1])
    else:
        polygon(*points)
        
    saveImage("~/Desktop/polygons/" + str(step + 1) + ".jpg")