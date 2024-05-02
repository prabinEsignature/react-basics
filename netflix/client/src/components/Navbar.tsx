const tabs = [
  "Home",
  "Films",
  "New & Popular",
  "My List",
  "Browse by Languages",
];

const Navbar = () => {
  return (
    <nav className="w-full fixed z-40">
      <div className="px-16 py-6 flex items-center">
        <img
          className="h-8"
          src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
          alt="logo"
        />
        <div className="flex gap-7 ml-8">
          {tabs.map((tab) => (
            <div
              key={tab}
              className="text-white hover:text-gray-300 cursor-pointer"
            >
              {tab}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
