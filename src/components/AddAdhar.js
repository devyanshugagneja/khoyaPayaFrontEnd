import React, { useState } from "react";
import "./AddAdhar.css";

export default function AddAdhar() {
  const [adharDetails, setAdharDetails] = useState({
    adharNumber: "",
    name: "",
    address: "",
    phoneNumber: "",
    fingerprintImage: null,
    faceImage: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAdharDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setAdharDetails((prevDetails) => ({ ...prevDetails, [name]: files[0] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log("Adhar details submitted:", adharDetails);
  };

  return (
    <div className="container5">
      <h1 className="addAdharHeading">Add Adhar</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Adhar Number<span className="laal">*</span>:
          <input type="text" name="adharNumber" value={adharDetails.adharNumber} onChange={handleChange} required />
        </label>
        <label>
          Name<span className="laal">*</span>:
          <input type="text" name="name" value={adharDetails.name} onChange={handleChange} required />
        </label>
        <label>
          Address<span className="laal">*</span>:
          <input type="text" name="address" value={adharDetails.address} onChange={handleChange} required />
        </label>
        <label>
          Phone Number<span className="laal">*</span>:
          <input type="text" name="phoneNumber" value={adharDetails.phoneNumber} onChange={handleChange} required />
        </label>
        <label>
          Upload Fingerprint<span className="laal">*</span>:
          <input type="file" name="fingerprintImage" onChange={handleFileChange} accept="image/*" required />
        </label>
        <label>
          Upload Face Image<span className="laal">*</span>:
          <input type="file" name="faceImage" onChange={handleFileChange} accept="image/*" required />
        </label>
        <button type="submit">Add Adhar</button>
      </form>
    </div>
  );
}