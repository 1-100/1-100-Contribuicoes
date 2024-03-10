import math
import random
from PIL import Image, ImageStat

caminho_base = "D:\\Github\\1-100-Site\\content\\formas\\"
csv_nome = "formas_analisadas"

# https://stackoverflow.com/questions/3490727/what-are-some-methods-to-analyze-image-brightness-using-python
def brightness( im_file ):
  im = Image.open(im_file)
  im = im.convert(mode='RGB')
  stat = ImageStat.Stat(im)
  r,g,b = stat.mean
  return math.sqrt(0.241*(r**2) + 0.691*(g**2) + 0.068*(b**2))

def analisar_imagens():
  csv = open(csv_nome + '.csv', encoding='utf-8', mode='w')
  csv.write('forma,valor,brilho,caminho')
  csv.write('\n')
  for i in range(1, 100):
    valor_aleatorio = random.randint(1, 100)
    caminho_imagem = f'{caminho_base}{i:03}\\{valor_aleatorio}.jpg'
    brilho = math.floor(brightness(caminho_imagem))
    csv.write(f'{i:03},{valor_aleatorio},{brilho},{caminho_imagem}')
    csv.write('\n')
  csv.close()

analisar_imagens()
