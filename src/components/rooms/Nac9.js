import { React, useEffect } from "react";

import ofl from "../../img/ofl.png";
import ofm from "../../img/ofm.png";
import ofr from "../../img/ofr.png";
import oftl from "../../img/oftl.png";
import oftm from "../../img/oftm.png";
import oftr from "../../img/oftr.png";

import conference from "../../img/conference.png";

import endept from "../../img/endept.png";

import lift from "../../img/lift.png";
import lift2 from "../../img/lift2.png";
import washroomm from "../../img/washroomm.png";
import washroomf from "../../img/washroomf.png";

//styled
import styled from "styled-components";
const Nac9 = ({ setpreloader }) => {
  useEffect(() => {
    setTimeout(function () {
      setpreloader(false);
    }, 500);
  });
  return (
    <Body>
      <div className="largeSection">
        <div className="roomRowLeft">
          <div className="officeroom">
            <div className="num">
              <h1>NAC (948-953)</h1>
            </div>
            <div className="bottomrow">
              <img src={ofl} alt="" />
              <img src={ofm} alt="" />
              <img src={ofr} alt="" />
            </div>
          </div>
          <div className="officeroom">
            <div className="toprow">
              <img src={oftl} alt="" />
              <img src={oftm} alt="" />
              <img src={oftr} alt="" />
            </div>
            <div className="num">
              <h1>NAC (953-959)</h1>
            </div>
            <div className="bottomrow">
              <img src={ofl} alt="" />
              <img src={ofm} alt="" />
              <img src={ofr} alt="" />
            </div>
          </div>
          <div className="washroom">
            <h1>WASHROOM</h1>
            <img src={washroomm} alt="" />
          </div>
          <div className="washroom">
            <h1>WASHROOM</h1>
            <img src={washroomf} alt="" />
          </div>
          <div className="lift">
            <h1>LIFT & STAIRS</h1>
            <img src={lift} alt="" />
          </div>

          <div className="officeroom">
            <div className="toprow">
              <img src={oftl} alt="" />
              <img src={oftm} alt="" />
              <img src={oftr} alt="" />
            </div>
            <div className="num">
              <h1>NAC905</h1>
            </div>
            <div className="bottomrow">
              <img src={ofl} alt="" />
              <img src={ofm} alt="" />
              <img src={ofr} alt="" />
            </div>
          </div>
          <div className="dept">
            <h1>Department of English & Modern Language</h1>
            <img src={endept} alt="" />
          </div>

          <div className="lift">
            <h1>LIFT & STAIRS</h1>
            <img src={lift2} alt="" />
          </div>
          <div className="washroom">
            <h1>WASHROOM</h1>
            <img src={washroomf} alt="" />
          </div>
          <div className="washroom">
            <h1>WASHROOM</h1>
            <img src={washroomm} alt="" />
          </div>
          <div className="officeroom">
            <h1>NAC 913 (a - h)</h1>
            <div className="bottomrow">
              <img src={ofl} alt="" />
              <img src={ofm} alt="" />
              <img src={ofr} alt="" />
            </div>
          </div>
        </div>

        <div className="corridor">
          <h1>NAC 9th FLOOR</h1>
        </div>

        <div className="roomRowRight">
          <div className="officeroom">
            <div className="officeroom">
              <div className="num">
                <h1>NAC (945-947)</h1>
              </div>
              <div className="bottomrow">
                <img src={ofl} alt="" />
                <img src={ofm} alt="" />
                <img src={ofr} alt="" />
              </div>
            </div>
            <div className="toprow">
              <img src={oftl} alt="" />
              <img src={oftm} alt="" />
              <img src={oftr} alt="" />
            </div>
            <div className="num">
              <h1>NAC (939-944)</h1>
            </div>
            <div className="bottomrow">
              <img src={ofl} alt="" />
              <img src={ofm} alt="" />
              <img src={ofr} alt="" />
            </div>
          </div>

          <div className="officeroom">
            <div className="toprow">
              <img src={oftl} alt="" />
              <img src={oftm} alt="" />
              <img src={oftr} alt="" />
            </div>
            <div className="num">
              <h1>NAC (933-938)</h1>
            </div>
            <div className="bottomrow">
              <img src={ofl} alt="" />
              <img src={ofm} alt="" />
              <img src={ofr} alt="" />
            </div>
          </div>
          <div className="officeroom">
            <div className="toprow">
              <img src={oftl} alt="" />
              <img src={oftm} alt="" />
              <img src={oftr} alt="" />
            </div>
            <div className="num">
              <h1>NAC (927-932)</h1>
            </div>
            <div className="bottomrow">
              <img src={ofl} alt="" />
              <img src={ofm} alt="" />
              <img src={ofr} alt="" />
            </div>
          </div>
          <div className="conference">
            <h1>Conference Room</h1>
            <img src={conference} alt="" />
          </div>
          <div className="officeroom">
            <div className="toprow">
              <img src={oftl} alt="" />
              <img src={oftm} alt="" />
              <img src={oftr} alt="" />
            </div>
            <div className="num">
              <h1>NAC (921-926)</h1>
            </div>
            <div className="bottomrow">
              <img src={ofl} alt="" />
              <img src={ofm} alt="" />
              <img src={ofr} alt="" />
            </div>
          </div>
          <div className="officeroom">
            <div className="toprow">
              <img src={oftl} alt="" />
              <img src={oftm} alt="" />
              <img src={oftr} alt="" />
            </div>
            <div className="num">
              <h1>NAC (915-920)</h1>
            </div>
            <div className="bottomrow">
              <img src={ofl} alt="" />
              <img src={ofm} alt="" />
              <img src={ofr} alt="" />
            </div>
          </div>
          <div className="officeroom">
            <h1>NAC914(a-h)</h1>
            <div className="bottomrow">
              <img src={ofl} alt="" />
              <img src={ofm} alt="" />
              <img src={ofr} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="smallSection"></div>
    </Body>
  );
};

