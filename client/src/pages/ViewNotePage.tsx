import { useParams } from 'react-router-dom';
import ViewNote from '../components/ViewNote';

const ViewNotePage = () => {
  const { id } = useParams();

  if (!id) {
    return <div>Error: Note ID not found in URL.</div>;
  }

  return (
    <div>
      ViewNote {id}
      <ViewNote id={id} />
    </div>
  );
};

export default ViewNotePage;
