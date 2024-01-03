import React from "react";
import "./recognition.css";
import fingerprintScan from "../images/fingerprintScan.png"
import smilyFaceRecognition from "../images/faceRecognition.png"

export default function Home() {
  return (
    <div className="container1">
      <span className="headingText">
        <h1>Recognition</h1>
      </span>
      <div className="horizontalLine"></div>
      <div className="bigBox">
        <div className="box1">
          <div className="boxContent">
            <h2>Fingerprint Recognition</h2>
            <img src={fingerprintScan} alt="Fingerprint Scan" />
          </div>
        </div>
        <div className="box2">
          <div className="boxContent">
            <h2>Face Recognition</h2>
            <img src={smilyFaceRecognition} alt="Smiley Face Recognition" />
          </div>
        </div>
      </div>
    </div>
  );
}