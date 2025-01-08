import { MdOutlineDeleteForever } from "react-icons/md";
const Selected = ({ choosePlayer, handleDelete,handleAddMorePlayer }) => {
  return (
    <div className="p-3 lg:p-0">
      {choosePlayer.map((player, inx) => (
        <section
          key={inx}
          className="flex justify-between items-center bg-white border rounded-xl p-4 mt-5"
        >
          <div className="flex gap-4 items-center">
            <img
              className="h-16 w-16 bg-white rounded-xl"
              src={player.image}
              alt="image"
            />
            <div>
              <h2 className="text-base lg:text-xl font-semibold">{player.name}</h2>
              <p className="opacity-60 text-sm lg:text-base">{player.role}</p>
              <p className="opacity-90 text-xs lg:text-sm mt-1">${player.biddingPrice}</p>
            </div>
          </div>
          <button
            onClick={() => handleDelete(player.playerId)}
            className="text-2xl text-red-400"
          >
            <MdOutlineDeleteForever />
          </button>
        </section>
      ))}
      <div className="border lg:ml-0 lg:w-[190px] rounded-xl mt-10 border-black
       py-1 px-1.5 lg:px-2 lg:py-2  w-[165px]">
        <button onClick={handleAddMorePlayer} className="px-4 py-1.5 md:py-2 lg:py-3 rounded-lg bg-[#E7FE29] font-bold lg:text-base text-sm border-none">
        Add More Player
        </button>
      </div>
    </div>
  );
};

export default Selected;
