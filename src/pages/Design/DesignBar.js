import "./DesignBar.css";

function DesignBar(props) {
  return (
    <div className="component-container">
      <div className="bar-container">
        <h1>Create your product</h1>
        <button className="button btn-choose-color" onClick={props.openColor}>
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
          <label for="url" className="label-url">
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
          </label>
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
        <div className="front-back-container">
          <button className="front-btn" onClick={props.front}>
            Front
          </button>
          <button className="back-btn" onClick={props.back}>
            Back
          </button>
        </div>
        <button className="button save-btn-container" onClick={props.openSave}>
          Save
        </button>

        <div className="expandable-container" id="save-container">
          <button onClick={props.download} className="save-btn">
            Download
          </button>

          <button
            className="save-btn"
            id="save-degign"
            onClick={props.openOverlay}
          >
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
      <div className="overlay-container">
        <div id="save-form-container">
          <i class="fas fa-times" onClick={props.openOverlay}></i>
          <form onSubmit={props.submitHandler}>
            <h1>Save design</h1>
            <label>
              Name:
              <input
                type="text"
                required
                placeholder="Insert a name"
                id="name-input"
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
