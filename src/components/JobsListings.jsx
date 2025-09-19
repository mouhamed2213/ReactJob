// import jobs from '../jobs.json';
import JobsListing from './JobsListing';
import { useEffect, useState } from 'react';

function JobsListings() {
  const apiUrl = 'http://localhost:8000/jobs';

  // set the stae of the jobs
  const [jobs, setJobs] = useState([]);
  // set The loader when fetching data
  const [loader, setLoader] = useState(true);

  // set the effect  hook
  useEffect(() => {
    // fetching data from the enpoind
    const fetchJobs = async () => {
      try {
        const res = await fetch(apiUrl); // fetch data
        const data = await res.json();
        setJobs(data);
        console.log(data);
      } catch (error) {
        console.log('Error while handling data ', error);
      }
    };
    // call the function
    fetchJobs();
  }, []);

  const newJobs = jobs.slice(0, 3);
  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          Browse Jobs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {newJobs.map((job) => (
            <JobsListing key={job.id} job={job} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default JobsListings;
