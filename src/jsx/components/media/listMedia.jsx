import React, { useEffect, useState } from "react";
import { Table, Dropdown } from "react-bootstrap";
import AddNewTagModal from "../../modals/AddNewTagModal";
import downArrow from "../../../img/down-arrow.png";
import menuIcon from "../../../img/menu-icon.png";
import defaultComparisonIcon from "../../../img/default-comparison-icon.png";
import emptyMediaImg from "../../../img/addmedia-empty-img.png";
import nameAvatar from "../../../img/assets-avatar-img.png";
import deleteIcon from "../../../img/delete-icon.png";
import {
  getDatetimeIn12Hours,
  humanReadableFormattedDateString,
} from "../../../utils/UtilsService";
import DeleteConfirmation from "../../modals/DeleteConfirmation";
import { deleteMedia } from "../../../utils/api";

const ListMedia = ({ allMedia,callAllMediaApi }) => {
  const [test, settest] = useState(false);
  const [showNewTagModal, setNewTagModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [selectedMedia, setSelectedMedia] = useState("");
  // use effect
  useEffect(() => {
    setTimeout(() => {
      settest(true);
    }, 2000);
  }, [test]);
console.log("deleteModal", selectedMedia)
  const handleDelete = async () => {
    setDeleteModal(false)
    await deleteMedia(selectedMedia._id)
    callAllMediaApi()
   };
  return (
    <>
      {allMedia !== "" ? (
        <Table responsive className="custom-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Uploaded Date</th>
              <th>Properties</th>
              <th>Tags</th>
              <th>More</th>
            </tr>
          </thead>
          <tbody>
            {allMedia.map((media) => {
              return (
                <tr>
                  <td>
                    <span className="td-content d-flex name-td-content">
                      <span className="name-img mr-2">
                        <img
                          className="media-img img-fluid"
                          src={nameAvatar}
                          alt="media-img"
                        />
                      </span>
                      <span className="name-content d-flex flex-column flex-grow-1">
                        <strong>{media.title}</strong>
                        <span>Added by Gauri Batra</span>
                      </span>
                    </span>
                  </td>
                  <td>{media.type}</td>
                  <td>
                    <span className="td-content">
                      <strong>
                        {humanReadableFormattedDateString(media.uploadDate)}
                      </strong>
                      <span>{getDatetimeIn12Hours(media.uploadDate)}</span>
                    </span>
                  </td>
                  <td>
                    <span className="td-content">
                      <strong>{media.properties.split(",")[1]}</strong>
                      <span>{media.properties.split(",")[0]}</span>
                    </span>
                  </td>
                  <td>
                    {media.tags.map((tag) => {
                      return <span className="my-phone-tag ml-1">{tag}</span>;
                    })}
                    <span
                      className="down-arrow"
                      onClick={() => {
                        setSelectedMedia(media)
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
                                src={defaultComparisonIcon}
                                alt="menu-icon"
                              />
                            </div>
                            <div className="dropdown-menu-list">
                              <span className="menu-heading">
                                Publish on Screen
                              </span>
                              <span className="menu-description">
                                Get to know more about screen info
                              </span>
                            </div>
                          </div>
                        </Dropdown.Item>
                        <Dropdown.Item href="#" className="dropdown-list-item" onClick={()=>{
                              setSelectedMedia(media)
                              setDeleteModal(true)
                            }}>
                          <div className="d-flex">
                            <div className="dropdown-list-icon" >
                              <img
                                className="dropdown-list-img img-fluid"
                                src={deleteIcon}
                                alt="menu-icon"
                              />
                            </div>
                            <div className="dropdown-menu-list">
                              <span className="menu-heading">Delete</span>
                              <span className="menu-description">
                                Get to know more about screen info
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
      ) : (
        <div className="empty-media text-center">
          <div class="empty-media-img mx-auto">
            <img
              className="media-img img-fluid"
              src={emptyMediaImg}
              alt="media-img"
            />
          </div>
          <h3>Add Media</h3>
          <p>
            Upload your favourite images and videos from the local storage
            <br /> of your device
          </p>
        </div>
      )}

      {showNewTagModal && (
        <AddNewTagModal
          selected={selectedMedia}
          setNewTagModal={setNewTagModal}
          
        />
      )}
      {deleteModal && <DeleteConfirmation setDeleteModal={setDeleteModal} callbackFunction={handleDelete}/>}
    </>
  );
};
export default ListMedia;
