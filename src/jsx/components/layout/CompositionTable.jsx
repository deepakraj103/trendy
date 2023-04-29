import React from "react";
import { Table } from "react-bootstrap";
import downArrow from "../../../img/down-arrow.png";
import avatarImg from "../../../img/assets-avatar-img.png";

const CompositionTable = () => {
  return (
    <>
      <Table responsive className="custom-table screen-table layout-table h-100">
        <thead>
          <tr>
            <th>Media</th>
            <th>Type</th>
            <th>Tags</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <span class="td-content d-flex name-td-content">
                <span class="name-img mr-2">
                  <img className="search-icon" src={avatarImg} alt="search" />
                </span>
                <span class="name-content d-flex flex-column flex-grow-1">
                  <strong>file_1681887316427.png</strong>
                  <span>Test Vendor</span>
                </span>
              </span>
            </td>
            <td>
              <span className="d-flex align-items-center">
                <span className="td-content">
                  <strong>Image</strong>
                  <span>700*610px</span>
                </span>
              </span>
            </td>
            <td style={{ width: "180px" }}>
              <span className="tag-container">My Tag</span>
            </td>
          </tr>
          <tr>
            <td>
              <span class="td-content d-flex name-td-content">
                <span class="name-img mr-2">
                  <img className="search-icon" src={avatarImg} alt="search" />
                </span>
                <span class="name-content d-flex flex-column flex-grow-1">
                  <strong>file_1681887316427.png</strong>
                  <span>Test Vendor</span>
                </span>
              </span>
            </td>
            <td>
              <span className="d-flex align-items-center">
                <span className="td-content">
                  <strong>Image</strong>
                  <span>700*610px</span>
                </span>
              </span>
            </td>
            <td style={{ width: "180px" }}>
              <span className="tag-container">My Tag</span>
            </td>
          </tr>
        </tbody>
      </Table>
    </>
  );
};

export default CompositionTable;
