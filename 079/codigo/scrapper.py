import secrets
import requests
import io
from bs4 import BeautifulSoup
from PIL import Image, ImageFilter, ImageOps, ImageEnhance

top_albums_url = 'http://ws.audioscrobbler.com/2.0/?method=user.gettopalbums&user=bixogrilo&limit=100&period=12month&api_key=' + secrets.API_KEY

img_tamanho = 500
caminho = 'saida/'

def pegar_albums(url):
  r = requests.get(url)
  soup = BeautifulSoup(r.content, 'xml')
  albums = soup.find_all('album')
  
  for a in albums:
    album_rank = a.get('rank')
    album_artist = a.artist.find_all('name')[0].string
    album_name = a.find_all('name')[0].string
    album_url = a.url.string
    album_cover_url = a.find_all('image')[3].string
    album_cover_url = album_cover_url.replace('300x300', '500x500')
    salvar_capa(album_cover_url, album_rank)
  return

def salvar_capa(url, index):
  r = requests.get(url, stream=True)
  if r.status_code == 200:
    img = Image.open(io.BytesIO(r.content))

    enhancer = ImageEnhance.Contrast(img)
    img = enhancer.enhance(4)
    img = img.convert(mode='1')
    img.save(caminho + index + '.jpg')
    
    # img_blur = img.filter(ImageFilter.GaussianBlur(radius = 0))
    # img_grayscale = ImageOps.grayscale(img_blur)
    # enhancer = ImageEnhance.Contrast(img_grayscale)
    # img_grayscale = enhancer.enhance(4)
    # img_threshold = img_grayscale.point( lambda p: 255 if p > 127 else 0 )
    # img_threshold.save(caminho + index + '.jpg')


  return

pegar_albums(top_albums_url)



# r = requests.get('https://file-examples.com/storage/fefbfe84f862d721699d168/2017/10/file_example_PNG_500kB.png', stream=True)
# r.raise_for_status()
# r.raw.decode_content = True  
# with Image.open(r.raw) as img:
#     img.show()
# r.close() 