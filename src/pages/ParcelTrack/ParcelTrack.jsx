import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router';
import useAxios from '../../hooks/useAxios';

const ParcelTrack = () => {
  const { trackingId } = useParams();
  const axiosInstance = useAxios();

  const { data: tracking = [] } = useQuery({
    queryKey: ['tracking', trackingId],
    queryFn: async () => {
      const res = await axiosInstance.get(`/trackings/${trackingId}/logs`)
      return res.data;
    }
  })

  return (
    <div className='p-8 bg-white rounded-2xl mb-10'>
      <h2 className='text-4xl font-bold'>Track your Consignment</h2>
      <p className='py-3'>Now you can easily track your consignment</p>
      <div className='py-8 border-b border-gray-200'>
        <label className="input  rounded-l-full rounded-r-full">
          <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input type="search" className="grow" placeholder="Search" name='location' />
         
        </label>
      </div>



      <div className='flex md:flex-row flex-col justify-around'>
        <div className='bg-[#F0F3F6] rounded-4xl mt-5 p-10'>
          <h2 className=' text-4xl text font-bold '>Product details</h2>
          <h2 className='text-xl pt-5 font-medium'>Track your package : {trackingId}</h2>
          <p className='pt-3 font-medium'>Logs so for : {tracking.length}</p>
        </div>

        <ul className="timeline  pr-20  rounded-4xl mt-5 bg-[#F0F3F6] p-5 timeline-vertical">

          <h2 className=' md:text-4xl text-2xl text-center font-bold py-5'>Tracking Updates</h2>
          {tracking.map(log => <li key={log._id}>
            <div className="timeline-start ">
              {new Date(log.createdAt).toLocaleDateString()}
            </div>
            <div className="timeline-middle px-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 text-green-400  w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end">
              <span className='text-xl'>{log.details}</span>
            </div>
            <hr />
          </li>)}




        </ul>
      </div>


    </div>
  );
};

export default ParcelTrack;