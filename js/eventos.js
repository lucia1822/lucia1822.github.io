//Lista Acorden*/
    const items = document.querySelectorAll('.items__content');
    const title = document.querySelectorAll('.items__title');
    const text = document.querySelectorAll('.items__text');
    console.log('aprete')
    for (let index = 0; index < items.length; index++) {
        console.log('aprete colapsado')

        items[index].addEventListener("click", () => {
            if (text[index].classList.length>1){
                const hide = document.querySelectorAll('.items__text--mostrar');
                console.log('mostrado')
                if(hide)
                    console.log(hide)

                    for (let element of hide) {
                        element.className = element.className.replace(/ items__text--mostrar/g, '');
                    }
            }else{

                const hide = document.querySelectorAll('.items__text--mostrar');
                console.log('mostrado')
                if(hide)
                    console.log(hide)
    
                    for (let element of hide) {
                        element.className = element.className.replace(/ items__text--mostrar/g, '');
                    }
                title[index].classList.toggle("items__title--bold");
                text[index].classList.toggle("items__text--mostrar");
            }

             
        });
    }


//Imágen Modal
var modal = document.getElementById("myModal");

//Abrir Imágen modal
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

//Elemento de cierre de la imágen
var span = document.getElementsByClassName("close")[0];

// Cerrar imágen
span.onclick = function() { 
  modal.style.display = "none";
}
//Imprimir página
function imprimirElemento(elemento) {
    var ventana = window.open('', 'PRINT', 'height=400,width=600');
    ventana.document.write('<html><head><title>' + document.title + '</title>');
    ventana.document.write('<link rel="stylesheet" href="/css/estilos_print.css">'); 
    ventana.document.write('</head><body >');
    ventana.document.write(elemento.innerHTML);
    ventana.document.write('</body></html>');
    ventana.document.close();
    ventana.focus();
    ventana.onload = function() {
      ventana.print();
      ventana.close();
    };
    return true;
  }
  document.querySelector("#btnImprimir").addEventListener("click", function() {
    var div = document.querySelector("#imprimible");
    imprimirElemento(div);
  });