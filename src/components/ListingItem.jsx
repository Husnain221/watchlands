import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { MdLocationOn } from 'react-icons/md';
import { FaBath, FaBed } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react'; // Swiper React components
import 'swiper/css'; // Import Swiper styles
import 'swiper/css/pagination'; // Optional: for pagination (dots)

// Import any Swiper modules you need (optional)
import { Pagination } from 'swiper/modules'; // For adding pagination/dots

const ListingItem = () => {
  const listing = {
    _id: '12345',
    imageUrls: [
      'https://media.zameen.com/thumbnails/255018033-400x300.jpeg',
      'https://media.zameen.com/thumbnails/255020909-400x300.jpeg',
      'https://media.zameen.com/thumbnails/255029265-400x300.jpeg'
    ],
    name: 'Modern Apartment in Downtown',
    address: '123 Main St, Downtown City, CA',
    description: 'A beautiful and modern apartment located in the heart of downtown with stunning city views, close to all amenities.',
    offer: true,
    discountPrice: 2200,
    regularPrice: 2500,
    type: 'rent',
    bedrooms: 2,
    bathrooms: 2
  };
  
  return (
    <div className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden rounded-xl w-full  sm:max-w-[330px]">
      <Link to={`/listing/${listing._id}`} className="block">
        <div className="relative group">
          {/* Swiper Slider */}
          <Swiper
            spaceBetween={10}
            slidesPerView={1}
            pagination={{ clickable: true }}
            className="rounded-t-xl"
            modules={[Pagination]} // Optional: for pagination (dots)
          >
            {listing.imageUrls.map((url, index) => (
              <SwiperSlide key={index}>
                <img 
                  src={url}
                  alt={`listing cover ${index + 1}`} 
                  className='h-[320px] sm:h-[220px] w-full object-cover rounded-t-xl transform group-hover:scale-105 transition-transform duration-300 ease-in-out'
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className='p-4 space-y-3'>
          <p className='text-lg font-semibold text-gray-900 truncate'>{listing.name}</p>
          <div className='flex items-center gap-2'>
            <MdLocationOn className='h-5 w-5 text-green-500' />
            <p className='text-sm text-gray-500 truncate'>{listing.address}</p>
          </div>
          <p className='text-sm text-gray-600 line-clamp-2'>{listing.description}</p>
          <p className='text-xl font-bold text-gray-800'>
            ${listing.offer ? listing.discountPrice.toLocaleString('en-US') : listing.regularPrice.toLocaleString('en-US')}
            {listing.type === 'rent' && ' / month'}
          </p>
          <div className='flex items-center gap-6 mt-2'>
            <div className='flex items-center text-gray-700 text-sm'>
              <FaBed className='text-lg mr-2 text-slate-500' />
              {listing.bedrooms > 1 ? `${listing.bedrooms} Beds` : `${listing.bedrooms} Bed`}
            </div>
            <div className='flex items-center text-gray-700 text-sm'>
              <FaBath className='text-lg mr-2 text-slate-500' />
              {listing.bathrooms > 1 ? `${listing.bathrooms} Baths` : `${listing.bathrooms} Bath`}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ListingItem;
