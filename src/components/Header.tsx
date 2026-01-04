const Header = () => {
  return (
    <header className="w-full py-8 px-4">
      <div className="max-w-4xl mx-auto flex items-center gap-3 justify-center md:justify-start">
        <span className="text-4xl" role="img" aria-label="Goat logo">
          🐐
        </span>
        <h1 className="text-2xl md:text-3xl font-semibold text-gray-900">
          TheGoatedDev
        </h1>
      </div>
    </header>
  );
};

export default Header;
