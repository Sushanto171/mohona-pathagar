const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-6 mt-12 border-t dark:border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
        
        <p className="text-sm">&copy; {new Date().getFullYear()} Mohona Pathagar. All rights reserved.</p>

        <div className="flex space-x-4 text-sm">
          <a href="/books" className="hover:underline">Books</a>
          <a href="/borrow-summary" className="hover:underline">Borrow Summary</a>
          <a href="/about" className="hover:underline">About</a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
