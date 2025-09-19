import JobsListing from '../components/JobsListing';
import Hero from '../components/Hero';
import { useEffect, useState } from 'react';

function Jobs() {
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

  return (
    <>
      <Hero title="All Jobs" subsTitle="Find a Job" />
      {/* Job Listings  */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {jobs.map((job) => (
          <JobsListing key={job.id} job={job} />
        ))}
      </div>
    </>
  );
}

export default Jobs;
