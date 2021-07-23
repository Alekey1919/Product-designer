import React from "react";
import DesignBar from "./DesignBar";
import { fabric } from "fabric";
import { useState, useEffect } from "react";
import "./DesignProducts.css";
import { useHistory } from "react-router-dom";

import WhiteMousepad from "../../images/White-mousepad.png";
import WhiteMousepadResponsive from "../../images/White-mousepad-responsive.png";
import BlackMousepad from "../../images/Black-mousepad.png";

function DesignMousepad() {
  const [canvas, setCanvas] = useState("");
  const [screenWidth, setScreenWidth] = useState(window.screen.width);
  const canvasContainer = document.querySelector("#canvas-container");
  const history = useHistory();

  useEffect(() => {
    document.getElementById("front-back").style.display = "none";
    document.getElementById("yellow-color").style.display = "none";
    document.getElementById("blue-color").style.display = "none";
    document.getElementById("red-color").style.display = "none";
    document.querySelector(".front-btn-responsive").style.display = "none";
    document.querySelector(".back-btn-responsive").style.display = "none";
  });

  // Resize listener

  window.addEventListener("resize", () => {
    if (screenWidth <= 999) {
      if (canvas.width >= 504) {
        if (canvas.setDimensions) {
          //If the original width res is less than 999 setDimensions is not a function
          canvas.setDimensions({
            width: 450,
            height: 404,
          });
          canvas.backgroundImage.scaleToWidth(450);
          canvas.backgroundImage.scaleToHeight(404);
          canvas.renderAll();

          if (
            document.querySelector("#color-container").classList.length <= 2
          ) {
            document
              .querySelector("#color-container")
              .classList.remove("color-container-active");
          }
        }
      }
    } else {
      if (canvas.width <= 450) {
        canvas.setDimensions({
          width: 504,
          height: 452,
        });
        canvas.backgroundImage.scaleToWidth(504);
        canvas.backgroundImage.scaleToHeight(452);
        canvas.renderAll();

        document
          .querySelector("#color-container")
          .classList.remove("color-container-responsive");
        document
          .querySelector(".btn-choose-color")
          .classList.remove("btn-choose-color-responsive");
        document
          .querySelector(".btn-add-text")
          .classList.remove("display-none");
        document
          .querySelector(".btn-add-image")
          .classList.remove("display-none");
        document
          .querySelector(".front-btn-responsive")
          .classList.remove("display-none");
        document
          .querySelector(".back-btn-responsive")
          .classList.remove("display-none");
        document
          .querySelector(".save-btn-container")
          .classList.remove("display-none");
        document
          .getElementById("upload-image-container-responsive")
          .classList.remove("expandable-container-active");
        document
          .getElementById("save-container-responsive")
          .classList.remove("expandable-container-active");
        document
          .getElementById("add-text-container-responsive")
          .classList.remove("expandable-container-active");
      }
    }
    setScreenWidth(window.screen.width);
  });

  //Canvas initialization

  useEffect(() => {
    if (screenWidth >= 999) {
      setCanvas(
        new fabric.Canvas("canvas", {
          width: 504,
          height: 452,
          backgroundImage: WhiteMousepad,
        })
      );
    } else {
      setCanvas(
        new fabric.Canvas("canvas", {
          width: 450,
          height: 404,
          backgroundImage: WhiteMousepadResponsive,
        })
      );
    }
  }, []);

  // Color Picker (product)

  const colorPicker = (color) => {
    if (color === "black") {
      canvas.setBackgroundImage(BlackMousepad);
    } else {
      canvas.setBackgroundImage(WhiteMousepad);
    }
    setTimeout(() => {
      //If it's immediate it doesn't work
      canvas.backgroundImage.scaleToWidth(canvas.width);
      canvas.renderAll();
    }, 100);
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

  // Sidebar functions

  const openAddImage = () => {
    if (window.screen.width > 999) {
      document
        .querySelector("#upload-image-container")
        .classList.toggle("expandable-container-active");
    } else {
      document
        .querySelector("#upload-image-container-responsive")
        .classList.toggle("expandable-container-active");
      document
        .getElementById("add-text-container-responsive")
        .classList.remove("expandable-container-active");
      document
        .getElementById("save-container-responsive")
        .classList.remove("expandable-container-active");
    }
    deleteHandler();
  };

  const openAddText = () => {
    if (window.screen.width > 999) {
      document
        .querySelector("#add-text-container")
        .classList.toggle("expandable-container-active");
    } else {
      document
        .querySelector("#add-text-container-responsive")
        .classList.toggle("expandable-container-active");
      document
        .getElementById("upload-image-container-responsive")
        .classList.remove("expandable-container-active");
      document
        .getElementById("save-container-responsive")
        .classList.remove("expandable-container-active");
    }
    deleteHandler();
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

  function inputfileHandler() {
    document.querySelector("#input-file").click();
  }

  function urlImageHandler() {
    let url = document.querySelector("#url-input").value;
    var imageURL = new fabric.Image.fromURL(url, (image) => {
      image.set({
        left: 10,
        top: 10,
      });
      image.crossOrigin = "anonymous";
      image.scaleToWidth(canvas.width / 3);

      canvas.add(image);
      canvas.renderAll();
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
  }

  // Form Submit

  const submitHandler = (event) => {
    event.preventDefault();
    let name = document.querySelector("#name-input").value;
    let product = "Cushion";
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
        colorPicker={colorPicker}
      />
    </div>
  );
}

export default DesignMousepad;