const Body = styled.div`
  position: absolute;
  width: 100vw;
  display: flex;
  justify-content: center;
  padding: 0;
  overflow: scroll;
  background-color: black;
  .largeSection {
    overflow: visible;
    display: flex;
    justify-content: space-evenly;
    height: 150%;
    border: 5px solid #9c9c9c;
    .roomRowLeft {
      display: flex;
      flex-direction: column;
      width: 150px;

      h1 {
        font-size: 15px;
      }
      .washroom {
        height: 75px;

        display: flex;
        justify-content: center;
        align-items: center;
        h1 {
          position: absolute;
          color: wheat;
          padding: 5px;
          background-color: #00000086;
        }

        img {
          height: 75px;
          width: 150px;
        }
      }

      .officeroom {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .toprow {
          width: 150px;
          display: flex;
          flex-direction: row;
        }
        .num {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 50px;
        }
        .bottomrow {
          width: 150px;
          display: flex;
          flex-direction: row;
        }
        h1 {
          position: absolute;
          color: wheat;
          padding: 5px;
          background-color: #00000086;
        }
        h2 {
          position: absolute;
          color: wheat;
          font-size: 4vw;
          padding: 5px;
          background-color: #00000086;
        }

        img {
          height: 80px;
          width: 150px;
        }
      }
      .dept {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        h1 {
          position: absolute;
          color: wheat;
          width: 100px;
          padding: 5px;
          background-color: #00000086;
        }

        img {
          height: 225px;
          width: 150px;
        }
      }

      .lift {
        height: 135px;
        display: flex;
        justify-content: center;
        align-items: center;
        h1 {
          position: absolute;
          color: wheat;
          padding: 5px;
          background-color: #00000086;
        }
        img {
          height: 135px;
        }
      }
    }
    .corridor {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 15vw;
      background-color: #18191a;
      h1 {
        color: wheat;
        font-size: 25px;
        writing-mode: vertical-rl;
        text-orientation: mixed;
      }
    }
    .roomRowRight {
      display: flex;
      flex-direction: column;
      width: 150px;
      display: flex;
      flex-direction: column;
      width: 150px;

      h1 {
        font-size: 15px;
      }
      .conference {
        height: 165px;
        display: flex;
        justify-content: center;
        align-items: center;
        h1 {
          position: absolute;
          color: wheat;
          font-size: 10px;
          padding: 5px;
          background-color: #00000086;
        }
        img {
          height: 165px;
          width: 150px;
        }
      }
      .officeroom {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .toprow {
          width: 150px;
          display: flex;
          flex-direction: row;
        }
        .num {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 50px;
        }
        .bottomrow {
          width: 150px;
          display: flex;
          flex-direction: row;
        }
        h1 {
          position: absolute;
          color: wheat;
          padding: 5px;
          background-color: #00000086;
        }

        img {
          height: 80px;
          width: 150px;
        }
      }
    }
  }

  @media (min-width: 800px) {
    height: 230%;
    overflow: scroll;
    .largeSection {
      height: 180%;
      border: 5px solid #9c9c9c;
      .roomRowLeft {
        width: 300px;

        h1 {
          font-size: 15px;
        }
        .washroom {
          height: 145px;
          img {
            height: 145px;
            width: 300px;
          }
        }

        .officeroom {
          .toprow {
            width: 300px;
          }
          .num {
            height: 100px;
          }
          .bottomrow {
            width: 300px;
          }

          img {
            height: 150px;
            width: 300px;
          }
        }
        .dept {
          height: 465px;
          h1 {
            width: 150px;
          }

          img {
            height: 465px;
            width: 300px;
          }
        }

        .lift {
          height: 225px;
          width: 300px;
          img {
            height: 225px;
            width: 300px;
          }
        }
      }
      .corridor {
        width: 10vw;
        background-color: #18191a;
      }
      .roomRowRight {
        width: 300px;

        h1 {
          font-size: 15px;
        }
        .conference {
          height: 300px;
          img {
            height: 300px;
            width: 300px;
          }
        }
        .officeroom {
          .toprow {
            width: 300px;
          }
          .num {
            height: 100px;
          }
          .bottomrow {
            width: 300px;
          }

          img {
            height: 150px;
            width: 300px;
          }
        }
      }
    }
  }
`;

export default Nac9;
