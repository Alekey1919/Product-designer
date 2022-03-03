import React from "react";
import DesignBar from "../../Components/Designbar/Designbar";
import { fabric } from "fabric";
import { useState, useEffect } from "react";
import "./DesignProducts.css";
import { useHistory } from "react-router-dom";
import { db, auth } from "../../Firebase";

import Bib from "../../images/webp/Bib.webp";
import BibResponsive from "../../images/webp/Bib-responsive.webp";

function DesignBib() {
  // User

  const [user, setUser] = useState();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      }
    });
  });

  const [canvas, setCanvas] = useState("");
  const [screenWidth, setScreenWidth] = useState(window.screen.width);
  const [isTextOpened, setIsTextOpened] = useState(false);
  const [isAddImageOpened, setIsAddImageOpened] = useState(false);
  const canvasContainer = document.querySelector("#canvas-container");
  const history = useHistory();

  // Resize listener

  const resize = () => {
    if (screenWidth <= 999) {
      if (canvas.width >= 415) {
        if (canvas.setDimensions) {
          //If the original width res is less than 999 setDimensions is not a function
          canvas.setDimensions({
            width: 300,
            height: 435,
          });
          canvas.backgroundImage.scaleToWidth(300);
          canvas.backgroundImage.scaleToHeight(435);
          canvas.renderAll();
        }
      }
    } else {
      if (canvas.width <= 300) {
        canvas.setDimensions({
          width: 415,
          height: 600,
        });
        canvas.backgroundImage.scaleToWidth(415);
        canvas.backgroundImage.scaleToHeight(600);
        canvas.renderAll();
      }
    }
    setScreenWidth(window.screen.width);
  };

  window.addEventListener("resize", resize);

  //Canvas initialization

  useEffect(() => {
    if (screenWidth >= 999) {
      setCanvas(
        new fabric.Canvas("canvas", {
          width: 415,
          height: 600,
          backgroundImage: Bib,
        })
      );
    } else {
      setCanvas(
        new fabric.Canvas("canvas", {
          width: 300,
          height: 430,
          backgroundImage: BibResponsive,
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
    setIsAddImageOpened((curr) => !curr);
    deleteHandler();
  };

  const openAddText = () => {
    setIsTextOpened((curr) => !curr);
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

    let fontFamily = document.querySelector(
      window.screen.width > 999 ? "#font" : "#font-responsive"
    );
    fontFamily.addEventListener("change", () => {
      if (canvas.getActiveObject() != null) {
        canvas.getActiveObject().set("fontFamily", fontFamily.value);
        canvas.renderAll();
      }
    });

    // Font-size

    let fontSize = document.querySelector(
      window.screen.width > 999 ? "#font-size" : "#font-size-responsive"
    );
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

    document.getElementById(
      window.screen.width > 999 ? "color-picker" : "color-picker-responsive"
    ).onchange = function () {
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
    let product = "Bib";
    let url = canvas.toDataURL();
    let id = name + product;
    let productData = {
      name: name,
      product: product,
      src0: url,
      id: id,
    };
    db.collection(user.email)
      .doc()
      .set(productData)
      .then((res) => history.replace("/my-designs"))
      .catch((err) => console.warn(err.message));
  };

  return (
    <div className="component-container">
      <DesignBar
        isTextOpened={isTextOpened}
        isAddImageOpened={isAddImageOpened}
        isFrontCanvas={true}
        uploadImage={uploadImage}
        openAddText={openAddText}
        addText={addText}
        openAddImage={openAddImage}
        download={download}
        submitHandler={submitHandler}
        inputfileHandler={inputfileHandler}
        hasTwoCanvases={false}
        colorVariants={0}
      />
    </div>
  );
}

export default DesignBib;
