import React, { useState } from "react";
import QRCode from "qrcode.react";
import "./QRGenerator.css";

const QRGenerator = () => {
  const [value, setValue] = useState("");
  // const input = document.getElementById("input");
  // const qrCode = document.getElementById("qrCode");

  // if (input.value === "") {
  //   qrCode.style.display = "none";
  // } else {
  //   qrCode.style.display = "block";
  // }

  return (
    <div className="container">
      <h1 className="heading">QR Generator</h1>
      <div className="inputContainer">
        <label htmlFor="text">URL here: </label>
        <input
          id="input"
          type="text"
          className="input"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Your text here..."
        />
      </div>
      <QRCode id="qrCode" className="qrCode" value={value} />
    </div>
  );
};

export default QRGenerator;
