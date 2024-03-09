import requests
import io
from urllib.parse import unquote
from selenium import webdriver
from selenium.webdriver.common.by import By
from PIL import Image, ImageFilter, ImageOps, ImageEnhance

# url_base = "https://duckduckgo.com/?q=[numero]&t=h_&iar=images&iaf=layout%3ASquare&iax=images&ia=images"
# url_base = "https://duckduckgo.com/?q=[numero]&t=h_&iar=images&iaf=layout%3ASquare%2Clicense%3AAny&iax=images&ia=images"
url_base = "https://duckduckgo.com/?q=[numero]&t=h_&iar=images&iaf=layout%3ASquare%2Csize%3ALarge%2Ccolor%3AMonochrome&iax=images&ia=images"
pasta_saida = 'imagens-4/'
driver = webdriver.Firefox()

def pegar_imagem(url, numero):
  
  url = url.replace('[numero]', str(numero))

  driver.get(url)
  driver.implicitly_wait(5)
  imagens_tags = driver.find_elements(By.CLASS_NAME, 'tile--img__img')

  if not imagens_tags:
    return

  src = imagens_tags[0].get_attribute('data-src')
  src = unquote(src) # Replace %xx escapes with their single-character equivalent.
  src = src.split('=', maxsplit=1)
  src = src[1]

  salvar_imagem(src, numero)

def salvar_imagem(url, numero):
  r = requests.get(url, stream=True)
  if r.status_code == 200:
    img = Image.open(io.BytesIO(r.content))
    img.resize((500,500))
    img_grayscale = ImageOps.grayscale(img)
    img_grayscale.save(f'{pasta_saida}{numero}.jpg')

def pegar_imagens(url):
  
  for i in range(1, 101):
    pegar_imagem(url, i)
  driver.quit()


pegar_imagens(url_base)