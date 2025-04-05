const draggableElement = document.querySelector('p[draggable="true');

draggableElement.addEventListener("dragstart", (event) =>{
  // event.dataTransfer.setData("text/plain", "This text may be dragged")
  const img = document.createElement("img");
  img.width = img.height=  25

  img.src = "Image/pdf-image.png"
  console.log(img)

  const dt = event.dataTransfer;
  dt.setData("text/plain", "Data to Drag");
  dt.setDragImage(img, 25, 25);
}
);

function dragWithCustomImage(event) {
  const img = document.createElement("img");
  img.width = img.height = 50;

  img.src = "Image/pdf-image.png"
  
  

  const dt = event.dataTransfer;
  dt.setData("text/plain", "Data to Drag");
  dt.setDragImage(img, 25, 25);
}
