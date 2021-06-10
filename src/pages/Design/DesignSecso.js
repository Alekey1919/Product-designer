import React from "react";
import { fabric } from "fabric";
import { useState, useEffect, useRef } from "react";
import "./DesignProducts.css";
import "./DesignBar.css";

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
import download from "downloadjs";

function DesignTShirt() {
  const [canvas, setCanvas] = useState("");

  //Canvas initialization

  useEffect(() => {
    setCanvas(
      new fabric.Canvas("canvas", {
        height: 700,
        width: 600,
        backgroundImage: YellowTshirtBack,
      })
    );
  }, []);

  // Color Change (product)

  // const colorChange = () => {
  //   canvas.setBackgroundImage(Tshirt1, canvas.renderAll.bind(canvas));
  // };

  // Delete Function

  const deleteHandler = () => {
    document.addEventListener("keydown", (e) => {
      let group = canvas.getActiveObjects();
      console.log(group);
      if (e.key === "Delete" || e.key === "Backspace") {
        var activeObjects = canvas.getActiveObjects();
        if (activeObjects.length > 0) {
          for (var i = 0; i < activeObjects.length; i++) {
            canvas.remove(activeObjects[i]);
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

    if (italicCheckbox.checked) {
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
    let imageTag = document.createElement("img");
    imageTag.src = url;
    var imageURL = new fabric.Image.fromURL(url, (image) => {
      image.set({
        left: 10,
        top: 10,
      });
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
    link.download = "my-image.png";
    link.href = imageDownload;
    link.click();
  }

  return (
    <div className="component-container">
      <div className="bar-container">
        <h1>Create your product</h1>
        <button className="btn-printable-area">Show printable area</button>
        <button className="btn-add-text" onClick={openAddText}>
          Add text
        </button>
        <div className="expandable-container" id="add-text-container">
          <label for="text" className="label-text">
            Text
            <input
              type="text"
              id="text"
              name="text"
              placeholder="Write something"
            ></input>
          </label>
          <label for="font" className="label-font">
            Font Family
            <select name="font" id="font">
              <option value="times New Roman">Times New Roman</option>
              <option value="consolas">Consolas</option>
              <option value="arial">Arial</option>
            </select>
          </label>
          <label for="font-size" className="label-font-size">
            Font-size
            <input
              type="number"
              id="font-size"
              min="38"
              max="72"
              step="2"
            ></input>
          </label>
          <section className="text-properties">
            <label className="label-bold">
              Bold
              <input type="checkbox" id="bold" />
            </label>

            <label className="label-italic">
              Italic
              <input type="checkbox" id="italic" />
            </label>

            <label className="label-underline">
              Underline
              <input type="checkbox" id="underline" />
            </label>

            <label className="label-linethrough">
              Linethrough
              <input type="checkbox" id="linethrough" />
            </label>
          </section>
          <label for="color-picker" className="label-color">
            Color
            <input type="color" id="color-picker" name="color-picker"></input>
          </label>
          <button onClick={addText} className="add">
            Add
          </button>
        </div>
        <button className="btn-add-image" onClick={openAddImage}>
          Upload Image
        </button>
        <div className="expandable-container" id="upload-image-container">
          <label for="url" className="label-url">
            URL
            <div>
              <input
                id="url-input"
                type="url"
                placeholder="Insert image url"
              ></input>
              <button
                className="upload-image-btn-url"
                onClick={urlImageHandler}
              >
                Upload
              </button>
            </div>
          </label>
          <label>
            Upload Image
            <input
              type="file"
              id="input-file"
              onChange={(e) => {
                uploadImage(e);
              }}
            />
            <button className="upload-image-btn" onClick={inputfileHandler}>
              Upload Image
            </button>
          </label>
        </div>
        <button className="save-btn-container" onClick={openSave}>
          Save
        </button>
        <div className="expandable-container" id="save-container">
          <button onClick={download} className="save-btn">
            Download
          </button>
          <button className="save-btn">Save to My Designs</button>
        </div>
      </div>
      <div id="container-prueba"></div>
      <div className="canvas-container">
        <canvas id="canvas" />
      </div>
    </div>
  );
}

export default DesignTShirt;
