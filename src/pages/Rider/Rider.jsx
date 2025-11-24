import React from 'react';
import { useForm, useWatch } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useLoaderData } from 'react-router';
import riderImage from '../../assets/agent-pending.png';
import Swal from 'sweetalert2';

const Rider = () => {
  const { register, handleSubmit, control } = useForm();
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const serviceCenters = useLoaderData();
  const regionsDuplicate = serviceCenters.map(c => c.region);
  const regions = [...new Set(regionsDuplicate)];

  const districtsByRegion = (region) => {
    const regionDistricts = serviceCenters.filter(c => c.region === region);
    return regionDistricts.map(d => d.district);
  };

  const riderRegion = useWatch({ control, name: 'region' });

  const handleRiderApplication = (data) => {
    axiosSecure.post('/riders', data).then(res => {
      if (res.data.insertedId) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your application has been submitted. We will reach to you in 1-4 days",
          showConfirmButton: false,
          timer: 2000
        });
      }
    });
  };

return (
  <div className="flex justify-center py-12 px-4 w-full">
    {/* Make the card full width with some max width for large screens */}
    <div className="bg-white rounded-[30px] shadow-md w-full md:max-w-[1200px] p-8 md:p-16">
      {/* Header */}
      <h2 className="text-[32px] md:text-[36px] font-extrabold text-secondary">
        Be a Rider
      </h2>
      <p className="text-gray-500 mt-2 text-sm md:text-base max-w-[600px]">
        Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.
      </p>

      {/* Main content: form left, image right */}
      <div className="flex flex-col md:flex-row mt-10 gap-12">
        {/* Form Column */}
        <form
          onSubmit={handleSubmit(handleRiderApplication)}
          className="flex-1 space-y-4"
        >
          <h4 className="text-xl font-bold text-secondary">
            Tell us about yourself
          </h4>

          {/* Inputs */}
          <input
            type="text"
            {...register('name')}
            defaultValue={user?.displayName}
            placeholder="Your Name"
            className="w-full border border-[#D9DEE3] rounded-lg p-3 text-sm placeholder-gray-400"
          />
          <input
            type="text"
            {...register('license')}
            placeholder="Driving License Number"
            className="w-full border border-[#D9DEE3] rounded-lg p-3 text-sm placeholder-gray-400"
          />
          <input
            type="text"
            {...register('email')}
            defaultValue={user?.email}
            placeholder="Your Email"
            className="w-full border border-[#D9DEE3] rounded-lg p-3 text-sm placeholder-gray-400"
          />
          <select
            {...register('region')}
            defaultValue=""
            className="w-full border border-[#D9DEE3] rounded-lg p-3 text-sm text-gray-500"
          >
            <option disabled value="">Select your Region</option>
            {regions.map((r, i) => (
              <option key={i} value={r}>{r}</option>
            ))}
          </select>
          <select
            {...register('district')}
            defaultValue=""
            className="w-full border border-[#D9DEE3] rounded-lg p-3 text-sm text-gray-500"
          >
            <option disabled value="">Select your District</option>
            {districtsByRegion(riderRegion).map((d, i) => (
              <option key={i} value={d}>{d}</option>
            ))}
          </select>
          <input
            type="text"
            {...register('nid')}
            placeholder="NID"
            className="w-full border border-[#D9DEE3] rounded-lg p-3 text-sm placeholder-gray-400"
          />
          <input
            type="text"
            {...register('phone')}
            placeholder="Phone Number"
            className="w-full border border-[#D9DEE3] rounded-lg p-3 text-sm placeholder-gray-400"
          />
          <input
            type="text"
            {...register('bike')}
            placeholder="Bike Brand Model and Year"
            className="w-full border border-[#D9DEE3] rounded-lg p-3 text-sm placeholder-gray-400"
          />
          <input
            type="text"
            {...register('bikeReg')}
            placeholder="Bike Registration Number"
            className="w-full border border-[#D9DEE3] rounded-lg p-3 text-sm placeholder-gray-400"
          />
          <input
            type="text"
            {...register('about')}
            placeholder="Tell Us About Yourself"
            className="w-full border border-[#D9DEE3] rounded-lg p-3 text-sm placeholder-gray-400"
          />

          <button
            type="submit"
            className="w-full bg-[#C6F24A] hover:bg-[#B4E83B] rounded-lg py-3 text-black font-semibold transition"
          >
            Submit
          </button>
        </form>

        {/* Image Column */}
        <div className="flex-1 flex justify-center md:justify-end">
          <img
            src={riderImage}
            alt="Rider Illustration"
            className="w-[360px] md:w-[360px] object-contain"
          />
        </div>
      </div>
    </div>
  </div>
);

};

export default Rider;
