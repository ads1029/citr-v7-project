import { useParams } from "react-router-dom";

const Details = () => {
  const { id } = usePsaarams();
  return <h2>{id}</h2>;
};

export default Details;
