import React from "react";
import DesignBar from "./DesignBar";
import { fabric } from "fabric";
import { useState, useEffect } from "react";
import "./DesignProducts.css";

import WhiteTshirt from "../../images/White-t-shirt.png";
import WhiteTshirtBack from "../../images/White-t-shirt-back.png";
import BlackTshirt from "../../images/Black-t-shirt.png";
import BlackTshirtBack from "../../images/Black-t-shirt-back.png";
import YellowTshirt from "../../images/Yellow-t-shirt.png";
import YellowTshirtBack from "../../images/Yellow-t-shirt-back.png";
import BlueTshirt from "../../images/Blue-t-shirt.png";
import BlueTshirtBack from "../../images/Blue-t-shirt-back.png";
import RedTshirt from "../../images/Red-t-shirt.png";
import RedTshirtBack from "../../images/Red-t-shirt-back.png";

function DesignTShirt() {
  const [canvas, setCanvas] = useState("");
  const [canvas1, setCanvas1] = useState("");
  const canvasContainer = document.querySelector("#canvas-container");
  const canvas1Container = document.querySelector("#canvas1-container");

  //Canvas initialization

  useEffect(() => {
    setCanvas(
      new fabric.Canvas("canvas", {
        height: 700,
        width: 600,
        backgroundImage: WhiteTshirt,
      })
    );
  }, []);

  useEffect(() => {
    setCanvas1(
      new fabric.Canvas("canvas1", {
        height: 700,
        width: 600,
        backgroundImage: WhiteTshirtBack,
      })
    );
  }, []);

  // Front Back

  const front = () => {
    document.querySelector("#canvas-container").style.display = "block";
    document.querySelector("#canvas1-container").style.display = "none";
  };

  const back = () => {
    document.querySelector("#canvas-container").style.display = "none";
    document.querySelector("#canvas1-container").style.display = "block";
  };

  // Color Picker (product)

  const colorPicker = (color) => {
    if (color === "black") {
      canvas.setBackgroundImage(BlackTshirt, canvas.renderAll.bind(canvas));
      canvas1.setBackgroundImage(
        BlackTshirtBack,
        canvas1.renderAll.bind(canvas1)
      );
    } else if (color === "red") {
      canvas.setBackgroundImage(RedTshirt, canvas.renderAll.bind(canvas));
      canvas1.setBackgroundImage(
        RedTshirtBack,
        canvas1.renderAll.bind(canvas1)
      );
    } else if (color === "yellow") {
      canvas.setBackgroundImage(YellowTshirt, canvas.renderAll.bind(canvas));
      canvas1.setBackgroundImage(
        YellowTshirtBack,
        canvas1.renderAll.bind(canvas1)
      );
    } else if (color === "yellow") {
      canvas.setBackgroundImage(YellowTshirt, canvas.renderAll.bind(canvas));
      canvas1.setBackgroundImage(
        YellowTshirtBack,
        canvas1.renderAll.bind(canvas1)
      );
    } else if (color === "blue") {
      canvas.setBackgroundImage(BlueTshirt, canvas.renderAll.bind(canvas));
      canvas1.setBackgroundImage(
        BlueTshirtBack,
        canvas1.renderAll.bind(canvas1)
      );
    } else {
      canvas.setBackgroundImage(WhiteTshirt, canvas.renderAll.bind(canvas));
      canvas1.setBackgroundImage(
        WhiteTshirtBack,
        canvas1.renderAll.bind(canvas1)
      );
    }
  };

  // Delete Function

  const deleteHandler = () => {
    document.addEventListener("keydown", (e) => {
      if (canvasContainer.style.display != "none") {
        if (e.key === "Delete" || e.key === "Backspace") {
          var activeObjects = canvas.getActiveObjects();
          if (activeObjects.length > 0) {
            for (var i = 0; i < activeObjects.length; i++) {
              canvas.remove(activeObjects[i]);
            }
          }
        }
      }
      if (canvas1Container.style.display != "none") {
        if (e.key === "Delete" || e.key === "Backspace") {
          var activeObjects = canvas1.getActiveObjects();
          if (activeObjects.length > 0) {
            for (var i = 0; i < activeObjects.length; i++) {
              canvas1.remove(activeObjects[i]);
            }
          }
        }
      }
    });
  };

  // Sidebar functions

  const openAddImage = () => {
    document
      .querySelector("#upload-image-container")
      .classList.toggle("expandable-container-active");
    deleteHandler();
  };

  const openAddText = () => {
    document
      .querySelector("#add-text-container")
      .classList.toggle("expandable-container-active");
    deleteHandler();
  };

  const openSave = () => {
    document
      .querySelector("#save-container")
      .classList.toggle("expandable-container-active");
  };

  const openColor = () => {
    document
      .querySelector("#color-container")
      .classList.toggle("color-container-active");
  };

  const openOverlay = () => {
    document
      .querySelector(".overlay-container")
      .classList.toggle("overlay-container-active");
  };

  // Add Text Function

  const addText = () => {
    let textInput = document.querySelector("#text").value;
    let textFont = document.querySelector("#font").value;
    let textSize = 38;
    let boldCheckbox = document.querySelector("#bold");
    let italicCheckbox = document.querySelector("#italic");
    let underlineCheckbox = document.querySelector("#underline");
    let linethroughCheckbox = document.querySelector("#linethrough");
    if (document.querySelector("#font-size").value) {
      textSize = document.querySelector("#font-size").value;
    }
    let textColor = document.querySelector("#color-picker").value;

    var text = new fabric.IText(textInput, {
      fontFamily: textFont,
      fontSize: textSize,
      fontWeight: "normal",
      fill: textColor,
    });

    if (boldCheckbox.checked) {
      text.set("fontWeight", "bold");
    }

    if (italicCheckbox.checked) {
      text.set("fontStyle", "italic");
    }

    if (underlineCheckbox.checked) {
      text.set("underline", true);
    }

    if (linethroughCheckbox.checked) {
      text.set("linethrough", true);
    }

    if (canvasContainer.style.display != "none") {
      canvas.add(text);
      canvas.centerObject(text);
    } else {
      canvas1.add(text);
      canvas1.centerObject(text);
    }

    // Font

    let fontFamily = document.querySelector("#font");
    fontFamily.addEventListener("change", () => {
      if (canvas.getActiveObject() != null) {
        canvas.getActiveObject().set("fontFamily", fontFamily.value);
        canvas.renderAll();
      }
      if (canvas1.getActiveObject() != null) {
        canvas1.getActiveObject().set("fontFamily", fontFamily.value);
        canvas1.renderAll();
      }
    });

    // Font-size

    let fontSize = document.querySelector("#font-size");
    fontSize.addEventListener("change", () => {
      if (canvas.getActiveObject() != null) {
        canvas.getActiveObject().set("fontSize", fontSize.value);
        canvas.renderAll();
      }
      if (canvas1.getActiveObject() != null) {
        canvas1.getActiveObject().set("fontSize", fontSize.value);
        canvas1.renderAll();
      }
    });

    // Checkbox listeners

    boldCheckbox.addEventListener("change", () => {
      if (canvas.getActiveObject() != null) {
        if (boldCheckbox.checked) {
          canvas.getActiveObject().set("fontWeight", "bold");
          canvas.renderAll();
        } else {
          canvas.getActiveObject().set("fontWeight", "normal");
          canvas.renderAll();
        }
      }
      if (canvas1.getActiveObject() != null) {
        if (boldCheckbox.checked) {
          canvas1.getActiveObject().set("fontWeight", "bold");
          canvas1.renderAll();
        } else {
          canvas1.getActiveObject().set("fontWeight", "normal");
          canvas1.renderAll();
        }
      }
    });

    italicCheckbox.addEventListener("change", () => {
      if (canvas.getActiveObject() != null) {
        if (italicCheckbox.checked) {
          canvas.getActiveObject().set("fontStyle", "italic");
          canvas.renderAll();
        } else {
          canvas.getActiveObject().set("fontStyle", "normal");
          canvas.renderAll();
        }
      }
      if (canvas1.getActiveObject() != null) {
        if (italicCheckbox.checked) {
          canvas1.getActiveObject().set("fontStyle", "italic");
          canvas1.renderAll();
        } else {
          canvas1.getActiveObject().set("fontStyle", "normal");
          canvas1.renderAll();
        }
      }
    });

    underlineCheckbox.addEventListener("change", () => {
      if (canvas.getActiveObject() != null) {
        if (underlineCheckbox.checked) {
          canvas.getActiveObject().set("underline", true);
          canvas.renderAll();
        } else {
          canvas.getActiveObject().set("underline", false);
          canvas.renderAll();
        }
      }
      if (canvas1.getActiveObject() != null) {
        if (underlineCheckbox.checked) {
          canvas1.getActiveObject().set("underline", true);
          canvas1.renderAll();
        } else {
          canvas1.getActiveObject().set("underline", false);
          canvas1.renderAll();
        }
      }
    });

    linethroughCheckbox.addEventListener("change", () => {
      if (canvas.getActiveObject() != null) {
        if (linethroughCheckbox.checked) {
          canvas.getActiveObject().set("linethrough", true);
          canvas.renderAll();
        } else {
          canvas.getActiveObject().set("linethrough", false);
          canvas.renderAll();
        }
      }
      if (canvas1.getActiveObject() != null) {
        if (linethroughCheckbox.checked) {
          canvas1.getActiveObject().set("linethrough", true);
          canvas1.renderAll();
        } else {
          canvas1.getActiveObject().set("linethrough", false);
          canvas1.renderAll();
        }
      }
    });

    // Color picker onchange

    document.getElementById("color-picker").onchange = function () {
      if (canvas.getActiveObject() != null) {
        if (canvasContainer.style.display != "none") {
          canvas.getActiveObject().set("fill", this.value);
          canvas.renderAll();
        } else {
          canvas1.getActiveObject().set("fill", this.value);
          canvas1.renderAll();
        }
      }
    };
  };

  // Upload image

  function uploadImage(e) {
    var imageTag = document.createElement("img");
    imageTag.crossOrigin = "anonymous";
    imageTag.src = e.target;
    var reader = new FileReader();
    reader.onload = function (event) {
      imageTag.src = event.target.result;
      imageTag.onload = function () {
        var image = new fabric.Image(imageTag);
        image
          .set({
            left: 10,
            top: 10,
          })
          .scale(0.2);
        if (canvasContainer.style.display != "none") {
          canvas.add(image);
        } else {
          canvas1.add(image);
        }
      };
    };
    reader.readAsDataURL(e.target.files[0]);
  }

  function inputfileHandler() {
    document.querySelector("#input-file").click();
  }

  function urlImageHandler() {
    //   let url = document.querySelector("#url-input").value;
    //   var imageURL = document.createElement("img");
    //   imageURL.src = url;
    //   fabric.util.loadImage(
    //     "url",
    //     function (image) {
    //       var object = new fabric.Image(imageURL);
    //       object.set({
    //         left: 20,
    //         top: 20,
    //       });
    //       canvas.add(object);
    //     },
    //     null,
    //     {
    //       crossOrigin: "Anonymous",
    //     }
    //   );
    // }
    //   var imageURL = new fabric.Image.fromURL(url, (image) => {
    //     image.set({
    //       left: 10,
    //       top: 10,
    //     });
    //     image.crossOrigin = "anonymous";
    //     image.scaleToWidth(canvas.width / 3);
    //     if (canvasContainer.style.display != "none") {
    //       canvas.add(image);
    //       canvas.renderAll();
    //     } else {
    //       canvas1.add(image);
    //       canvas1.renderAll();
    //     }
    //   });
    // }
    let url = document.querySelector("#url-input").value;
    var imageURL = new fabric.Image.fromURL(url, (image) => {
      image.set({
        left: 10,
        top: 10,
      });
      image.crossOrigin = "anonymous";
      image.scaleToWidth(canvas.width / 3);
      if (canvasContainer.style.display != "none") {
        canvas.add(image);
        canvas.renderAll();
      } else {
        canvas1.add(image);
        canvas1.renderAll();
      }
    });
  }

  //  Donwload

  function download() {
    var imageDownload = canvas
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");
    var link = document.createElement("a");
    link.download = "Front.png";
    link.href = imageDownload;
    link.click();
    var imageDownload1 = canvas1
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");
    var link1 = document.createElement("a");
    link1.download = "Back.png";
    link1.href = imageDownload1;
    link1.click();
  }

  // Form Submit

  const submitHandler = (event) => {
    event.preventDefault();
    let name = document.querySelector("#name-input").value;
    let product = "T-shirt";
    let url = canvas.toDataURL();
    let url1 = canvas1.toDataURL();
    let productData = {
      name: name,
      product: product,
      front: url,
      back: url1,
    };
    fetch("https://tiess-test-default-rtdb.firebaseio.com/my-designs.json", {
      method: "POST",
      body: JSON.stringify(productData),
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "http://localhost:3000",
      },
    });
    openOverlay();
  };

  return (
    <div className="component-container">
      <DesignBar
        inputfileHandler={inputfileHandler}
        uploadImage={uploadImage}
        openAddText={openAddText}
        addText={addText}
        openAddImage={openAddImage}
        urlImageHandler={urlImageHandler}
        openSave={openSave}
        download={download}
        openColor={openColor}
        front={front}
        back={back}
        colorPicker={colorPicker}
        openOverlay={openOverlay}
        submitHandler={submitHandler}
      />
    </div>
  );
}

export default DesignTShirt;
