const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
      {children}
    </div>
  );
};

export default Container;
