import React from "react";
import ReactDOM from "react-dom";

function Card(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <img src={props.img} alt="avatar_img" />
      <p>{props.tel}</p>
      <p>{props.email}</p>
    </div>
  );
}
ReactDOM.render(
  <div className="my-style">
    <h1>My Contacts</h1>
    <Card
      name="beyonce"
      img
      src="https://tse1.mm.bing.net/th/id/OIP.vggFhcDaZAZ0BLI1MKgUzgHaD-?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3"
      email="beyonce@mail.com"
      tel="+1234567890"
    />
    <Card
      name="TATA"
      img
      src="https://i.pinimg.com/originals/cb/72/6f/cb726f5b8dd8fccc2d5ffc7a9f23d9d1.png"
      tel="+0123456789"
      email="taetae@gmail.com"
    />
    <input id="fName" placeholder="Enter your first name" value="Sow" />
  </div>,
  document.getElementById("root")
);
