import io
import requests
from bs4 import BeautifulSoup

dados_url = "https://onibussp.com.br/linhas"
csv_nome = "linhas_sptrans_cru"

def pegar_linhas(url):

  csv = open(csv_nome + '.csv', encoding='utf-8', mode='w')

  r = requests.get(url)
  soup = BeautifulSoup(r.content, 'html.parser')
  dados_linhas = soup.select(".list-group-item")

  csv.write('codigo, nome, classe')
  csv.write('\n')

  for dado in dados_linhas:
    linha_codigo = dado.select("span")[0].string
    linha_nome = dado.select("span")[1].string
    linha_classe = "Diurno"
    if "N" in linha_codigo:
      linha_classe = "Noturno"
    csv.write(f'{linha_codigo},{linha_nome},{linha_classe}')
    csv.write("\n")

pegar_linhas(dados_url)