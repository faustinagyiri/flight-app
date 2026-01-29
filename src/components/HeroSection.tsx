import SearchCard from "./search/SearchCard";

const HeroSection = () => {
  return (
    <section className="relative h-[80vh]">
      {/* background image */}
      <img
        src="/background.jpg"
        alt="Airplane wing"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/40" />
      {/* content */}
      <div className="relative flex h-full flex-col items-center justify-start text-center text-white px-4 pt-25">
        <h1 className="md:text-6xl  text-10xl font-bold leading-tight ">
          Search flights instantly
        </h1>
        <p className="mt-4 max-w-xl text-2xl md:text-1xl text-gray-200">
          Find and book your perfect flight in seconds
        </p>
      </div>
      <SearchCard />
    </section>
  );
};

export default HeroSection;

