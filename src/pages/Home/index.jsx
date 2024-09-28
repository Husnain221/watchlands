import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import SwiperCore from 'swiper';
import { Navigation } from 'swiper/modules';
import ListingItem from '../../components/ListingItem';
import MapSection from '../../components/MapSection';

const Home = () => {
  const [offerListings, setOfferListings] = useState([]);
  const listings = [
    {
      id: 1,
      name: 'Listing 1',
      description: 'This is a beautiful place.',
      location: { lat: 51.509865, lng: -0.118092 },
    },
    {
      id: 2,
      name: 'Listing 2',
      description: 'Amazing location with great views.',
      location: { lat: 51.517622, lng: -0.101599 },
    },
    {
      id: 3,
      name: 'Listing 3',
      description: 'Cozy and affordable.',
      location: { lat: 51.507351, lng: -0.127758 },
    },
    {
      id: 4,
      name: 'Listing 4',
      description: 'Close to the city center.',
      location: { lat: 51.512344, lng: -0.090985 },
    },
    {
      id: 5,
      name: 'Listing 5',
      description: 'Perfect for families.',
      location: { lat: 51.503324, lng: -0.119543 },
    },
    // Add more listings here
  ];
  SwiperCore.use([Navigation]);


  useEffect(() => {
    const fetchOfferListings = async () => {
      try {
        const res = await fetch('/api/listing/get?offer=true&limit=4');
        const data = await res.json();
        setOfferListings(data);
        fetchRentListings();
      } catch (error) {
        console.log(error);
      }
    }

    const fetchRentListings = async () => {
      try {
        const res = await fetch('/api/listing/get?type=rent&limit=4');
        const data = await res.json();
        setRentListings(data);
        fetchSaleListings();
      } catch (error) {
        console.log(error);
      }
    }

    const fetchSaleListings = async () => {
      try {
        const res = await fetch('/api/listing/get?type=sale&limit=4');
        const data = await res.json();
        setSaleListings(data);
      } catch (error) {
        console.log(error); 
      }
    }

    fetchOfferListings();
  }, []);

  return (
    <div>
      {/* top */}

      <div className="flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto">
        <h1 className='text-slate-700 font-bold text-3xl lg:text-6xl capitalize'>
          Find your next <span className='text-slate-500'>perfect</span> <br />home with ease
        </h1>
        <div className="text-gray-400 text-xs sm:text-sm ">
          Watch Lands is the best place to find your next home. <br />
          We have a wide range of listings from all over the country.
        </div>
        <Link to={'/search'} className='text-x sm:text-sm text-blue-800 font-bold hover:underline'>
          Let&apos;s get started..
        </Link>
      </div>

      <MapSection listings={listings} />


      {/* swiper */}
      <Swiper navigation>
        {
          offerListings && offerListings.length > 0 && offerListings.map((listing) => (
            <SwiperSlide key={listing._id}>
              <div style={{background: `url(${listing.imageUrls[0]}) center no-repeat`, backgroundSize: "cover"}} className='h-[500px]'>

              </div>
            </SwiperSlide>
          ))
        }
      </Swiper>



      {/* listing results */}
      <div className='max-w-6xl mx-auto p-3 flex flex-col gap-8 my-10'>
          <div className=''>
            <div className='my-3'>
              <h2 className='text-2xl font-semibold text-slate-600'>Recent Offers</h2>
              <Link to={'/search?offer=true'} className='text-sm text-blue-800 hover:underline'>
                Show more
              </Link>
            </div>
            <div className='flex flex-wrap gap-4'>
              {
                [1,2,3,4,5,6,7].map(() => (
                  <ListingItem  />
                ))
              }
            </div>
          </div>

     
          <div className=''>
            <div className='my-3'>
              <h2 className='text-2xl font-semibold text-slate-600'>Recent Homes for Rent</h2>
              <Link to={'/search?type=rent'} className='text-sm text-blue-800 hover:underline'>
                Show more
              </Link>
            </div>
            <div className='flex flex-wrap gap-4'>
              {
                [1,2,3,4,5,6].map((listing) => (
                  <ListingItem />
                ))
              }
            </div>
          </div>

          <div className=''>
            <div className='my-3'>
              <h2 className='text-2xl font-semibold text-slate-600'>Recent Homes for Sale</h2>
              <Link to={'/search?type=sale'} className='text-sm text-blue-800 hover:underline'>
                Show more
              </Link>
            </div>
            <div className='flex flex-wrap gap-4'>
              {
                [1,2,3].map((listing) => (
                  <ListingItem />
                ))
              }
            </div>
          </div>
      </div>
    </div>
  )
}

export default Home