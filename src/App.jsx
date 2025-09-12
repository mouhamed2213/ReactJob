import  Navbar  from './components/Navbar'
import  Hero  from './components/Hero'
import HomeCard from './components/HomeCard'
import JobsListings from './components/JobsListings'

const App  = () => {
  return (
  <>
  <Navbar />
  <Hero
  title = "hello my first props"
  subsTitle = "find The react Job in my website"
/>
  <HomeCard/>

    {/* Jobs listings */}
    <JobsListings/>

<section className="m-auto max-w-lg my-10 px-6">
  <a
    href="jobs.html"
    className="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
    >View All Jobs</a
  >
</section>

  
  </>      
  )
}

export default App 