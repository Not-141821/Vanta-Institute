document.addEventListener("DOMContentLoaded", function (){

  const btnMovil = document.getElementById("btn-movil");
  const menu = document.getElementById("menu");
  const links =document.getElementsByClassName("link-menu");

  btnMovil.addEventListener("click", function(){
    menu.classList.toggle("activo");
  });
  for(let i=0; i< links.length; i++) {
    links [i].addEventListener("click", function(){
      menu.classList.remove("activo");
    });
  }
  const fotos = document.getElementsByClassName("foto");
  const btnAnt = document.getElementById("btn-ant");
  const btnSig= document.getElementById("btn-sig");
  let pos = 0;
  function cambiarFoto(nuevaPos){
    for(let i=0;i<fotos.length;i++){
      fotos[i].classList.remove("visible")
    }
    if(nuevaPos >= fotos.length){pos=0;}
    else if (nuevaPos < 0){pos = fotos.length -1;}
    else{pos=nuevaPos; }
    fotos[pos].classList.add("visible");
  }
  btnSig.addEventListener("click", function() {cambiarFoto(pos +1);});
  btnAnt.addEventListener("click", function (){cambiarFoto(pos -1);});

  function esNumero(cadena){
    let i=0;
    while(i< cadena.length){
      if (cadena[i]<"0"|| cadena[i] >"9"){
        return false
      }
      i++;
    }
    return true;
  }

  const form = document.getElementById("formulario");
  const modal = document.getElementById("modal");
  const btnCerrar = document.getElementById("btn-cerrar");
  const msgError = document.getElementById("msg-error");
  const selectCarrera = document.getElementById("campo-carrera");
  if(form){
    form.addEventListener("submit", function(e){
      e.preventDefault();
      const nombre = document.getElementById("campo-nombre").value.trim();
      const dni = document.getElementById("campo-dni").value.trim();
      const cel = document.getElementById("campo-celular").value.trim();
      const carrera = selectCarrera?selectCarrera.value:"";
      if(dni.length !==8 || !esNumero(dni)){
        msgError.textContent="El DNI debe tener exactamente 8 números.";
        msgError.style.display="block";
        return;
      }
      if(cel.length !==9 || !esNumero(cel)){
        msgError.textContent="El celular debe tener 9 números.";
        msgError.style.display="block";
        return;
      }
      msgError.style.display="none";
      let codigo="";
      while(codigo.length< 4){
        codigo = codigo + Math.floor(Math.random()*10);
      }
      document.getElementById("datos-salida").innerHTML=
      "Postulante <b>"+nombre+"</b><br>"+
      "Carrera "+ carrera + "<br>"+
      "Ticket: #VANTA-"+codigo+"-";
      modal.classList.add("activo");
      form.reset();
    });
  }
  if (btnCerrar && modal){
    btnCerrar.addEventListener("click", function(){
      modal.classList.remove("activo");
    });
  }
});

