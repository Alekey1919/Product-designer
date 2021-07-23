import React from "react";
import DesignBar from "./DesignBar";
import { fabric } from "fabric";
import { useState, useEffect } from "react";
import "./DesignProducts.css";
import { useHistory } from "react-router-dom";

import Mug from "../../images/Mug.png";
import MugResponsive from "../../images/Mug-responsive.png";

function DesignMug() {
  const [canvas, setCanvas] = useState("");
  const [screenWidth, setScreenWidth] = useState(window.screen.width);
  const canvasContainer = document.querySelector("#canvas-container");
  const history = useHistory();

  // Getting rid of the useles html

  useEffect(() => {
    document.getElementById("front-back").style.display = "none";
    document.getElementById("open-color-btn").style.display = "none";
    document.querySelector(".front-btn-responsive").style.display = "none";
    document.querySelector(".back-btn-responsive").style.display = "none";
  });

  // Resize listener

  window.addEventListener("resize", () => {
    if (screenWidth <= 999) {
      if (canvas.width >= 600) {
        if (canvas.setDimensions) {
          //If the original width res is less than 999 setDimensions is not a function
          canvas.setDimensions({
            width: 462,
            height: 500,
          });
          canvas.backgroundImage.scaleToWidth(462);
          canvas.backgroundImage.scaleToHeight(500);
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
      if (canvas.width <= 462) {
        canvas.setDimensions({
          width: 600,
          height: 650,
        });
        canvas.backgroundImage.scaleToWidth(600);
        canvas.backgroundImage.scaleToHeight(650);
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

  //Canvas initialization

  useEffect(() => {
    if (screenWidth >= 999) {
      setCanvas(
        new fabric.Canvas("canvas", {
          width: 600,
          height: 650,
          backgroundImage: Mug,
        })
      );
    } else {
      setCanvas(
        new fabric.Canvas("canvas", {
          width: 430,
          height: 500,
          backgroundImage: MugResponsive,
        })
      );
    }
  }, []);

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
    let textInput;
    let textFont;
    let textSize;
    let boldCheckbox;
    let italicCheckbox;
    let underlineCheckbox;
    let linethroughCheckbox;
    let textColor;

    if (window.screen.width > 999) {
      textInput = document.querySelector("#text").value;
      textFont = document.querySelector("#font").value;
      textSize = 38;
      boldCheckbox = document.querySelector("#bold");
      italicCheckbox = document.querySelector("#italic");
      underlineCheckbox = document.querySelector("#underline");
      linethroughCheckbox = document.querySelector("#linethrough");
      if (document.querySelector("#font-size").value) {
        textSize = document.querySelector("#font-size").value;
      }
      textColor = document.querySelector("#color-picker").value;

      // Listeners

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
    } else {
      textInput = document.querySelector("#text-responsive").value;
      textFont = document.querySelector("#font-responsive").value;
      textSize = 38;
      boldCheckbox = document.querySelector("#bold-responsive");
      italicCheckbox = document.querySelector("#italic-responsive");
      underlineCheckbox = document.querySelector("#underline-responsive");
      linethroughCheckbox = document.querySelector("#linethrough-responsive");
      if (document.querySelector("#font-size-responsive").value) {
        textSize = document.querySelector("#font-size-responsive").value;
      }
      textColor = document.querySelector("#color-picker-responsive").value;

      // Listeners

      // Font

      let fontFamily = document.querySelector("#font-responsive");
      fontFamily.addEventListener("change", () => {
        if (canvas.getActiveObject() != null) {
          canvas.getActiveObject().set("fontFamily", fontFamily.value);
          canvas.renderAll();
        }
      });

      // Font-size

      let fontSize = document.querySelector("#font-size-responsive");
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

      document.getElementById("color-picker-responsive").onchange =
        function () {
          if (canvas.getActiveObject() != null) {
            canvas.getActiveObject().set("fill", this.value);
            canvas.renderAll();
          }
        };
    }

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
