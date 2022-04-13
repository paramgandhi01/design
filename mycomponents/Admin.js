import React from "react";
import "./Admin.css";

export default function Admin() {
  return (
    <div className="bgc">
      <div className="heading">
        <p>Phasellus eget sem quis elit</p>
        <h3>Ultricies Porta Donec Imperdiet</h3>
      </div>
      <div className="fx">
        <div className="f1">
          <h5>Nisl Nullam Odio Justo Pharetra</h5>
          <div className="toomuch">
            <i class="fa fa-male"></i>
            <p>Admin</p>
            <hr className="hr" />
            <p>10 Oct 1999</p>
          </div>
          <div className="tennis"></div>
          <p>
            Et sagittis ac dignissim nec metus proin nunc <br /> maecenas vel
            nulla vivamus mattis massa vitae
          </p>
          <button className="bttn">READ MORE</button>
        </div>
        <div className="f2">
          <h5>Sapien Aliquam Vulputate Massa</h5>
          <div className="toomuch">
            <i class="fa fa-male"></i>
            <p>Admin</p>
            <hr className="hr" />
            <p>24 Jan 1964</p>
          </div>
          <div className="tennis1"></div>
          <p>
            Et sagittis ac dignissim nec metus proin nunc <br /> maecenas vel
            nulla vivamus mattis massa vitae
          </p>
          <button className="bttn">READ MORE</button>
        </div>
        <div className="f3">
          <h5>Facilisi Phasellus Eu Lacus</h5>
          <div className="toomuch">
            <i class="fa fa-male"></i>
            <p>Admin</p>
            <hr className="hr" />
            <p>24 Jan 1964</p>
          </div>
          <div className="tennis2"></div>
          <p>
            Et sagittis ac dignissim nec metus proin nunc <br /> maecenas vel
            nulla vivamus mattis massa vitae
          </p>
          <button className="bttn">READ MORE</button>
        </div>
      </div>
    </div>
  );
}
