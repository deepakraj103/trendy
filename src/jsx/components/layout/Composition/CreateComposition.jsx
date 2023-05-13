import { useLocation } from "react-router-dom";
import CommonComposition from "./Common";

const CreateComposition = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get('id');
 return <CommonComposition type="create" layoutId={id}/>
};

export default CreateComposition;
