
const codigobraille = [
                  {letra:'a',codigo:  [1,0,0,0,0,0]},
                  {letra:'b', codigo: [1,0,1,0,0,0]}, 
                  {letra:'c', codigo: [1,1,0,0,0,0]},
                  {letra:'d', codigo: [1,1,0,1,0,0]},
                  {letra:'e', codigo: [1,0,0,1,0,0]},
                  {letra:'f', codigo: [1,1,1,0,0,0]},
                  {letra:'g', codigo: [1,1,1,1,0,0]},
                  {letra:'h', codigo: [1,0,1,1,0,0]},
                  {letra:'i', codigo: [0,1,1,0,0,0]},
                  {letra:'j', codigo: [0,1,1,1,0,0]},
                  {letra:'k', codigo: [1,0,0,0,1,0]},                  
                  {letra:'l', codigo: [1,0,1,0,1,0]},
                  {letra:'m', codigo: [1,1,0,0,1,0]},
                  {letra:'n', codigo: [1,1,0,1,1,0]},
                  {letra:'o', codigo: [1,0,0,1,1,0]},
                  {letra:'p', codigo: [1,0,0,1,1,0]},
                  {letra:'q', codigo: [1,1,1,1,1,0]},
                  {letra:'r', codigo: [1,0,1,1,1,0]},
                  {letra:'s', codigo: [0,1,1,0,1,0]},
                  {letra:'t', codigo: [0,1,1,1,1,0]},
                  {letra:'u', codigo: [1,0,0,0,1,1]},
                  {letra:'v', codigo: [1,0,1,0,1,1]},
                  {letra:'w', codigo: [0,1,1,1,0,1]},
                  {letra:'x', codigo: [1,1,0,0,1,1]},
                  {letra:'y', codigo: [1,1,0,1,1,1]},
                  {letra:'z', codigo: [1,1,0,1,1,1]}                  
                  ]; 

const codigo_prueba = [0,1,1,1,0,1];

function buscarcodigo(codigo_a_buscar){
  let i=0;
  let ubicaciones=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];
  while ((ubicaciones.length>=1) && (i<=5))
  {
      let ubicaciones_a_borrar =[];
      let j=0;
      while (j<ubicaciones.length)
      {
        if (codigo_a_buscar[i]!=codigobraille[ubicaciones[j]].codigo[i]) 
        {
          ubicaciones_a_borrar.push(ubicaciones[j]);
        }
        j++; 
      }
      j= ubicaciones_a_borrar.length-1;
     while (j>=0)
      {
        index = ubicaciones.indexOf(ubicaciones_a_borrar[j]);
        ubicaciones.splice(index,1);
        j--;
      }
      i++;   
  }
  if (ubicaciones.length>0)
    return codigobraille[ubicaciones[0]].letra;
  else return -1;
}

console.log('Letra:', buscarcodigo(codigo_prueba));
