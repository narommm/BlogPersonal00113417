
var publicaciones = document.getElementById("publicaciones");
var lunes= document.getElementById("art1");
var martes= document.getElementById("art2");
var miercoles= document.getElementById("art3");
var jueves= document.getElementById("art4");
var viernes= document.getElementById("art5");
var lunesA = document.getElementById("articulo1");
var martesA = document.getElementById("articulo2");
var miercolesA = document.getElementById("articulo3");
var juevesA = document.getElementById("articulo4");
var viernesA = document.getElementById("articulo5");

publicaciones.addEventListener("click", mostrar); 


function mostrar(){
  var menu = document.getElementById('submenu-publicaciones');
  if (menu.style.display === 'none') {
    menu.style.display = 'inline';
  } else {
    menu.style.display = 'none';
  }
}


lunes.addEventListener("click", ()=> {

  if(lunesA.style.display==='block'){
    return true;
  }else{
    document.getElementById("text-principal").style.display='none';
    martesA.style.display='none';
    miercolesA.style.display='none';
    juevesA.style.display='none';
    viernesA.style.display='none';
  }
  lunesA.style.display='block';
} );

martes.addEventListener("click", ()=> {
  if(martesA.style.display==='block'){
    return true;
  }else{
    document.getElementById("text-principal").style.display='none';
    lunesA.style.display='none';
    miercolesA.style.display='none';
    juevesA.style.display='none';
    viernesA.style.display='none';
  }
  martesA.style.display='block';
 } );

miercoles.addEventListener("click", ()=> {
  if(miercolesA.style.display==='block'){
    return true;
  }else{
    lunesA.style.display='none';
    martesA.style.display='none';
    juevesA.style.display='none';
    viernesA.style.display='none';
  }
  miercolesA.style.display='block';
} );

jueves.addEventListener("click", ()=> {
  if(juevesA.style.display==='block'){
    return true;
  }else{
    martesA.style.display='none';
    miercolesA.style.display='none';
    lunesA.style.display='none';
    viernesA.style.display='none';
  }
  juevesA.style.display='block';
} );

viernes.addEventListener("click", ()=> {
  if(viernesA.style.display==='block'){
    return true;
  }else{
    martesA.style.display='none';
    miercolesA.style.display='none';
    juevesA.style.display='none';
    lunesA.style.display='none';
  }
  viernesA.style.display='block';
  
} );
