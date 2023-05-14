import { useLocation } from "react-router-dom";
import useSWR from 'swr'
import CommonComposition from "./Common";
import { getCompositionById } from "../../../../utils/api";

const EditComposition = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get('id');
  const fetcher = (url) => getCompositionById(url);
  const { data: composition  } = useSWR(id ? `/vendor/layouts/composition?compositionId=${id}` : null, fetcher);
  const layout = composition ? composition.layout : {};
  return (<>{composition && <CommonComposition type="edit" layout={layout} composition={composition}/>}</>)
};

export default EditComposition;
