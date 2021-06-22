import React from "react";
import DesignBar from "./DesignBar";
import { fabric } from "fabric";
import { useState, useEffect } from "react";
import "./DesignProducts.css";
import { useHistory } from "react-router-dom";

import Mug from "../../images/Mug.png";

function DesignMug() {
  const [canvas, setCanvas] = useState("");
  const canvasContainer = document.querySelector("#canvas-container");
  const history = useHistory();

  useEffect(() => {
    document.getElementById("front-back").style.display = "none";
    document.getElementById("open-color-btn").style.display = "none";
    document.querySelector(".front-btn-responsive").style.display = "none";
    document.querySelector(".back-btn-responsive").style.display = "none";
  });
  //Canvas initialization

  useEffect(() => {
    setCanvas(
      new fabric.Canvas("canvas", {
        height: 650,
        width: 600,
        backgroundImage: Mug,
      })
    );
  }, []);

  // Sidebar Functions

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
    });
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

    canvas.add(text);
    canvas.centerObject(text);

    // Font

    let fontFamily = document.querySelector("#font");
    fontFamily.addEventListener("change", () => {
      if (canvas.getActiveObject() != null) {
        canvas.getActiveObject().set("fontFamily", fontFamily.value);
        canvas.renderAll();
      }
    });

    // Font-size

    let fontSize = document.querySelector("#font-size");
    fontSize.addEventListener("change", () => {
      if (canvas.getActiveObject() != null) {
        canvas.getActiveObject().set("fontSize", fontSize.value);
        canvas.renderAll();
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
    });

    // Color picker onchange

    document.getElementById("color-picker").onchange = function () {
      if (canvas.getActiveObject() != null) {
        canvas.getActiveObject().set("fill", this.value);
        canvas.renderAll();
      }
    };
  };

  // Upload image

  function inputfileHandler() {
    document.querySelector("#input-file").click();
  }

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

        canvas.add(image);
      };
    };
    reader.readAsDataURL(e.target.files[0]);
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
  }

  // Form Submit

  const submitHandler = (event) => {
    event.preventDefault();
    let name = document.querySelector("#name-input").value;
    let product = "Mug";
    let url = canvas.toDataURL();
    let productData = {
      name: name,
      product: product,
      src0: url,
    };
    fetch("https://tiess-test-default-rtdb.firebaseio.com/my-designs.json", {
      method: "POST",
      body: JSON.stringify(productData),
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "http://localhost:3000",
      },
    }).then(() => {
      history.replace("/my-designs");
    });
  };

  return (
    <div className="component-container">
      <DesignBar
        uploadImage={uploadImage}
        openAddText={openAddText}
        addText={addText}
        openAddImage={openAddImage}
        download={download}
        submitHandler={submitHandler}
        inputfileHandler={inputfileHandler}
      />
    </div>
  );
}

export default DesignMug;
