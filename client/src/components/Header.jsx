import { FaSearch } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

export default function Header() {
  const { currentUser } = useSelector((state) => state.user);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set('searchTerm', searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get('searchTerm');
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]);
  return (
    <header className='bg-teal-750 shadow-md drop-shadow-lg mb-7 '>
      <div className='flex justify-between items-center max-w-7xl mx-auto py-2'>
        <Link to='/'>
          <h1 className='logo h-100 cursor-pointer'>
            <img className="rounded-xl" src="./img/Logo.svg" alt="" />
          </h1>
        </Link>
        
        <ul className='flex gap-10'>
          <Link to='/'>
            <li className='hidden sm:inline text-teal-100 hover:underline'>
              Home
            </li>
          </Link>
          
          <Link to='/laundry'>
            <li className='hidden sm:inline text-teal-100 hover:underline'>
              Laundry
            </li>
          </Link>
          <Link to='/mess'>
            <li className='hidden sm:inline text-teal-100 hover:underline'>
              Mess
            </li>
          </Link>
          <Link to='/events'>
            <li className='hidden sm:inline text-teal-100 hover:underline'>
              Events
            </li>
          </Link>
          <Link to='/profile'>
            {currentUser ? (
              <img
                className='rounded-full h-7 w-7 object-cover'
                src={currentUser.avatar}
                alt='profile'
              />
            ) : (
              <li className=' text-teal-100 hover:underline'> Sign in</li>
            )}
          </Link>
          <Link to='/about'>
            <li className='hidden sm:inline text-teal-100 hover:underline'>
              Team
            </li>
          </Link>
        </ul>
      </div>
    </header>
  );
}
