# // APIs
# // http://ip-api.com/json/201.1.0.0
# // https://a.tile.openstreetmap.org/14/6045/8246.png

# // Informações uteis
# // https://wiki.openstreetmap.org/wiki/Slippy_map_tilenames#Lon./lat._to_tile_numbers

import requests
import time
import json
import math

def deg2num(lat_deg, lon_deg, zoom):
  lat_rad = math.radians(lat_deg)
  n = 1 << zoom
  xtile = int((lon_deg + 180.0) / 360.0 * n)
  ytile = int((1.0 - math.asinh(math.tan(lat_rad)) / math.pi) / 2.0 * n)
  return xtile, ytile

zoom = 14
contador = 1
cidades = []

f = open('dados_unicos_2.js', 'w', encoding="utf-8")
f.write('const dados = [\n')

while contador <= 100:
  repetido = True
  tentativas = 0
  
  while repetido:

    ip =  str(contador + tentativas)
    ip =  f'{200}.{ip}.{ip}.{ip}'  
    r = requests.get(f'http://ip-api.com/json/{ip}')
    print(r.status_code)
    
    if r.status_code != 200:
      print(r.status_code)
      tentativas =+ 1
      break

    d = r.json()
    if d['city'] in cidades:
      repetido = True
      tentativas += 1
      print('repetido')
      print(contador, ip, tentativas)
    else:
      print(d['status'])
      print(contador, d['city'], d['lat'], d['lon'])
      cidades.append(d['city'])
      x, y = deg2num(d['lat'], d['lon'], zoom)
     
      f.write('{"ip": "' + ip + '", "cidade": "' + d['city'] + '", "lat": ' + str(d['lat']) + ', "lon": ' + str(d['lon']) + ', "x_tile": ' + str(x) + ', "y_tile": ' + str(y) + '},')
      f.write('\n')

      repetido = False
      contador += 1 

f.write(']\n')
f.close()