let contador = 0;

function setup() {
  createCanvas(500, 500);
  ellipseMode(CORNER);
  lista_codigos = (gerador_codigos(100, 9));
  console.log(lista_codigos.length);
  frameRate(5);
}

function draw() {
  background(220);
  fill(0);
  noStroke();
  simbolo(40, 40, 420, 420, lista_codigos[contador]);
  contador++;
  // saveCanvas(contador.toString(), 'jpg');
  if(contador == 100) {
    noLoop();
  }
}

function gerador_codigo(qtd){
  let codigo = "";
  for(let i = 0; i < qtd; i++) {
    let numero = ( random() > 0.5 ) ? "1" : "0";
    codigo += numero;
  }
  return codigo;
}

function checar_repetido(lista, codigo) {
  let repetido = false;
  lista.forEach((item) => {
    if ( item === codigo ) {
      repetido = true;
      return repetido;
    }
  })
  return repetido;
}

function gerador_codigos(qtd, qtd_digitos) {
  
  let codigos = [];
  
  for(let i = 0; i < qtd; i++) {
    
    if( i == 0) {
      let primeiro_codigo = gerador_codigo(qtd_digitos); 
      codigos.push(primeiro_codigo);
    } else {
      
      let inedito = false;
      let tentativas = 0;
      
      while( inedito == false ) {
        let codigo_novo = gerador_codigo(qtd_digitos);
        if( checar_repetido(codigos, codigo_novo) ) {
          inedito = false;
        } else {
          inedito = true;
          codigos.push(codigo_novo);
        }
        tentativas++;
        if(tentativas > 100) {
          console.log("deu ruim");
          break
        }
      }
      
    }
       
  }
  return codigos;
}
  
//
  
  
function simbolo(x, y, largura, altura, codigo) {
  let grade = 6;
  let subgrade = grade/2;
  let modulo_largura = largura/(grade-1);
  let modulo_altura = altura/(grade-1);
  let codigos = codigo.split("");

  // Quadrante 1 = x Normal, y Normal

  for (let j = 0; j < subgrade; j++) {
    for (let i = 0; i < subgrade; i++) {
      let index = i + j * subgrade;
      let x_atual = x + (i * modulo_largura);
      let y_atual = y + (j * modulo_altura);
        
      if (parseInt(codigos[index]) == 1) {
        rect(x_atual, y_atual, modulo_largura, modulo_altura);
      }
    }
  }

  // Quadrante 2 = x Invertido, y Normal

  for (let j = 0; j < subgrade; j++) {
    for (let i = 0; i < subgrade; i++) {
      let index = i + j * subgrade;
      let x_atual = x + (modulo_largura * subgrade) + (((subgrade-2) - i) * modulo_largura);
      let y_atual = y + (j * modulo_altura);

      if (parseInt(codigos[index]) == 1) {
        rect(x_atual, y_atual, modulo_largura, modulo_altura);
      }
    }
  }

  // Quadrante 3 = x Normal, y Invertido

  for (let j = 0; j < subgrade; j++) {
    for (let i = 0; i < subgrade; i++) {
      let index = i + j * subgrade;
      let x_atual = x + (i * modulo_largura);
      let y_atual = y + (modulo_altura * subgrade) + (((subgrade-2) - j) * modulo_altura);
        
      if (parseInt(codigos[index]) == 1) {
        rect(x_atual, y_atual, modulo_largura, modulo_altura);
      }
      
    }
  }

  // Quadrante 4 = x Invertido, y Invertido

  for (let j = 0; j < subgrade; j++) {
    for (let i = 0; i < subgrade; i++) {
      let index = i + j * subgrade;
      let x_atual = x + (modulo_largura * subgrade) + (((subgrade-2) - i) * modulo_largura);
        let y_atual = y + (modulo_altura * subgrade) + (((subgrade-2) - j) * modulo_altura);
        
      if (parseInt(codigos[index]) == 1) {
        rect(x_atual, y_atual, modulo_largura, modulo_altura);
      }
    }
  }
}
