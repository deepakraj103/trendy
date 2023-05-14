import React, { useState } from "react";
import { Table } from "react-bootstrap";
import AddNewTagModal from "../../../modals/AddNewTagModal";
import downArrow from "../../../../img/down-arrow.png";

import { deleteCompositionById } from "../../../../utils/api";
import DeleteConfirmation from "../../../modals/DeleteConfirmation";
import CompositionActions from "./CompositionActions";

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
                    <CompositionActions composition={composition} mutate={mutate} setSelected={setSelected} setDeleteModal={setDeleteModal}/>
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
