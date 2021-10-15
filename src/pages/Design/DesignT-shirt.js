import React from "react";
import DesignBar from "./DesignBar";
import { fabric } from "fabric";
import { useState, useEffect } from "react";
import "./DesignProducts.css";
import { useHistory } from "react-router-dom";

import WhiteTshirt from "../../images/webp/White-t-shirt.webp";
import WhiteTshirtResponsive from "../../images/webp/White-t-shirt-responsive.webp";
import WhiteTshirtResponsive360 from "../../images/webp/White-t-shirt-responsive-360.webp";
import WhiteTshirtBack from "../../images/webp/White-t-shirt-back.webp";
import WhiteTshirtBackResponsive from "../../images/webp/White-t-shirt-back-responsive.webp";
import WhiteTshirtBackResponsive360 from "../../images/webp/White-t-shirt-back-responsive-360.webp";
import BlackTshirt from "../../images/webp/Black-t-shirt.webp";
import BlackTshirtBack from "../../images/webp/Black-t-shirt-back.webp";
import YellowTshirt from "../../images/webp/Yellow-t-shirt.webp";
import YellowTshirtBack from "../../images/webp/Yellow-t-shirt-back.webp";
import BlueTshirt from "../../images/webp/Blue-t-shirt.webp";
import BlueTshirtBack from "../../images/webp/Blue-t-shirt-back.webp";
import RedTshirt from "../../images/webp/Red-t-shirt.webp";
import RedTshirtBack from "../../images/webp/Red-t-shirt-back.webp";
import { db, auth } from "../../Firebase";

