import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="overlay">
        <div className="down">
        <div className="a1">
          <div className="b">
            <h4>Lorem Proin Volutpat</h4>
            <p>
              Ligula quis sapien nam molestie <br /> massa quis pede maecenas
              quis <br /> lacus nunc sed lectus quis lectus <br /> tristique
              tincidunt sed varius nisl <br /> tincidunt lectus pellentesque{" "}
              <br /> sagittis mauris ut leo ullamcorper <br /> tortor morbi
              accumsan […]
            </p>
            <div className="icons">
              <div className="facebook">
                <i class="fa fa-facebook-f"></i>
              </div>
              <div className="google">
                <i class="fa fa-google"></i>
              </div>
              <div className="twitter">
                <i class="fa fa-twitter"></i>
              </div>
              <div className="linkdin">
                <i class="fa fa-linkedin"></i>
              </div>
            </div>
          </div>
          <div className="c">
            <h4>Nascetur Ridiculus Mus</h4>
            <p>Aliquam eget leo praesent</p>
            <hr />
            <p>Vel urna nunc ultricies</p>
            <hr />
            <p>Faucibus nunc cum sociis</p>
            <hr />
            <p>Natoque penatibus et magnis</p>
            <hr />
            <p>Dis parturient montes</p>
          </div>
          <div className="de">
            <h4>Vestibulum Sed Quam</h4>
            <p>
              Ante dapibus luctus sed quis diam <br /> vitae ipsum ultrices
              vehicula.
            </p>
            <input className="input" type="text" placeholder="Name" />
            <input className="input" type="text" placeholder="Email" />
            <button className="click">SUBMIT</button>
          </div>
          <div className="f">
            <h4>Aenean Diam Euismod</h4>
          </div>
        </div>
        <hr />
        <div>
          <ul className="ff">
            <i class="fa fa-home"></i>
            <li>ABOUT</li>
            <li>CONTACT</li>
            <li>TERMS</li>
            <li>PRIVACY</li>
            <li>COOKIES</li>
            <li>DISCLAIMER</li>
          </ul>
        </div>
        <hr />
        <div className="copy">
          <div className="rn">
            <p>Copyright © 2021 - All Rights Reserved - Domain Name</p>
          </div>
          <div className="rn">Template by OS Templates</div>
        </div>
      </div>
      <div className="gotop">
        <div className="top">
        <a href="#">
          <i className="fa fa-arrow-up"></i>
        </a>
        </div>
        </div>
      </div>
    </div>
  );
}
