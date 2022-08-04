import qrcode

qr = qrcode.QRCode(
    version=1,
    box_size=20,
    border=14
)

for contador in range(1, 101):
    qr.add_data(contador)
    qr.make()
    img = qr.make_image(fill_color="black", back_color="white")
    img = img.resize((500, 500))
    nome_arquivo = str(contador) + ".jpg"
    img.save(nome_arquivo)
    qr.clear()

