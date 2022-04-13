import React from "react";
import "./Phone.css";

export default function Phone() {
  return (
    <div className="main">
      <div className="phone-bg">
        <div className="part">
          <p>Etiam id augue in vestibulum</p>
          <h3>Turpis In Tristique Eleifend Nulla</h3>
        </div>
        <div className="twopart">
          <div className="one">
            <div className="un">
              <div className="ph-hover">
                <div className="icon"><i class="fa fa-apple"></i></div>
                <div className="text">
                  <h4>Ante Fringilla Nisl Eu</h4>
                  <p>
                    Gravida lorem ligula quis ligula pellentesque congue <br />{" "}
                    semper felis maecenas rutrum euismod nibh class aptent{" "}
                    <br /> taciti.
                  </p>
                </div>
              </div>
            </div>
            <div className="dos">
            <div className="ph-hover">
              <div className="icon"><i class="fa fa-apple"></i></div>
              <div className="text">
                <h4>Ante Fringilla Nisl Eu</h4>
                <p>
                  Gravida lorem ligula quis ligula pellentesque congue <br />{" "}
                  semper felis maecenas rutrum euismod nibh class aptent <br />{" "}
                  taciti.
                </p>
              </div>
              </div>
            </div>
            <div className="tres">
            <div className="ph-hover">
              <div className="icon"><i class="fa fa-apple"></i></div>
              <div className="text">
                <h4>Ante Fringilla Nisl Eu</h4>
                <p>
                  Gravida lorem ligula quis ligula pellentesque congue <br />{" "}
                  semper felis maecenas rutrum euismod nibh class aptent <br />{" "}
                  taciti.
                </p>
              </div>
              </div>
            </div>
          </div>
          <div className="two">
            <div className="image"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
