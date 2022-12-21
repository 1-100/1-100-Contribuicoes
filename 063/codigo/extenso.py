def escrever(n):
    unidades = ["um", "dois", "três", "quatro", "cinco", "seis", "sete", "oito", "nove"]
    dezenas_iniciais = ["dez", "onze", "doze", "treze", "quatorze", "quinze", "dezesseis", "dezessete", "dezoito", "dezenove"]
    dezenas = ["vinte", "trinta", "quarenta", "cinquenta", "sessenta", "setenta", "oitenta", "noventa"]
    centena = ["cem"]

    n_string = str(n)
    extenso = ""

    if len(n_string) > 2:
        extenso = centena[0]
        return extenso

    if len(n_string) > 1:

        primeiro_digito = int(n_string[0])
        ultimo_digito = int(n_string[1])

        if n == 10:
            index = 0
            extenso = dezenas_iniciais[index]
            return extenso

        if n <= 19: 
            index = ultimo_digito
            extenso = dezenas_iniciais[index]
            return extenso

        if ultimo_digito == 0:
            index = primeiro_digito - 2
            extenso = dezenas[index]
            return extenso

        if ultimo_digito != 0:
            index = primeiro_digito - 2
            extenso = dezenas[index]
            extenso += " e "
            index = ultimo_digito - 1
            extenso += unidades[index]
            return extenso

    index = n - 1
    extenso = unidades[index]
    return extenso