const ShareIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      className={className}
      stroke='currentColor'
      fill='none'
      strokeWidth='2'
      viewBox='0 0 24 24'
      strokeLinecap='round'
      strokeLinejoin='round'
      height='1em'
      width='1em'
    >
      <circle cx='18' cy='5' r='3'></circle>
      <circle cx='6' cy='12' r='3'></circle>
      <circle cx='18' cy='19' r='3'></circle>
      <line x1='8.59' y1='13.51' x2='15.42' y2='17.49'></line>
      <line x1='15.41' y1='6.51' x2='8.59' y2='10.49'></line>
    </svg>
  );
};

export default ShareIcon;
