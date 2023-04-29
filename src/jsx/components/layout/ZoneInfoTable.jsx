import React from "react";
import { Table } from "react-bootstrap";
import downArrow from "../../../img/down-arrow.png";
import avatarImg from "../../../img/assets-avatar-img.png";
import editBtnImg from "../../../img/edit-btn.png";
import deleteBtnImg from "../../../img/delete-btn.png";

const ZoneInfoTable = () => {
  return (
    <>
      <Table
        responsive
        className="custom-table screen-table layout-table h-100"
      >
        <thead>
          <tr>
            <th colSpan={4}>
              <span className="d-flex flex-wrap">
                <span className="yellow-box"></span>
                <span className="zone-section d-flex flex-column">
                  <span className="zone">Zone 1</span>
                  <span className="duration">Duration : 10 sec</span>
                </span>
              </span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1.</td>
            <td>
              <span class="td-content d-flex name-td-content">
                <span class="name-img mr-2">
                  <img className="search-icon" src={avatarImg} alt="search" />
                </span>
                <span class="name-content d-flex flex-column flex-grow-1">
                  <strong>My_image_name</strong>
                  <span>Added by Gauri Batra</span>
                </span>
              </span>
            </td>
            <td style={{ width: "180px" }}>
              <span className="tag-container">10sec</span>
            </td>
            <td>
              <span className="layout-edit-btn mr-2">
                <img className="edit-icon" src={editBtnImg} alt="search" />
              </span>
              <span className="layout-edit-btn">
                <img className="edit-icon" src={deleteBtnImg} alt="search" />
              </span>
            </td>
          </tr>
        </tbody>
      </Table>
    </>
  );
};

export default ZoneInfoTable;
