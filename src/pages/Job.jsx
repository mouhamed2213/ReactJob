import { use, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import JobsListing from '../components/JobsListing';

const Job = () => {
  let { id } = useParams();
  const [job, setJob] = useState(null);
  const [isLoding] = useState(false);

  useEffect(() => {
    const getOnJob = async () => {
      try {
        const res = await fetch(`http://localhost:8000/jobs/${id}`);
        if (!res.ok) {
          throw new Error('pas de job trouvee');
        }
        const data = await res.json();
        setJob(data);
        console.log(data);
      } catch (error) {
        console.log('Erreor while getting the selected job ', error);
      }
    };
    getOnJob();
  }, [id]);

  if (!job) {
    return <h1> Pas de job trouver </h1>;
  }

  if (!isLoding) {
    <h2> Chargement en cour ..... </h2>;
  }

  return <>{<JobsListing key={job.id} job={job} />}</>;
};
export default Job;
