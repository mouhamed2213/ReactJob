import React from 'react';
// import Navbar from './components/Navbar';
import Hero from '../components/Hero';
import HomeCard from '../components/HomeCard';
import JobsListings from '../components/jobsListings';
import ViewAllJobs from '../components/ViewAllJobs';

const HomePage = () => {
  return (
    <>
      <Hero title="Welcome To our React website" subsTitle="goo luck" />
      <HomeCard />
      <JobsListings />
      <ViewAllJobs />
    </>
  );
};

export default HomePage;
