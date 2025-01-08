import { FaRegUserCircle } from "react-icons/fa";
import { FaFlag } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
const Available = ({
  allPlayer,
  handleChoosePlayer,
  claimFreeCredit
}) => {
  <ToastContainer />;
  return (
    <div className=" px-3 lg:px-0  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-3 lg:mt-8">
      {allPlayer.map((player, index) => (
        <div key={index}>
          {/* cards */}
          <div className=" card card-compact p-4 bg-base-100 border">
            <figure>
              <img
                className="rounded-xl h-[240px] lg:h-[280px] w-full"
                src={player.image}
                alt="Shoes"
              />
            </figure>
            <div className="space-y-3">
              <div className="flex text-base lg:text-xl items-center gap-3 mt-4">
                <FaRegUserCircle />
                <h2 className="font-semibold">{player.name}</h2>
              </div>

              <div className="flex items-center gap-3 justify-between">
                <p className="flex items-center justify-center gap-3 mt-4">
                  <FaFlag />
                  <span className="font-normal opacity-60 text-sm lg:text-base">
                    {player.country}
                  </span>
                </p>
                <button className="px-4 py-1.5 rounded font-normal text-xs lg:text-base bg-gray-200">
                  {player.role}
                </button>
              </div>

              <hr />
              <p className="font-bold text-base">Rating</p>
              <p className="font-semibold text-xs lg:text-base flex justify-between items-center">
                <span>{player.battingType}</span>
                <span className="opacity-60">{player.bowlingType}</span>
              </p>
              
              <div className="flex text-xs lg:text-base items-center gap-3 justify-between">
                <p className="font-semibold">
                  prize:$ {player.biddingPrice}
                </p>
                <button
                  onClick={() => {
                    if (claimFreeCredit >= player.biddingPrice) {
                      handleChoosePlayer(player);
                    } else {
                      toast.error("You don't have enough coins");
                    }
                  }}
                  className="px-4 hover:bg-[#E7FE29] py-2 border rounded-md font-normal"
                >
                  choose player
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Available;
