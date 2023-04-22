import React, { useEffect, useState } from "react";
import WebMain from "./main";
import { v4 as uuidv4 } from 'uuid';
const Webplayer = () => {
  const [id, setId] = useState(null);

  useEffect(() => {
    const localId = localStorage.getItem('myId');
    if (localId) {
      setId(localId);
    } else {
      const newId = uuidv4(); // replace this with your own ID generation logic
      localStorage.setItem('myId', newId);
      setId(newId);
    }
  }, []);
  return (
    <React.Fragment>
    {id && <WebMain id={id}/>}
    </React.Fragment>
  );
};

export default Webplayer;
