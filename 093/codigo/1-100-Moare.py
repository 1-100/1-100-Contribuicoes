'''
Este código roda usando o py5 com o modo importado.
Para rodar, recomendo utilizar o guia de instalação do Thonny e py5
do Alexandre Villares:
https://abav.lugaralgum.com/como-instalar-py5/
'''

contador = 1

def setup():
    size(500, 500)
    no_smooth()
    background(0)
    stroke(255)
    
def draw():
    global contador
    background(0)
       
#     pontas = 200
    pontas = floor(remap(contador, 1, 100, 200, 500))
    y = remap(contador, 1, 100, 250, 0)
    x = remap(contador, 1, 100, 250, 0)
    circulo(x, y, width * 2, pontas)
    circulo(width - x, height - y, width * 2, pontas)
      
    save(str(contador) + ".jpg")
    
    contador = contador + 1
    
    if contador > 100:
        no_loop()
    
def circulo(centro_x, centro_y, raio, pontas):
    passo = TWO_PI / pontas
    for i in range(pontas):
        angulo = passo * i
        x = centro_x + cos(angulo) * raio
        y = centro_y + sin(angulo) * raio
        line(centro_x, centro_y, x, y)
    
    
    