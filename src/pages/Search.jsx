import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import ListingItem from "../components/ListingItem";

const Search = () => {
    const navigate = useNavigate();
    const [sidebardata, setSidebardata] = useState({
        searchTerm: '',
        type: 'all',
        parking: false,
        furnished: false,
        offer: false,
        sort: 'created_at',
        order: 'desc',
    });
    const [loading, setLoading] = useState(false);
    const [listings, setListings] = useState([]);
    const [showMore, setShowMore] = useState(false);

    useEffect(() => {
        const urlParams = new URLSearchParams(location.search);
        const searchTermFromUrl = urlParams.get('searchTerm');
        const typeFromUrl = urlParams.get('type');
        const parkingFromUrl = urlParams.get('parking');
        const furnishedFromUrl = urlParams.get('furnished');
        const offerFromUrl = urlParams.get('offer');
        const sortFromUrl = urlParams.get('sort');
        const orderFromUrl = urlParams.get('order');

        if(searchTermFromUrl ||
            typeFromUrl ||
            parkingFromUrl ||
            furnishedFromUrl ||
            offerFromUrl ||
            sortFromUrl ||
            orderFromUrl){
            setSidebardata({
                searchTerm: searchTermFromUrl || '',
                type: typeFromUrl || 'all', 
                parking: parkingFromUrl === 'true' ? true : false,
                furnished: furnishedFromUrl === 'true' ? true : false,
                offer: offerFromUrl === 'true' ? true : false,
                sort: sortFromUrl || 'created_at',
                order: orderFromUrl || 'desc',
            });
        }

        const fetchListings = async () => {
            setLoading(true);
            setShowMore(false);
            const searchQuery = urlParams.toString();
            const res = await fetch(`/api/listing/get?${searchQuery}`);
            const data = await res.json();
            if(data.length > 8) {
                setShowMore(true);
            } else {
                setShowMore(false);
            }
            setListings(data);
            setLoading(false);
        };
            fetchListings();
        }, [location.search]);

    const handleChange = (e) => {
        if (e.target.id === 'all' || e.target.id === 'rent' || e.target.id === 'sale'){
            setSidebardata({...sidebardata, type: e.target.id}); // set type to all, rent or sale
        }
        if (e.target.id === 'searchTerm'){
            setSidebardata({...sidebardata, searchTerm: e.target.value}); // set search term
        }
        if (e.target.id === 'parking' || e.target.id === 'furnished' || e.target.id === 'offer'){
            setSidebardata({...sidebardata, [e.target.id]: e.target.checked || e.target.checked === 'true' ? true : false}); // set parking, furnished or offer
        }
        if (e.target.id === 'sort_order'){
            setSidebardata({...sidebardata, sort: e.target.value.split('_')[0] || 'created_at', order: e.target.value.split('_')[1] || 'desc'}); // set sort and order
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const urlParams = new URLSearchParams();

        urlParams.set('searchTerm', sidebardata.searchTerm);
        urlParams.set('type', sidebardata.type);
        urlParams.set('parking', sidebardata.parking);
        urlParams.set('furnished', sidebardata.furnished);
        urlParams.set('offer', sidebardata.offer);
        urlParams.set('sort', sidebardata.sort);
        urlParams.set('order', sidebardata.order);

        const searchQuery = urlParams.toString(); // converting the params to a string
        navigate(`/search?${searchQuery}`);
    };

    const onShowMoreClick = async () => {

        const numberOfListings = listings.length; // number of listings currently on the page
        const startIndex = numberOfListings; // start index of the next page of listings
        const urlParams = new URLSearchParams(location.search); // search parameters from the url
        urlParams.set('startIndex', startIndex); // set start index to the next page of listings
        const searchQuery = urlParams.toString(); // search query string
        const res = await fetch(`/api/listing/get?${searchQuery}`); // fetch the next page of listings
        const data = await res.json(); // convert the response to json
        if (data.length < 9) { // if there are less than 9 listings, then there are no more listings to show
          setShowMore(false);
        }
        setListings([...listings, ...data]); // update the listings state

      };

  return (
    <div className="grid grid-cols-1 md:grid-cols-12">
    {/* Sidebar (4 Columns on medium screens and larger) */}
    <div className="col-span-3 p-7 border-b-2 md:border-r-2 md:min-h-screen">
      <form onSubmit={handleSubmit} className="flex flex-col w-full gap-6 p-6 border rounded-lg shadow-md">
        {/* Type Section */}
        <div className="flex flex-col gap-4">
          <label className="whitespace-nowrap font-bold text-md mb-2">Type:</label>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <input type="checkbox" id="all" className="w-5 h-5" onChange={handleChange} checked={sidebardata.type === 'all'} />
              <label htmlFor="all" className="text-md">Rent & Sale</label>
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" id="rent" className="w-5 h-5" onChange={handleChange} checked={sidebardata.type === 'rent'} />
              <label htmlFor="rent" className="text-md">Rent</label>
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" id="sale" className="w-5 h-5" onChange={handleChange} checked={sidebardata.type === 'sale'} />
              <label htmlFor="sale" className="text-md">Sale</label>
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" id="offer" className="w-5 h-5" onChange={handleChange} checked={sidebardata.offer} />
              <label htmlFor="offer" className="text-md">Offer</label>
            </div>
          </div>
        </div>
  
        {/* Amenities Section */}
        <div className="flex flex-col gap-4">
          <label className="whitespace-nowrap font-bold text-md mb-2">Amenities:</label>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <input type="checkbox" id="parking" className='w-5 h-5' onChange={handleChange} checked={sidebardata.parking} />
              <label htmlFor="parking" className="text-md">Parking spot</label>
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" id="furnished" className='w-5 h-5' onChange={handleChange} checked={sidebardata.furnished} />
              <label htmlFor="furnished" className="text-md">Furnished</label>
            </div>
          </div>
        </div>
  
        {/* Sort Section */}
        <div className="flex flex-col gap-4">
          <label className="font-bold text-md mb-2">Sort:</label>
          <select 
            onChange={handleChange}
            defaultValue={'created_at_desc'}
            name="sort" 
            id="sort_order" 
            className="border border-gray-300 rounded-md p-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="regularPrice_desc">Price high to low</option>
            <option value="regularPrice_asc">Price low to high</option>
            <option value="createdAt_desc">Latest</option>
            <option value="createdAt_asc">Oldest</option>
          </select>
        </div>
  
        {/* Search Button */}
        <button 
          className="bg-slate-700 text-white p-3 rounded-md uppercase font-bold tracking-wide shadow-md hover:shadow-lg transition-all duration-200 ease-in-out transform hover:scale-105"
        >
          Search
        </button>
      </form>
    </div>
  
    {/* Results (8 Columns on medium screens and larger) */}
    <div className="col-span-9 mb-3 flex-1">
      <h1 className="text-xl font-semibold p-3 text-slate-700">Results (10)</h1>
      <div className="p-7 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {!loading && Array.isArray(listings) && listings.length === 0 && (
          <p className="text-xl text-slate-700">No listing found!</p>
        )}
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((listing) => (
          <ListingItem key={listing._id} listing={listing} />
        ))}
        {showMore && (
          <button onClick={onShowMoreClick} className="text-green-700 hover:underline p-7 text-center w-full">
            Show More
          </button>
        )}
      </div>
    </div>
  </div>
  
  )
};

export default Search