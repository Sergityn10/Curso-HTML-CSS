var listFiles = []

function dropHandler(ev) {
  console.log("Fichero(s) arrastrados");

  // Evitar el comportamiendo por defecto (Evitar que el fichero se abra/ejecute)
  ev.preventDefault();

  if (ev.dataTransfer.items) {
    // Usar la interfaz DataTransferItemList para acceder a el/los archivos)
    for (var i = 0; i < ev.dataTransfer.items.length; i++) {
      // Si los elementos arrastrados no son ficheros, rechazarlos
      if (ev.dataTransfer.items[i].kind === "file") {
        var file = ev.dataTransfer.items[i].getAsFile();
        console.log("... file[" + i + "].name = " + file.name);
        listFiles.push(file)
      }
    }
  } else {
    // Usar la interfaz DataTransfer para acceder a el/los archivos
    for (var i = 0; i < ev.dataTransfer.files.length; i++) {
      console.log(
        "... file[" + i + "].name = " + ev.dataTransfer.files[i].name,
      );
    }
  }

  
}

function dragOverHandler(ev) {

  // Prevent default behavior (Prevent file from being opened)
  ev.preventDefault();
}

function removeDragData(ev) {
  console.log("Removing drag data");

  if (ev.dataTransfer.items) {
    // Use DataTransferItemList interface to remove the drag data
    ev.dataTransfer.items.clear();
  } else {
    // Use DataTransfer interface to remove the drag data
    ev.dataTransfer.clearData();
  }
}

function seeListItems(){
    // Seleccionamos el elemento con ID "see-items" dentro del <main>
const seeItems = document.querySelector("main #see-items");

if (seeItems) {

    // Creamos una lista ordenada (<ol>)
    const orderedList = document.createElement("ol");
    
    // Agregamos algunos elementos de lista (<li>)
    for (let i = 1; i <= listFiles.length; i++) {
        const listItem = document.createElement("li");
        listItem.textContent = `Ítem ${i}: ${listFiles.at(i-1).name} `;
        orderedList.appendChild(listItem);
    }

    // Insertamos la lista dentro del elemento "see-items"
    seeItems.appendChild(orderedList);
} else {
    console.error('No se encontró el elemento con ID "see-items" dentro de <main>.');
}
}
