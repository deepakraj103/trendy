import React, { useEffect, useState } from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import emptyMediaImg from "../../../images/card/1.png";
import { Link } from "react-router-dom";

const DefaultComposition = () => {
  const [test, settest] = useState(false);
  const [showNewTagModal, setNewTagModal] = useState(false);
  // use effect
  useEffect(() => {
    setTimeout(() => {
      settest(true);
    }, 2000);
  }, [test]);
  const chackbox = document.querySelectorAll(".custom-checkbox input");
  const motherChackBox = document.querySelector("#checkbox1_exam_all");
  const chackboxFun = (type) => {
    for (let i = 0; i < chackbox.length; i++) {
      const element = chackbox[i];
      if (type === "all") {
        if (motherChackBox.checked) {
          element.checked = true;
        } else {
          element.checked = false;
        }
      } else {
        if (!element.checked) {
          motherChackBox.checked = false;
          break;
        } else {
          motherChackBox.checked = true;
        }
      }
    }
  };

  return (
    <>
      <div className="row settings-default">
        <Col xl="6">
          <div className="default-composition-preview">
            <div className="thumbnail">
              <img className="imgContent" src={emptyMediaImg} alt="Card cap" />
            </div>
          </div>
        </Col>
        <Col xl="6">
          <div className="mb-4">
            <h4 className="card-title card-intro-title">
              Organisation default composition
            </h4>
            <p>
              The composition will be applied to all newly added displays in the
              organization
            </p>
            <p className="font-weight-bold">
            Default Composition:
            Screenshot 2 - Composition 
            <span className='btn-icon-right text-info'>
                    <i className='fa fa-pencil' />
                  </span>
            </p>
            <p className="font-weight-bold">
            Duration:
            10 seconds
            </p>
            
          </div>
        </Col>
      </div>
    </>
  );
};

export default DefaultComposition;
