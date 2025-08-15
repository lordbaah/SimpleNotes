import { useParams } from 'react-router-dom';
import ViewNote from '../components/ViewNote';

const ViewNotePage = () => {
  const { id } = useParams();

  return (
    <div>
      ViewNote {id}
      <ViewNote id={id} />
    </div>
  );
};

export default ViewNotePage;
