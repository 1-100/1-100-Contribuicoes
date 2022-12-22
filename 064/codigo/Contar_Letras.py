from PIL import Image, ImageDraw, ImageFont
import random

imagem_tamanho = 500
fonte_tamanho = 200
fonte = ImageFont.truetype(font='Goozette.otf', size=fonte_tamanho)

letras = "A – B – C – D – E – F – G – H – I – J – K – L – M – N – O – P – Q – R – S – T – U – V – W – X – Y – Z"
letras = letras.split(" – ")
random.shuffle(letras)

print(letras)

for numero in range(1, 101):
    
    numero = str(numero)
    numero_letra = ""
    for d in numero:
        indice = int(d)
        numero_letra += letras[indice]
    print(numero, numero_letra)
    
    imagem = Image.new(mode = "RGB", size = (imagem_tamanho, imagem_tamanho), color = "white")
    desenho = ImageDraw.Draw(imagem)
    
    texto_esquerda, texto_topo, texto_direita, texto_base = desenho.textbbox((0, 0), numero_letra, fonte)
    texto_largura = texto_direita - texto_esquerda
    texto_altura = texto_base - texto_topo
    
    x = (imagem_tamanho - texto_largura) /2
    y = fonte_tamanho * 0.8
    desenho.text((x, y), numero_letra, font=fonte, fill=(0,0,0))

    arquivo = str(numero) + ".jpg"
    imagem.save("saida/" + arquivo)
