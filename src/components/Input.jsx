import React from "react";
import addimg from "../img/image.png";
import Attach from "../img/clip.png";
const Input = () => {
  return (
    <div className="input">
      <input type="text" placeholder="Message" />
      <div className="send">
        <img src={Attach} alt="" />
        <input type="file" style={{ display: "none" }} id="file" />
        <label htmlFor="file">
          <img src={addimg} alt="" />
        </label>
        <button>Send</button>
      </div>
    </div>
  );
};

export default Input;
