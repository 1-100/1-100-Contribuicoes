import wget

caminho = "INSIRA AQUI O CAMINHO PARA DIRETORIO DATA DO SEU SKETCH"

for i in range(100):
  imagem_url = "https://source.unsplash.com/random/500x500"
  imagem_nome = str(i) + ".jpg"
  imagem_arquivo = wget.download(imagem_url, caminho + imagem_nome)
