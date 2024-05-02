import { ArrowLeftIcon } from "@heroicons/react/24/outline";

const WatchPage = () => {
  return (
    <div className="h-screen w-screen bg-black">
      <nav className="fixed w-full p-4 z-10 flex items-center gap-8 bg-black bg-opacity-80">
        <ArrowLeftIcon className="w-10 text-white cursor-pointer hover:opacity-80 transition" />
        <p className="text-white text-3xl font-bold">
          <span className="font-light">Watching: </span> South Park
        </p>
      </nav>
      <iframe
        className="h-full w-full"
        src="https://www.youtube.com/embed/MW-bASP8mAg?autoplay=0"
        allowFullScreen
        allow="autoplay"
      ></iframe>
    </div>
  );
};

export default WatchPage;
