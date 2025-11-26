const Button = ({ children, variant = 'primary', onClick, className = '', ...props }) => {
  const baseClasses = 'px-8 py-3 rounded-lg font-semibold transition-all duration-300 ease-out';
  
  const variants = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    outline: 'btn-outline',
  };

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
