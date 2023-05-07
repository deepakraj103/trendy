import React from "react";
import { Table } from "react-bootstrap";

import avatarImg from "../../../img/assets-avatar-img.png";
import editBtnImg from "../../../img/edit-btn.png";
import deleteBtnImg from "../../../img/delete-btn.png";
import { BASE_URL } from "../../../utils/api";
const ZoneInfoTable = ({ compositions,setCompositions }) => {
  const videoMetaDuration = (media)=>{
    return JSON.parse(media.properties).length.toFixed(0)/60
   }

  const handleChange = (event,composition) => {
    const newValue = event.target.value.replace(/[^\d]/g, '');
      setCompositions((prev) => {      
        const updateMedia = prev.map((val)=>{
            if(val.id === composition.id){
              val.duration = newValue;
            }
            return val;
        });
        return [...updateMedia];
      });
  };

  const Duration = (composition)=>{
    return(  <div className="tag-container mediaDUrationTag"> <input onChange={(event)=>{ handleChange(event,composition)}}  value={Number(composition.duration).toFixed(0)} disabled={composition.type === 'video'}/><span>sec</span></div>)
  }
  const TotalDuration = ()=>{
    let total  =  0;
    compositions.forEach(composition => {
      total += Number(composition.duration);
    });
    return total.toFixed(0);
  }
  const removeComposition =(composition)=>{
    setCompositions((prev) => {      
      const updateMedia = prev.filter((val)=> val.id !== composition.id);
      return [...updateMedia];
    });
  }
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
                  <span className="duration">Duration : {TotalDuration()} sec</span>
                </span>
              </span>
            </th>
          </tr>
        </thead>
        <tbody>
          {compositions.map((composition, index) => {
            return (
              <tr key={composition.id}>
                <td>{index + 1}.</td>
                <td>
                    <span className="td-content d-flex name-td-content">
                      <span className={`name-img mr-2  ${composition.type === "video" && "videotableName"}`}>
                      {composition.type === "image" && <img
                          className="media-img img-fluid"
                          src={`${BASE_URL}${composition.title}`}
                          alt="media-img"
                        />}
                         {composition.type === "video" && composition.duration.toFixed(0)/60}
                      </span>
                      <span className="name-content d-flex flex-column flex-grow-1">
                        <strong>{composition.title.split("/")[composition.title.split("/").length -1]}</strong>
                        <span>{composition.createdBy.name}</span>
                      </span>
                    </span>
                  </td>
                <td style={{ width: "180px" }}>
                { Duration(composition)}
                </td>
                <td>
                  <span className="layout-edit-btn mr-2 ">
                    <img className="edit-icon cursorPointer" src={editBtnImg} alt="search" />
                  </span>
                  <span className="layout-edit-btn " onClick={()=>{removeComposition(composition)}}>
                    <img
                      className="edit-icon cursorPointer"
                      src={deleteBtnImg}
                      alt="search"
                    />
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

export default ZoneInfoTable;
