import React, { useState } from "react";
import { Table, Dropdown } from "react-bootstrap";
import AddNewTagModal from "../../../modals/AddNewTagModal";
import downArrow from "../../../../img/down-arrow.png";
import menuIcon from "../../../../img/menu-icon.png";
import veiwDetailIcon from "../../../../img/view-detail-icon.png";
import defaultComparisonIcon from "../../../../img/default-comparison-icon.png";
import assignIcon from "../../../../img/assign-icon.png";
import takeScreenshotIcon from "../../../../img/tack-screenshot-icon.png";
import edit from "../../../../img/edit-composition.png";
import deleteIcon from "../../../../img/delete-icon.png";

import { Link } from "react-router-dom";
import { deleteCompositionById } from "../../../../utils/api";
import DeleteConfirmation from "../../../modals/DeleteConfirmation";

const ListComposition = ({ allComposition, mutate }) => {
  const [deleteModal, setDeleteModal] = useState(false);
  const [showNewTagModal, setNewTagModal] = useState(false);
  const [selected, setSelected] = useState("");
  
  const handleDelete = async () => {
    setDeleteModal(false)
    await deleteCompositionById(selected._id);
    mutate();
   };
  return (
    <>
      <Table responsive className="custom-table screen-table">
        <thead>
          <tr>
            <th>Composition</th>
            <th>Date Added</th>
            <th>Duration</th>
            <th>Associated Schedule</th>
            <th>Tags</th>
            <th>More</th>
          </tr>
        </thead>
        <tbody>
          {allComposition &&
            allComposition.map((composition) => {
              return (
                <tr id={composition._id}>
                  <td>
                    <span className="td-content">
                      <strong>{composition.name}</strong>
                      {/* <span>{screen.screenLocation}</span> */}
                    </span>
                  </td>
                  <td>
                    <span className="d-flex align-items-center">
                      <span className="status status-green"></span>
                      <span className="td-content">
                        {/* <strong>{screen.name}</strong>
                        <span>{screen.screenLocation}</span> */}
                      </span>
                    </span>
                  </td>
                  <td> {composition.duration} Sec</td>
                  <td>No Schedule</td>
                  <td style={{ width: "180px" }}>
                    <span className="tag-container">
                      {composition.tags &&
                        composition.tags.map((tag) => {
                          return (
                            <span className="my-phone-tag text-truncate ml-1 mr-1 mb-1">
                              {tag}
                            </span>
                          );
                        })}
                    </span>

                    <span
                      className="down-arrow"
                      onClick={() => {
                        setSelected(composition);
                        setNewTagModal(true);
                      }}
                    >
                      <img
                        className="down-arrow-img img-fluid"
                        src={downArrow}
                        alt="arrow"
                      />
                    </span>
                  </td>
                  <td>
                    <Dropdown className="dropdown-toggle-menu">
                      <Dropdown.Toggle variant="" className="p-0  mb-2">
                        <span className="table-menu-icon">
                          <img
                            className="menu-img img-fluid"
                            src={menuIcon}
                            alt="menu-icon"
                          />
                        </span>
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item href="#" className="dropdown-list-item">
                          <div className="d-flex">
                            <div className="dropdown-list-icon">
                              <img
                                className="dropdown-list-img img-fluid"
                                src={veiwDetailIcon}
                                alt="menu-icon"
                              />
                            </div>
                            <div className="dropdown-menu-list">
                              <span className="menu-heading">View Details</span>
                              <span className="menu-description">
                                Get to know more about screen info
                              </span>
                            </div>
                          </div>
                        </Dropdown.Item>
                        <Dropdown.Item href="#" className="dropdown-list-item">
                          <div className="d-flex">
                            <div className="dropdown-list-icon">
                              <img
                                className="dropdown-list-img img-fluid"
                                src={defaultComparisonIcon}
                                alt="menu-icon"
                              />
                            </div>
                            <div className="dropdown-menu-list">
                              <span className="menu-heading">
                                Change Default Composition
                              </span>
                              <span className="menu-description">
                                Get to know more about screen info
                              </span>
                            </div>
                          </div>
                        </Dropdown.Item>
                        <Dropdown.Item href="#" className="dropdown-list-item">
                          <div className="d-flex">
                            <div className="dropdown-list-icon">
                              <img
                                className="dropdown-list-img img-fluid"
                                src={assignIcon}
                                alt="menu-icon"
                              />
                            </div>
                            <div className="dropdown-menu-list">
                              <span className="menu-heading">
                                Assign Quickplay
                              </span>
                              <span className="menu-description">
                                Get to know more about screen info
                              </span>
                            </div>
                          </div>
                        </Dropdown.Item>
                        <Dropdown.Item href="#" className="dropdown-list-item">
                          <Link to={`/composition/edit?id=${composition._id}`}>
                            <div className="d-flex">
                              <div className="dropdown-list-icon">
                                <img
                                  className="dropdown-list-img img-fluid"
                                  src={edit}
                                  alt="menu-icon"
                                />
                              </div>
                              <div className="dropdown-menu-list">
                                <span className="menu-heading">Edit</span>
                                <span className="menu-description">
                                  Make changes to this composition
                                </span>
                              </div>
                            </div>
                          </Link>
                        </Dropdown.Item>
                        <Dropdown.Item href="#" className="dropdown-list-item">
                          <div className="d-flex">
                            <div className="dropdown-list-icon">
                              <img
                                className="dropdown-list-img img-fluid"
                                src={takeScreenshotIcon}
                                alt="menu-icon"
                              />
                            </div>
                            <div className="dropdown-menu-list">
                              <span className="menu-heading">Duplicate</span>
                              <span className="menu-description">
                                Create duplicate of your composition
                              </span>
                            </div>
                          </div>
                        </Dropdown.Item>
                        <Dropdown.Item
                          href="#"
                          className="dropdown-list-item"
                          onClick={() => {
                            setSelected(composition);
                            setDeleteModal(true)
                          }}
                        >
                          <div className="d-flex">
                            <div className="dropdown-list-icon">
                              <img
                                className="dropdown-list-img img-fluid"
                                src={deleteIcon}
                                alt="menu-icon"
                              />
                            </div>

                            <div className="dropdown-menu-list">
                              <span className="menu-heading">Delete</span>
                              <span className="menu-description">
                                Permanently delete this composition
                              </span>
                            </div>
                          </div>
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>
      {showNewTagModal && (
        <AddNewTagModal
          setNewTagModal={setNewTagModal}
          allScreens={allComposition}
          selected={selected}
        />
      )}
      {deleteModal && <DeleteConfirmation setDeleteModal={setDeleteModal} callbackFunction={handleDelete} text="Are you sure you want to delete?" yes={"Yes Delete"}/>}
    </>
  );
};

export default ListComposition;
