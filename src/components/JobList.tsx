import React from 'react';
import {
  MapPinIcon,
  BriefcaseIcon,
  ThumbsUpIcon,
  MessageCircleIcon,
  ShareIcon,
} from 'lucide-react';
import { useSearch } from '../context/SearchContext';

const jobs = [
  {
    id: 1,
    title: 'Senior Frontend Developer',
    company: 'TechCorp',
    logo: 'https://source.unsplash.com/random/100x100?tech',
    description:
      'We are looking for an experienced Frontend Developer to join our dynamic team. The ideal candidate will have a strong background in React and modern web technologies.',
    location: 'San Francisco, CA',
    type: 'Full-time',
    category: 'Technology',
    postedAt: '2 days ago',
    likes: 24,
    comments: 5,
  },
  {
    id: 2,
    title: 'UX Designer',
    company: 'DesignHub',
    logo: 'https://source.unsplash.com/random/100x100?design',
    description:
      'Join our creative team as a UX Designer. Were looking for someone passionate about creating intuitive and beautiful user experiences.',
    location: 'New York, NY',
    type: 'Contract',
    category: 'Design',
    postedAt: '1 week ago',
    likes: 18,
    comments: 3,
  },
  {
    id: 3,
    title: 'Data Scientist',
    company: 'DataTech',
    logo: 'https://source.unsplash.com/random/100x100?data',
    description:
      'DataTech is seeking a skilled Data Scientist to help us uncover insights from complex datasets. Experience with machine learning and big data technologies is a plus.',
    location: 'Remote',
    type: 'Full-time',
    category: 'Technology',
    postedAt: '3 days ago',
    likes: 32,
    comments: 7,
  },
];

const JobList: React.FC = () => {
  const { searchTerm, location, category } = useSearch();

  const filteredJobs = jobs.filter(job => {
    const matchesSearch = !searchTerm || 
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesLocation = !location ||
      job.location.toLowerCase().includes(location.toLowerCase());
    
    const matchesCategory = !category ||
      job.category === category;

    return matchesSearch && matchesLocation && matchesCategory;
  });

  return (
    <div className="space-y-6">
      {filteredJobs.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-gray-500">No jobs found matching your criteria.</p>
        </div>
      ) : (
        filteredJobs.map((job) => (
          <div
            key={job.id}
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300"
          >
            <div className="flex items-center mb-4">
              <img
                src={job.logo}
                alt={`${job.company} logo`}
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  {job.company}
                </h3>
                <p className="text-sm text-gray-500">{job.postedAt}</p>
              </div>
            </div>
            <h4 className="text-lg font-semibold text-indigo-600 mb-2">
              {job.title}
            </h4>
            <p className="text-gray-600 mb-4">{job.description}</p>
            <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
              <div className="flex items-center">
                <MapPinIcon className="w-4 h-4 mr-1" />
                {job.location}
              </div>
              <div className="flex items-center">
                <BriefcaseIcon className="w-4 h-4 mr-1" />
                {job.type}
              </div>
            </div>
            <div className="flex justify-between items-center border-t border-gray-200 pt-4">
              <div className="flex space-x-4">
                <button className="flex items-center text-gray-600 hover:text-indigo-600">
                  <ThumbsUpIcon className="w-5 h-5 mr-1" />
                  {job.likes}
                </button>
                <button className="flex items-center text-gray-600 hover:text-indigo-600">
                  <MessageCircleIcon className="w-5 h-5 mr-1" />
                  {job.comments}
                </button>
                <button className="flex items-center text-gray-600 hover:text-indigo-600">
                  <ShareIcon className="w-5 h-5 mr-1" />
                  Share
                </button>
              </div>
              <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition duration-300">
                Apply Now
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default JobList;