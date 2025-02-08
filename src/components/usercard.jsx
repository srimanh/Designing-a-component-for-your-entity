// import React from "react";

const Usercard = () => {
    const profilePhoto =
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwRPWpO-12m19irKlg8znjldmcZs5PO97B6A&s";
    const name = "Sriman";
    const email = "Sriman.h.s76@kalvium.community";
    const phone = "+1 234 567 8901";
    const address = "Kalvium Coimbatore";
  
    const cardStyle = {
      border: "1px solid #ddd",
      borderRadius: "8px",
      padding: "16px",
      boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.1)",
      textAlign: "center",
      backgroundColor: "#fff",
      maxWidth: "250px",
    };
  
    const imageStyle = {
      width: "100px",
      height: "100px",
      borderRadius: "50%",
      objectFit: "cover",
      marginBottom: "10px",
    };
  
    const textStyle = {
      margin: "5px 0",
      fontSize: "14px",
    };
  
    return (
      <div style={cardStyle}>
        <img src={profilePhoto} alt="Profile" style={imageStyle} />
        <h3>{name}</h3>
        <p style={textStyle}><strong>Email:</strong> {email}</p>
        <p style={textStyle}><strong>Phone:</strong> {phone}</p>
        <p style={textStyle}><strong>Address:</strong> {address}</p>
      </div>
    );
  };
  
  export default Usercard;
  