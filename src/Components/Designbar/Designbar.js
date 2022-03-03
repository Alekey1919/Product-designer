import React from "react";
import useDesignBar from "./useDesignbar";
import "./DesignBar.css";

function DesignBar(props) {
  const {
    isMobile,
    isColorOpened,
    isSaveOpened,
    isOverlayOpened,
    openColor,
    openSave,
    openOverlay,
  } = useDesignBar();

  return (
    <div className="component-container">
      <div className="bar-container">
        <h1>Create your product</h1>
        {props.colorVariants !== 0 && (
          <button
            className="button btn-choose-color"
            onClick={openColor}
            id="open-color-btn"
          >
            Choose Color
          </button>
        )}

        <div
          className={`expandable-container ${
            isMobile ? "color-container-responsive" : ""
          } ${isColorOpened ? "color-container-active" : ""}`}
          id="color-container"
        >
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
          {props.colorVariants === 5 && (
            <>
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
            </>
          )}
        </div>

        {/* <div
          className={`expandable-container ${
            isMobile ? "color-container-responsive" : ""
          } ${isColorOpened ? "color-container-active" : ""}`}
          id="color-container"
        >
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
        </div> */}

        <button className="button btn-add-text" onClick={props.openAddText}>
          Add text
        </button>

        {props.isTextOpened && !isMobile ? (
          <div
            className={`add-text expandable-container ${
              props.isTextOpened && "expandable-container-active"
            }`}
          >
            <label htmlFor="text" className="label-text">
              Text:
              <input
                type="text"
                id="text"
                name="text"
                placeholder="Write something"
              ></input>
            </label>
            <label htmlFor="font" className="label-font">
              Font Family:
              <select name="font" id="font">
                <option value="times New Roman">Times New Roman</option>
                <option value="consolas">Consolas</option>
                <option value="arial">Arial</option>
              </select>
            </label>
            <label htmlFor="font-size" className="label-font-size">
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
            <label htmlFor="color-picker" className="label-color">
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
        ) : null}

        <button className="button btn-add-image" onClick={props.openAddImage}>
          Upload Image
        </button>
        <div
          className={`upload-image expandable-container ${
            props.isAddImageOpened && !isMobile && "expandable-container-active"
          }`}
        >
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
        {props.hasTwoCanvases ? (
          <>
            {isMobile ? (
              <>
                <button className="front-btn-responsive" onClick={props.front}>
                  Front
                </button>
                <button className="back-btn-responsive" onClick={props.back}>
                  Back
                </button>
              </>
            ) : (
              <div className="front-back-container" id="front-back">
                <button className="front-btn" onClick={props.front}>
                  Front
                </button>
                <button className="back-btn" onClick={props.back}>
                  Back
                </button>
              </div>
            )}
          </>
        ) : null}

        <button className="button save-btn-container" onClick={openSave}>
          Save
        </button>

        <div
          className={`expandable-container ${
            isSaveOpened && !isMobile && "expandable-container-active"
          }`}
          id="save-container"
        >
          <button onClick={props.download} className="save-btn">
            Download
          </button>

          <button className="save-btn" id="save-degign" onClick={openOverlay}>
            Save to My Designs
          </button>
        </div>
      </div>
      <div
        className={`canvas-container ${
          !props.isFrontCanvas && "canvas-hidden"
        }`}
        id="canvas-container"
      >
        <canvas id="canvas" />
      </div>
      <div
        className={`canvas-container ${props.isFrontCanvas && "canvas-hidden"}`}
        id="canvas1-container"
      >
        <canvas id="canvas1" />
      </div>

      {/* Responsive Add Text */}

      <div
        className={`expandable-container ${
          props.isTextOpened && isMobile && "expandable-container-active"
        }`}
        id="add-text-container-responsive"
      >
        <label htmlFor="text" className="label-text">
          Text:
          <input
            type="text"
            id="text-responsive"
            name="text"
            placeholder="Write something"
          ></input>
        </label>
        <label htmlFor="font" className="label-font">
          Font Family:
          <select name="font" id="font-responsive">
            <option value="times New Roman">Times New Roman</option>
            <option value="consolas">Consolas</option>
            <option value="arial">Arial</option>
          </select>
        </label>
        <label htmlFor="font-size" className="label-font-size">
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
        <label htmlFor="color-picker" className="label-color">
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
        className={`expandable-container ${
          isMobile && props.isAddImageOpened && "expandable-container-active"
        }`}
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

      <div
        className={`expandable-container save-container-responsive ${
          isMobile && isSaveOpened && "expandable-container-active"
        }`}
      >
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

      <div
        className={`overlay-container ${
          isOverlayOpened && "overlay-container-active"
        }`}
      >
        <div id="save-form-container">
          <i className="fas fa-times" onClick={openOverlay}></i>
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
            <button className="button save-form-btn">Save</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default DesignBar;