function DesignTShirt() {
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
  const [canvas1, setCanvas1] = useState("");
  const [screenWidth, setScreenWidth] = useState(window.screen.width);
  const canvasContainer = document.querySelector("#canvas-container");
  const canvas1Container = document.querySelector("#canvas1-container");
  const history = useHistory();

  // Resize listener

  const resize = () => {
    setScreenWidth(window.screen.width);
    if (screenWidth <= 999) {
      if (canvas.width >= 600) {
        if (canvas.setDimensions) {
          //If the original width res is less than 999 setDimensions is not a function
          canvas.setDimensions({
            width: 430,
            height: 500,
          });
          canvas.backgroundImage.scaleToWidth(430);
          canvas.renderAll();
          canvas1.setDimensions({
            width: 430,
            height: 500,
          });
          canvas1.backgroundImage.scaleToWidth(430);
          canvas1.renderAll();

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
      if (canvas.width <= 430) {
        canvas.setDimensions({
          width: 600,
          height: 700,
        });
        canvas.backgroundImage.scaleToWidth(600);
        canvas.renderAll();
        canvas1.setDimensions({
          width: 600,
          height: 700,
        });
        canvas1.backgroundImage.scaleToWidth(600);
        canvas1.renderAll();

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
  };

  window.addEventListener("resize", resize);

  //Canvas initialization

  useEffect(() => {
    if (screenWidth >= 999) {
      setCanvas(
        new fabric.Canvas("canvas", {
          height: 700,
          width: 600,
          backgroundImage: WhiteTshirt,
        })
      );
    } else if (screenWidth > 430 && screenWidth < 999) {
      setCanvas(
        new fabric.Canvas("canvas", {
          height: 500,
          width: 430,
          backgroundImage: WhiteTshirtResponsive,
        })
      );
    } else {
      setCanvas(
        new fabric.Canvas("canvas", {
          height: 420,
          width: 360,
          backgroundImage: WhiteTshirtResponsive360,
        })
      );
    }
  }, []);

  useEffect(() => {
    if (screenWidth >= 999) {
      setCanvas1(
        new fabric.Canvas("canvas1", {
          height: 700,
          width: 600,
          backgroundImage: WhiteTshirtBack,
        })
      );
    } else if (screenWidth > 430 && screenWidth < 999) {
      setCanvas1(
        new fabric.Canvas("canvas1", {
          height: 500,
          width: 430,
          backgroundImage: WhiteTshirtBackResponsive,
        })
      );
    } else {
      setCanvas1(
        new fabric.Canvas("canvas1", {
          height: 420,
          width: 360,
          backgroundImage: WhiteTshirtBackResponsive360,
        })
      );
    }
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
      canvas.setBackgroundImage(BlackTshirt);
      canvas1.setBackgroundImage(BlackTshirtBack);
    } else if (color === "red") {
      canvas.setBackgroundImage(RedTshirt);
      canvas1.setBackgroundImage(RedTshirtBack);
    } else if (color === "yellow") {
      canvas.setBackgroundImage(YellowTshirt);
      canvas1.setBackgroundImage(YellowTshirtBack);
    } else if (color === "yellow") {
      canvas.setBackgroundImage(YellowTshirt);
      canvas1.setBackgroundImage(YellowTshirtBack);
    } else if (color === "blue") {
      canvas.setBackgroundImage(BlueTshirt);
      canvas1.setBackgroundImage(BlueTshirtBack);
    } else {
      canvas.setBackgroundImage(WhiteTshirt);
      canvas1.setBackgroundImage(WhiteTshirtBack);
    }
    setTimeout(() => {
      //If it's immediate it doesn't work
      canvas.backgroundImage.scaleToWidth(canvas.width);
      canvas.renderAll();
      canvas1.backgroundImage.scaleToWidth(canvas1.width);
      canvas1.renderAll();
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
        if (
          canvas.getActiveObject() != null ||
          canvas1.getActiveObject() != null
        ) {
          if (canvasContainer.style.display != "none") {
            canvas.getActiveObject().set("fill", this.value);
            canvas.renderAll();
          } else {
            canvas1.getActiveObject().set("fill", this.value);
            canvas1.renderAll();
          }
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
        if (canvas1.getActiveObject() != null) {
          canvas1.getActiveObject().set("fontFamily", fontFamily.value);
          canvas1.renderAll();
        }
      });

      // Font-size

      let fontSize = document.querySelector("#font-size-responsive");
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

      document.getElementById("color-picker-responsive").onchange =
        function () {
          if (
            canvas.getActiveObject() != null ||
            canvas1.getActiveObject() != null
          ) {
            if (canvasContainer.style.display != "none") {
              canvas.getActiveObject().set("fill", this.value);
              canvas.renderAll();
            } else {
              canvas1.getActiveObject().set("fill", this.value);
              canvas1.renderAll();
            }
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
      if (
        canvas.getActiveObject() != null ||
        canvas1.getActiveObject() != null
      ) {
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

  const uploadImage = (e) => {
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
  };

  const inputfileHandler = () => {
    document.querySelector("#input-file").click();
  };

  // const urlImageHandler = () => {
  //     var imageURL = new fabric.Image.fromURL(url, (image) => {
  //       image.set({
  //         left: 10,
  //         top: 10,
  //       });
  //       image.crossOrigin = "anonymous";
  //       image.scaleToWidth(canvas.width / 3);
  //       if (canvasContainer.style.display != "none") {
  //         canvas.add(image);
  //         canvas.renderAll();
  //       } else {
  //         canvas1.add(image);
  //         canvas1.renderAll();
  //       }
  //     });
  //   }
  //   let url = document.querySelector("#url-input").value;
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
  // };

  //  Donwload

  const download = () => {
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
  };

  // Form Submit

  const submitHandler = (event) => {
    event.preventDefault();
    let name = document.querySelector("#name-input").value;
    let product = "T-shirt";
    let url = canvas.toDataURL();
    let url1 = canvas1.toDataURL();
    let id = name + product;
    let productData = {
      name: name,
      product: product,
      src0: url,
      src1: url1,
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
        uploadImage={uploadImage}
        openAddText={openAddText}
        addText={addText}
        openAddImage={openAddImage}
        download={download}
        submitHandler={submitHandler}
        inputfileHandler={inputfileHandler}
        colorPicker={colorPicker}
        back={back}
        front={front}
      />
    </div>
  );
}

export default DesignTShirt;
