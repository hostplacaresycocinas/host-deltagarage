const SearchIcon = ({ className }) => {
  return (
    <svg
      className={` ${className}`}
      width='24'
      height='25'
      viewBox='0 0 24 25'
      fill='#ffff'
    >
      <path
        d='M11.2252 18.9799C13.28 18.9799 15.2507 18.1636 16.7037 16.7106C18.1566 15.2577 18.9729 13.287 18.9729 11.2322C18.9729 9.17737 18.1566 7.20672 16.7037 5.75374C15.2507 4.30077 13.28 3.4845 11.2252 3.4845C9.17041 3.4845 7.19976 4.30077 5.74679 5.75374C4.29381 7.20672 3.47754 9.17737 3.47754 11.2322C3.47754 13.287 4.29381 15.2577 5.74679 16.7106C7.19976 18.1636 9.17041 18.9799 11.2252 18.9799Z'
        stroke='currentColor'
        strokeWidth='1.44'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M20.5224 21.5155L16.5781 17.5712'
        stroke='currentColor'
        strokeWidth='1.44'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default SearchIcon;
