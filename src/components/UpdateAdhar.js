import React, { useState } from "react";
import "./UpdateAdhar.css";

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
      <h1 className="addAdharHeading">Update Adhar</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Adhar Number:
          <input type="text" name="adharNumber" value={adharDetails.adharNumber} onChange={handleChange}  />
        </label>
        <label>
          Name:
          <input type="text" name="name" value={adharDetails.name} onChange={handleChange}  />
        </label>
        <label>
          Address:
          <input type="text" name="address" value={adharDetails.address} onChange={handleChange}  />
        </label>
        <label>
          Phone Number:
          <input type="text" name="phoneNumber" value={adharDetails.phoneNumber} onChange={handleChange}  />
        </label>
        <label>
          Upload Fingerprint:
          <input type="file" name="fingerprintImage" onChange={handleFileChange} accept="image/*"  />
        </label>
        <label>
          Upload Face Image:
          <input type="file" name="faceImage" onChange={handleFileChange} accept="image/*"  />
        </label>
        <button type="submit">Update Adhar</button>
      </form>
    </div>
  );
}