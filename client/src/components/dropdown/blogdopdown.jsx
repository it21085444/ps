import { useState } from 'react';

// Dropdown component
const Dropdown = ({ items }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative text-right">
      <button
        id="dropdownDefaultButton"
        onClick={toggleDropdown}
        className="text-gray-500 border-1 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium text-sm px-5 py-2.5 text-center inline-flex items-center dark:border-1 dark:hover:bg-red-200 dark:focus:ring-red-200"
        type="button"
      >
        Sort by :
        <svg
          className={`w-2.5 h-2.5 ms-3 transform ${isOpen ? 'rotate-180' : ''}`}
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <div
          id="dropdown"
          className="z-10 absolute right-0 bg-white divide-y divide-red-100 text-left shadow w-44 dark:bg-red-200"
        >
          <ul className="py-2 text-sm text-gray-500 dark:text-gray-500" aria-labelledby="dropdownDefaultButton">
            {items.map((item) => (
              <li key={item.id}>
                <a href={item.href} className="block px-4 py-2 hover:bg-red-200 dark:hover:bg-red-200 dark:hover:text-white">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
