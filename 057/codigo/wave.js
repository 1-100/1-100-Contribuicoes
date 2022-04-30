class Wave {

  constructor(grid_qty, grid_size) {
    this.grid_qty = grid_qty;
    this.grid_size = grid_size;
    this.modulo_size = grid_size / grid_qty;
    this.grid_modulos = [];
  }

  display() {
    // for(let j = 0; j < this.grid_qty; j++) {
    //   for(let i = 0; i < this.grid_qty; i++) {
    //     let x = i * this.modulo_size;
    //     let y = j * this.modulo_size;

    //     image(modulos[3].img, x , y, this.modulo_size, this.modulo_size);

    //   }
    // }

    this.grid_modulos.forEach(m => {
      let x = m.grid_index.c * this.modulo_size;
      let y = (this.grid_size - this.modulo_size) - m.grid_index.l * this.modulo_size;
      image(modulos[m.modulo_index].img, x , y, this.modulo_size, this.modulo_size);
    });
  }

  init() {
    let grid_modulos_new_index = floor(random(modulos.length));
    this.grid_modulos = [];
    this.grid_modulos[0] = {
      modulo_index: grid_modulos_new_index,
      grid_index: {c: 0, l: 0}
    };
  }

  add(grid_modulos_new_index, grid_modulos_new_c, grid_modulos_new_l) {

    let grid_modulos_new = {
      modulo_index: grid_modulos_new_index,
      grid_index: {c: grid_modulos_new_c, l: grid_modulos_new_l}
    };
    this.grid_modulos.push( grid_modulos_new );
  }

  update() {
    let grid_modulos_previous = this.grid_modulos[this.grid_modulos.length - 1];
    let grid_modulos_previous_index = grid_modulos_previous.modulo_index;
    let grid_modulos_new_index = floor(random(modulos.length));

    let grid_modulos_new_c;
    let grid_modulos_new_l;

    if(grid_modulos_previous.grid_index.l < this.grid_qty - 1) {
      grid_modulos_new_l = grid_modulos_previous.grid_index.l + 1;
      grid_modulos_new_c = grid_modulos_previous.grid_index.c;
    } else {
      grid_modulos_new_l = 0;
      grid_modulos_new_c = grid_modulos_previous.grid_index.c + 1;
    }

    let valid = this.check(grid_modulos_previous_index, grid_modulos_new_index);

    if(grid_modulos_new_l  == 0) {
      this.add(grid_modulos_new_index, grid_modulos_new_c, grid_modulos_new_l);
      
    } else {
  
      while ( !valid ) {
        grid_modulos_new_index = floor(random(modulos.length));
        valid = this.check(grid_modulos_previous_index, grid_modulos_new_index)
      }
      this.add(grid_modulos_new_index, grid_modulos_new_c, grid_modulos_new_l);
  
    }
  }

  check(modulo_previous_index, modulo_new_index) {
    let modulo_previous_pairs_id = modulos[modulo_previous_index].combine;
    let modulo_new_id = modulos[modulo_new_index].id;
    return modulo_previous_pairs_id.includes(modulo_new_id);
  }

}