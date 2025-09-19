import { useState } from 'react';
import { FaMapMarked } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
// this component tak as props job

function JobsListing({ job }) {
  const [fullDescription, setFullDescription] = useState(false);
  let description = job.description;

  if (!fullDescription) {
    description = description.substring(0, 90) + '...';
  }

  return (
    <div className="bg-white rounded-xl shadow-md relative">
      <div className="p-4">
        <div className="mb-6">
          <div className="text-gray-600 my-2">{job.type}</div>
          <h3 className="text-xl font-bold"> {job.title} </h3>
        </div>

        <div className="mb-5"> {description}</div>
        <button
          className="text-indigo-500 mb-5 hover:text:indigo-600 cursor-pointer"
          onClick={() => {
            setFullDescription((prevValue) => !prevValue);
          }}
        >
          {fullDescription ? 'less' : 'More'}
        </button>
        <h3 className="text-indigo-500 mb-2"> {job.salary}</h3>

        <div className="border border-gray-100 mb-5"></div>

        <div className="flex flex-col lg:flex-row justify-between mb-4">
          <div className="inline-flex  text-orange-700 mb-3 gap-2">
            {job.location}
            <FaMapMarked />
          </div>
          <NavLink
            to={`job/${job.id}`}
            className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
          >
            Read More
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default JobsListing;
