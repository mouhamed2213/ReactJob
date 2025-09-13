import JobsListings from '../components/jobsListings';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
function jobs() {
  return (
    <>
      <Navbar />
      <Hero title="All Jobs" subsTitle="Find a Job" />

      {/* Job Listings  */}
      <JobsListings />
    </>
  );
}

export default jobs;
