from cycler import cycler
from scipy.io.wavfile import read
from pydub import AudioSegment
from tempfile import mktemp
import matplotlib.pyplot as plt
import numpy as np
import extenso as ex

erros = ''

for n in range(1, 101):
    
    try:
        grafico_caminho = 'graficos/' + str(n) + '.png'
        audio_caminho = 'audios/' + str(n) + '.mp3'
        audio_mp3 = AudioSegment.from_file(audio_caminho, format="mp3")
        audio_wav = mktemp('.wav')
        audio_mp3.export(audio_wav, format="wav")  

        samplerate, data = read(audio_wav)

        # Compensação para centralizar o gráfico no zero.
        data = [d - 120 for d in data]

        duration = len(data)/samplerate
        time = np.arange(0,duration,1/samplerate) #time vector
        
        eixos_diferenca = len(time) - len(data)
        
        if eixos_diferenca > 0:
            time = np.delete(time, -1)

        plt.rc('font', size=10)
        plt.rc('font', family='JetBrains Mono')

        plt.rc('figure', facecolor='black')
        plt.rc('figure.subplot', top=0.83)
        plt.rc('figure.subplot', bottom=0.2)
        plt.rc('figure.subplot', right=0.9)
        plt.rc('figure.subplot', left=0.25)

        plt.rc('axes', facecolor='black')
        plt.rc('axes', edgecolor='white')
        plt.rc('axes', labelcolor='white')
        plt.rc('axes', titlecolor='white')
        plt.rc('axes', prop_cycle=cycler(color =['white']))
        plt.rc('axes', xmargin=0)
        plt.rc('axes', labelpad=20)
        plt.rc('axes', titlepad=20)
        plt.rc('axes', titlesize=10)

        plt.rc('xtick', color='white')
        plt.rc('ytick', color='white')

        plt.rc('lines', color='white')
        plt.rc('lines', linewidth=0.2)

        plt.figure(figsize=(5, 5))
        plt.xlabel('TEMPO (S)', color='white')
        plt.xlim(0, 2)
        plt.ylabel('AMPLITUDE')
        plt.ylim(-18000, 18000)
        plt.plot(time,data)
        plt.grid(visible=True)
        plt.title(ex.escrever(n).upper())

        plt.savefig(grafico_caminho)
        plt.close()
        print(n)
        
    except Exception as e:
        print('Erro na contagem ' + str(n))
        print(e)  
        erros += str(n) + ', '

print(erros)