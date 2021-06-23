import "./DesignBar.css";
import { useEffect } from "react";

function DesignBar(props) {
  // Sidebar functions

  const openSave = () => {
    if (window.screen.width > 999) {
      document
        .querySelector("#save-container")
        .classList.toggle("expandable-container-active");
    } else {
      document
        .querySelector("#save-container-responsive")
        .classList.toggle("expandable-container-active");
      document
        .getElementById("upload-image-container-responsive")
        .classList.remove("expandable-container-active");
      document
        .getElementById("add-text-container-responsive")
        .classList.remove("expandable-container-active");
    }
  };

  const openColor = () => {
    if (window.screen.width > 999) {
      document
        .querySelector("#color-container")
        .classList.toggle("color-container-active");
    } else {
      document
        .querySelector("#color-container")
        .classList.toggle("color-container-responsive");
      document
        .querySelector(".btn-choose-color")
        .classList.toggle("btn-choose-color-responsive");
      document.querySelector(".btn-add-text").classList.toggle("display-none");
      document.querySelector(".btn-add-image").classList.toggle("display-none");
      document
        .querySelector(".front-btn-responsive")
        .classList.toggle("display-none");
      document
        .querySelector(".back-btn-responsive")
        .classList.toggle("display-none");
      document
        .querySelector(".save-btn-container")
        .classList.toggle("display-none");
      document
        .querySelector("#add-text-container")
        .classList.remove("expandable-container-active");
      document
        .querySelector("#upload-image-container")
        .classList.remove("expandable-container-active");
      document
        .querySelector("#save-container")
        .classList.remove("expandable-container-active");
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
  };

  const openOverlay = () => {
    document
      .querySelector(".overlay-container")
      .classList.toggle("overlay-container-active");
  };

  useEffect(() => {
    document.body.style.overflowY = "hidden";
  });

  return (
    <div className="component-container">
      <div className="bar-container">
        <h1>Create your product</h1>
        <button
          className="button btn-choose-color"
          onClick={openColor}
          id="open-color-btn"
        >
          Choose Color
        </button>
        <div className="expandable-container" id="color-container">
          <button
            className="color-item"
            id="white-color"
            onClick={() => props.colorPicker("white")}
          ></button>
          <button
            className="color-item"
            id="black-color"
            onClick={() => props.colorPicker("black")}
          ></button>
          <button
            className="color-item"
            id="yellow-color"
            onClick={() => props.colorPicker("yellow")}
          ></button>
          <button
            className="color-item"
            id="red-color"
            onClick={() => props.colorPicker("red")}
          ></button>
          <button
            className="color-item"
            id="blue-color"
            onClick={() => props.colorPicker("blue")}
          ></button>
        </div>
        <button className="button btn-add-text" onClick={props.openAddText}>
          Add text
        </button>
        <div className="expandable-container" id="add-text-container">
          <label for="text" className="label-text">
            Text:
            <input
              type="text"
              id="text"
              name="text"
              placeholder="Write something"
            ></input>
          </label>
          <label for="font" className="label-font">
            Font Family:
            <select name="font" id="font">
              <option value="times New Roman">Times New Roman</option>
              <option value="consolas">Consolas</option>
              <option value="arial">Arial</option>
            </select>
          </label>
          <label for="font-size" className="label-font-size">
            Font-size:
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
              Bold:
              <input type="checkbox" id="bold" />
            </label>

            <label className="label-italic">
              Italic:
              <input type="checkbox" id="italic" />
            </label>

            <label className="label-underline">
              Underline:
              <input type="checkbox" id="underline" />
            </label>

            <label className="label-linethrough">
              Linethrough:
              <input type="checkbox" id="linethrough" />
            </label>
          </section>
          <label for="color-picker" className="label-color">
            Color:
            <input
              type="color"
              id="color-picker"
              name="color-picker"
              defaultValue="#f93c64"
            ></input>
          </label>
          <button onClick={props.addText} className="button add">
            Add
          </button>
          <hr />
        </div>
        <button className="button btn-add-image" onClick={props.openAddImage}>
          Upload Image
        </button>
        <div className="expandable-container" id="upload-image-container">
          {/* <label for="url" className="label-url">
            URL
            <div>
              <input
                id="url-input"
                type="url"
                placeholder="Insert image url"
              ></input>
              <button id="upload-image-btn-url" onClick={props.urlImageHandler}>
                Upload
              </button>
            </div>
          </label> */}
          <label>
            Upload Image
            <input
              type="file"
              id="input-file"
              onChange={(e) => {
                props.uploadImage(e);
              }}
            />
            <button
              className="upload-image-btn"
              onClick={props.inputfileHandler}
            >
              Upload Image
            </button>
          </label>
          <hr className="hr" />
        </div>
        <button className="front-btn-responsive" onClick={props.front}>
          Front
        </button>
        <button className="back-btn-responsive" onClick={props.back}>
          Back
        </button>
        <div className="front-back-container" id="front-back">
          <button className="front-btn" onClick={props.front}>
            Front
          </button>
          <button className="back-btn" onClick={props.back}>
            Back
          </button>
        </div>
        <button className="button save-btn-container" onClick={openSave}>
          Save
        </button>

        <div className="expandable-container" id="save-container">
          <button onClick={props.download} className="save-btn">
            Download
          </button>

          <button className="save-btn" id="save-degign" onClick={openOverlay}>
            Save to My Designs
          </button>
        </div>
      </div>
      <div
        className="canvas-container"
        id="canvas-container"
        style={{ display: "block" }}
      >
        <canvas id="canvas" />
      </div>
      <div className="canvas-container canvas-hidden" id="canvas1-container">
        <canvas id="canvas1" />
      </div>

      {/* Responsive Add Text */}

      <div className="expandable-container" id="add-text-container-responsive">
        <label for="text" className="label-text">
          Text:
          <input
            type="text"
            id="text-responsive"
            name="text"
            placeholder="Write something"
          ></input>
        </label>
        <label for="font" className="label-font">
          Font Family:
          <select name="font" id="font-responsive">
            <option value="times New Roman">Times New Roman</option>
            <option value="consolas">Consolas</option>
            <option value="arial">Arial</option>
          </select>
        </label>
        <label for="font-size" className="label-font-size">
          Font-size:
          <input
            type="number"
            id="font-size-responsive"
            min="38"
            max="72"
            step="2"
          ></input>
        </label>
        <section className="text-properties">
          <label className="label-bold">
            Bold:
            <input type="checkbox" id="bold-responsive" />
          </label>

          <label className="label-italic">
            Italic:
            <input type="checkbox" id="italic-responsive" />
          </label>

          <label className="label-underline">
            Underline:
            <input type="checkbox" id="underline-responsive" />
          </label>

          <label className="label-linethrough">
            Linethrough:
            <input type="checkbox" id="linethrough-responsive" />
          </label>
        </section>
        <label for="color-picker" className="label-color">
          Color:
          <input
            type="color"
            id="color-picker-responsive"
            name="color-picker"
            defaultValue="#f93c64"
          ></input>
        </label>
        <button onClick={props.addText} className="button add">
          Add
        </button>
      </div>

      {/* Upload Image */}

      <div
        className="expandable-container"
        id="upload-image-container-responsive"
      >
        <label>
          <input
            type="file"
            id="input-file-responsive"
            onChange={(e) => {
              props.uploadImage(e);
            }}
          />
          <button className="upload-image-btn" onClick={props.inputfileHandler}>
            Select Image
          </button>
        </label>
      </div>

      {/* Save */}

      <div className="expandable-container" id="save-container-responsive">
        <button onClick={props.download} className="save-btn">
          Download
        </button>

        <button
          className="save-btn"
          id="save-degign-responsive"
          onClick={openOverlay}
        >
          Save to My Designs
        </button>
      </div>

      {/* Overlay */}

      <div className="overlay-container">
        <div id="save-form-container">
          <i class="fas fa-times" onClick={openOverlay}></i>
          <form onSubmit={props.submitHandler}>
            <h1>Save design</h1>
            <label>
              Name:
              <input
                type="text"
                required
                placeholder="Insert a name"
                id="name-input"
                maxLength="40"
              ></input>
            </label>
            <button class="button save-form-btn">Save</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default DesignBar;
