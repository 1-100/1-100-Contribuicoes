# Para executar este código, instale o Processing modo Python
# https://abav.lugaralgum.com/como-instalar-o-processing-modo-python/

from itertools import combinations

def setup():
    # Calcula a posição de sete pontos em um círculo
    pts = [(sin(i * TWO_PI / 7) * 240 + 250,
            cos(i * TWO_PI / 7) * 240 + 250)
           for i in range(7)]
    # Apresenta os vértices (primeira imagem)
    draw_shape(pts) 
    # Produz as demais 99 imagens
    n = 2
    for nv in range(3, 8):  # 3, 4, 5, 6 e 7 (número de vértices)
        combos = list(combinations(pts, nv))  # calcula combinações possíveis
        for shp in combos:
            draw_shape(shp, n)  
            n += 1

def draw_shape(s, n=1):
    """Desenha e salva em um arquivo JPEG"""
    out = createGraphics(500, 500)
    beginRecord(out)
    background(255)
    strokeJoin(ROUND)
    strokeWeight(3)
    fill(240 - (len(s) - 3) * 60)        
    beginShape()
    for x, y in s:
        if n == 1:
            circle(x, y, 1.5)
        else:
            vertex(x, y)
    endShape(CLOSE)
    endRecord()
    out.save("{:03}.JPEG".format(n))
