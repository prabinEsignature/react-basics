import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { PlayIcon } from "@heroicons/react/24/solid";

const MovieCard = () => {
  return (
    <div className="group bg-zinc-900 col-span relative h-[12vw] w-[24%]">
      <img
        src="https://occ-0-957-2568.1.nflxso.net/dnm/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABXUKCVfaJbeHAde_N_oH5wpDCFnbTkv1K3N6DZTP7kAnnGXwOCeq31n2zf_a4OWF_okIaMFfIb9ld6F0QTm58NOmW5cEMUndL7AG_FhmET7Qb0rnSD3DMVLr3pssBKwDNtfO9P4SBKSt9F3miwLN2vp4K70K8HjfBhQcbxG5b6usbqEJYNyU73lubk7FKau_fnzGz3GcXs8_853sklUFzdAA5Ttw-vRXbT72DQ05H0uj3LneweuGGabi--7XQbZSiTvhx1ZyqZUJ6LZJeDV3Qx7NphE6sqN7jv1F8JdoCB0SvOwQtvG2kxQa2g.jpg"
        alt="Movie"
        draggable={false}
        className="
        cursor-pointer
        object-cover
        transition
        duration
        shadow-xl
        rounded-md
        group-hover:opacity-90
        sm:group-hover:opacity-0
        delay-300
        w-full
        h-[12vw]
      "
      />
      <div
        className="
        opacity-0
        absolute
        top-0
        transition
        duration-200
        z-10
        invisible
        sm:visible
        delay-300
        w-full
        scale-0
        group-hover:scale-110
        group-hover:-translate-y-[6vw]
        group-hover:translate-x-[2vw]
        group-hover:opacity-100
      "
      >
        <img
          src="https://occ-0-957-2568.1.nflxso.net/dnm/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABXUKCVfaJbeHAde_N_oH5wpDCFnbTkv1K3N6DZTP7kAnnGXwOCeq31n2zf_a4OWF_okIaMFfIb9ld6F0QTm58NOmW5cEMUndL7AG_FhmET7Qb0rnSD3DMVLr3pssBKwDNtfO9P4SBKSt9F3miwLN2vp4K70K8HjfBhQcbxG5b6usbqEJYNyU73lubk7FKau_fnzGz3GcXs8_853sklUFzdAA5Ttw-vRXbT72DQ05H0uj3LneweuGGabi--7XQbZSiTvhx1ZyqZUJ6LZJeDV3Qx7NphE6sqN7jv1F8JdoCB0SvOwQtvG2kxQa2g.jpg"
          alt="Movie"
          draggable={false}
          className="
          cursor-pointer
          object-cover
          transition
          duration
          shadow-xl
          rounded-t-md
          w-full
          h-[12vw]
        "
        />
        <div
          className="
          z-10
          bg-zinc-800
          p-2
          lg:p-4
          absolute
          w-full
          transition
          shadow-md
          rounded-b-md
          "
        >
          <div className="flex flex-row items-center gap-3">
            <button className="cursor-pointer w-6 h-6 lg:w-10 lg:h-10 bg-white rounded-full flex justify-center items-center transition hover:bg-neutral-300">
              <PlayIcon className="text-black w-4 lg:w-6" />
            </button>
            <div className="cursor-pointer ml-auto group/item w-6 h-6 lg:w-10 lg:h-10 border-white border-2 rounded-full flex justify-center items-center transition hover:border-neutral-300">
              <ChevronDownIcon className="text-white group-hover/item:text-neutral-300 w-4 lg:w-6" />
            </div>
          </div>
          <p className="text-white font-semibold mt-4 text-2xl">bvmtyutyu</p>
          <p className="text-gray-400">bf rwtyertyert</p>
          <div className="flex flex-row mt-4 gap-2 items-center">
            <p className="text-white text-[10px] lg:text-sm">xcbcxvbxcvb cvbxcvb cxvb</p>
          </div>
          <div className="flex flex-row items-center gap-2 mt-4 text-[8px] text-white lg:text-sm">
            <p>zvxzc ertwer </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
