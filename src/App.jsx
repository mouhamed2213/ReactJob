import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HomeCard from './components/HomeCard';
import JobsListings from './components/jobsListings';
import ViewAllJobs from './components/ViewAllJobs';
import { Router } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Navbar />
      <Hero
        title="hello my first props"
        subsTitle="find The react Job in my website"
      />
      <HomeCard />

      {/* Jobs listings */}
      <JobsListings />
      <ViewAllJobs />
    </>
  );
};

export default App;
