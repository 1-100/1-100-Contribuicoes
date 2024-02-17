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
    no_stroke()
#     frame_rate(5)
    ellipse_mode(CORNER)
    
    background(0)

def draw():
    global contador
    
    seletor = contador % 5 #coroa_simples, coroa_dupla, machado, losango, circulo
    
    largura = random(width * 0.4, width)
    altura = largura
    x = width / 2 - largura / 2
    y = x
    
    blend_mode(BLEND)
    if contador % 2 == 0:
        blend_mode(DIFFERENCE)
    
    if seletor == 0:
        pontas = random_choice([3,5,7,9,11,13,15])
        pontas_altura = random(0.3, 0.7)
        coroa_simples(x, y, largura, altura, pontas, pontas_altura)
        
    if seletor == 1:
        pontas = random_choice([3,5,7,9,11,13,15])
        pontas_altura = random(0.1, 0.9)
        coroa_dupla(x, y, largura, altura, pontas, pontas_altura)
    
    if seletor == 2:
        haste_largura = random(0.3, 0.8)
        machado(x, y, largura, altura, haste_largura)
    
    if seletor == 3:
        abertura_largura = random(0.1, 0.9)
        losango(x, y, largura, altura, abertura_largura)
    
    if seletor == 4:
        circle(x, y, largura)
    
    save(str(contador) + ".jpg")
    
    contador = contador + 1
    
    if contador > 100:
        no_loop()

def coroa_simples(x, y, largura, altura, pontas_qtd, pontas_altura_relativa):
    pontas_altura = altura * pontas_altura_relativa
    pontas_deslocamento = largura / (pontas_qtd - 1)
    begin_shape()
    for i in range(pontas_qtd):
        ponta_x = x + i * pontas_deslocamento
        ponta_y = y
        if i % 2 != 0:
            ponta_y = y + pontas_altura
        vertex(ponta_x, ponta_y)
    vertex(x + largura, ponta_y + altura)
    vertex(x, ponta_y + altura) 
    end_shape(CLOSE)
    
def coroa_dupla(x, y, largura, altura, pontas_qtd, pontas_altura_relativa):
    pontas_altura = altura * pontas_altura_relativa / 2
    pontas_deslocamento = largura / (pontas_qtd - 1)
    begin_shape()
    for i in range(pontas_qtd):
        ponta_x = x + i * pontas_deslocamento
        ponta_y = y
        if i % 2 != 0:
            ponta_y = y + pontas_altura
        vertex(ponta_x, ponta_y)
    for i in range(pontas_qtd):
        ponta_x = (x + largura) - (i * pontas_deslocamento)
        ponta_y = y + altura
        if i % 2 != 0:
            ponta_y = (y + altura) - pontas_altura
        vertex(ponta_x, ponta_y)
    end_shape(CLOSE)
    
# def machado(x, y, largura, altura, haste_largura_relativa):
#     haste_largura = largura * haste_largura_relativa
#     begin_shape()
#     vertex(x, y)
#     vertex(x + largura, y + altura)
#     vertex(x + largura, y)
#     vertex(x, y + altura)
#     end_shape(CLOSE)
#     haste_x = x + haste_largura / 2
#     haste_y = y
#     rect(haste_x, haste_y, haste_largura, altura)

def machado(x, y, largura, altura, haste_largura_relativa):
    haste_largura = largura * haste_largura_relativa / 2
    begin_shape()
    vertex(x, y)
    vertex(x + haste_largura, y + haste_largura)
    vertex(x + haste_largura, y)
    vertex(x + (largura - haste_largura), y)
    vertex(x + (largura - haste_largura), y + haste_largura)
    vertex(x + largura, y)
    vertex(x + largura, y + altura)
    vertex(x + (largura - haste_largura), y + (altura - haste_largura))
    vertex(x + (largura - haste_largura), y + altura)
    vertex(x + haste_largura, y + altura)
    vertex(x + haste_largura, y + (altura - haste_largura))
    vertex(x, y + altura)
    end_shape(CLOSE)
    
def losango(x, y, largura, altura, abertura_relativa):
    abertura_largura = largura * abertura_relativa / 2
    begin_shape()
    vertex(x + abertura_largura, y + altura / 2)
    vertex(x + largura / 2, y)
    vertex(x + (largura - abertura_largura), y + altura / 2)
    vertex(x + largura / 2, y + altura)
    end_shape(CLOSE)
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
