import React, { useEffect, useState } from "react";
import {
  Accordion,
  Button,
  ButtonGroup,
  Card,
  Dropdown,
  DropdownButton,
} from "react-bootstrap";
import { useParams, useHistory  } from "react-router-dom";
import assignIcon from "../../../img/path1299.png";
import secndIcon from "../../../img/Group626051.png";

import { deleteScreen, getAllScreens } from "../../../utils/api";
import DeleteConfirmation from "../../modals/DeleteConfirmation";

const ScreenDetails = () => {
  const history = useHistory();
  const { id } = useParams();
  const [screen, setScreen] = useState("");
  const [activeDefault, setActiveDefault] = useState("");
  const [deleteModal, setDeleteModal] = useState(false);
  // use effect
  useEffect(() => {
    callAllScreenApi();
  }, []);
  const callAllScreenApi = async () => {
    const list = await getAllScreens();
    setScreen(
      list.find((item) => {
        return item._id === id;
      })
    );
  };

  const handleDelete = async () => {
    setDeleteModal(false);
   await deleteScreen(id);
    history.push('/display');
  };
  const defaultAccordion = [
    {
      title: "Content",
      text: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.",
      bg: "primary",
    },
    {
      title: "Device",
      text: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.",

      bg: "info",
    },
    {
      title: "Tag",
      text: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.",

      bg: "success",
    },
  ];
if(!screen) return <></>
  return (
    <>
      <div className="custom-content-heading d-flex flex-wrap">
        <h1>Screen Details</h1>
      </div>

      <div className="form-head d-flex mb-3 align-items-start">
        <span
          style={{
            fontWeight: 700,
            fontSize: "30px",
            lineHeight: "41px",

            color: "#B3005E",
          }}
        >
          {screen.name}
        </span>

        <div className="search-textfield ml-auto d-flex flex-wrap align-items-center">
        <a className=" btn btn-primary" variant="primary"
                          href={`/web-player?id=${screen.device.deviceToken}`}
                          target="_blank"
                          rel="noreferrer"
                        >
                        Launch Web Player
                        </a>

          <Button className="ml-2 icon-btn btn btn-primary" variant="primary">
            <img
              className="dropdown-list-img-icon img-fluid"
              src={assignIcon}
              alt="menu-icon"
            />
          </Button>
          <Button className="ml-2 icon-btn btn btn-primary" variant="primary">
            <img
              className="dropdown-list-img-icon img-fluid"
              src={secndIcon}
              alt="menu-icon"
            />
          </Button>
          <DropdownButton
            as={ButtonGroup}
            title=""
            id="bg-nested-dropdown"
            className="ml-2  "
          >
            <Dropdown.Item eventKey="1">Reload Screen</Dropdown.Item>
            <Dropdown.Item eventKey="2">Clear Cache</Dropdown.Item>
            <Dropdown.Item eventKey="3">Clear Data</Dropdown.Item>
            <Dropdown.Item eventKey="4">Reboot display</Dropdown.Item>
            <Dropdown.Item
              eventKey="5"
              onClick={() => {
                setDeleteModal(true);
              }}
            >
              Deactivate Screen
            </Dropdown.Item>
          </DropdownButton>
        </div>
      </div>

      <div className="row page-titles mx-0">
        <div className="col-sm-6 p-md-0">
          <div className="">
            <h4>{screen.googleLocation}</h4>
            <p className="mb-0">Active Now</p>
          </div>
        </div>
      </div>

      <div className="col-md-12">
        <Accordion className="accordion accordion-primary " defaultActiveKey="">
          {defaultAccordion.map((d, i) => (
            <div className="accordion__item details-accordian" key={i}>
              <Accordion.Toggle
                as={Card.Text}
                eventKey={`${i}`}
                className={`accordion__header rounded-lg ${
                  activeDefault === i ? "" : "collapsed"
                }`}
                onClick={() => setActiveDefault(activeDefault === i ? -1 : i)}
              >
                <span className="accordion__header--text">{d.title}</span>
                <span className="accordion__header--indicator"></span>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey={`${i}`}>
                <div className="accordion__body--text">{d.text}</div>
              </Accordion.Collapse>
            </div>
          ))}
        </Accordion>
      </div>
      {deleteModal && (
        <DeleteConfirmation
          setDeleteModal={setDeleteModal}
          callbackFunction={handleDelete}
          text="Are you sure you want to deactivate?"
          yes={"Yes Deactivate"}
        />
      )}
    </>
  );
};

export default ScreenDetails;
