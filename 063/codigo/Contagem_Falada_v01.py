import extenso as ex

from gtts import gTTS

for n in range(1, 101):

    texto = ex.escrever(n)
    fala = gTTS(text=texto, lang='pt', slow=False)
    arquivo_nome = str(n) + ".mp3"
    fala.save("audios/" + arquivo_nome)
    print(n)