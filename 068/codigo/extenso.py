def escrever_numero_extenso(n):
    
  unidades = ["um", "dois", "três", "quatro", "cinco", "seis", "sete", "oito", "nove"]
  dezenas_iniciais = ["dez", "onze", "doze", "treze", "quatorze", "quinze", "dezesseis", "dezessete", "dezoito", "dezenove"]
  dezenas = ["vinte", "trinta", "quarenta", "cinquenta", "sessenta", "setenta", "oitenta", "noventa"]
  centena = ["cem"]

  n_string = str(n)
  n_string_len = len(n_string)
  n_extenso = ""

  if n_string_len > 2:
    n_extenso = centena[0]
    return n_extenso
  
  if n_string_len > 1:
    primeiro_digito = int(n_string[0])
    ultimo_digito = int(n_string[1])

    if n == 10:
      index = 0
      n_extenso = dezenas_iniciais[index]
      return n_extenso
    
    if n <= 19:
      index = ultimo_digito
      n_extenso = dezenas_iniciais[index]
      return n_extenso
    
    if ultimo_digito == 0:
      index = primeiro_digito - 2
      n_extenso = dezenas[index]
      return n_extenso
    
    if ultimo_digito != 0:
      index = primeiro_digito - 2
      n_extenso = dezenas[index]
      n_extenso += " e "
      index = ultimo_digito - 1
      n_extenso += unidades[index]
      return n_extenso
  
  index = n - 1
  n_extenso = unidades[index]
  return n_extenso