String n_extenso(int n) {

  String[] unidades = {"um", "dois", "três", "quatro", "cinco", "seis", "sete", "oito", "nove"};
  String[] dezenas_iniciais = {"dez", "onze", "doze", "treze", "quatorze", "quinze", "dezesseis", "dezessete", "dezoito", "dezenove"};
  String[] dezenas = {"vinte", "trinta", "quarenta", "cinquenta", "sessenta", "setenta", "oitenta", "noventa"};
  String[] centena = {"cem"};

  String n_string = str(n);
  String extenso = "";

  if (n_string.length() > 2) {
    extenso = centena[0];
    return extenso;
  }

  if (n_string.length() > 1) {

    int primeiro_digito = Character.getNumericValue(n_string.charAt(0));
    int ultimo_digito = Character.getNumericValue(n_string.charAt(1));

    if (n == 10) {
      int index = 0;
      extenso = dezenas_iniciais[index];
      return extenso;
    }

    if (n <= 19) {
      int index = ultimo_digito;
      extenso = dezenas_iniciais[index];
      return extenso;
    }

    if (ultimo_digito == 0) {
      int index = primeiro_digito - 2;
      extenso = dezenas[index];
      return extenso;
    }

    if (ultimo_digito != 0) {
      int index = primeiro_digito - 2;
      extenso = dezenas[index];
      extenso += " e ";
      index = ultimo_digito - 1;
      extenso += unidades[index];
      return extenso;
    }
  }

  int index = n - 1;
  extenso = unidades[index];
  return extenso;
}
