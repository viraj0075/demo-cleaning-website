const ContainerLayout = ({ children, className = '', ...props }) => {
  return (
    <div className={`max-w-7xl mx-auto px-2 md:px-4 w-full ${className}`} {...props}>
      {children}
    </div>
  );
};

export default ContainerLayout;
