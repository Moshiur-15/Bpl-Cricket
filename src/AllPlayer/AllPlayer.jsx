import { useEffect, useState } from "react";
import "./AllPlayer.css";
import Available from "../Available/Available";
import Selected from "../selected/Selected";
const AllPlayer = ({
  handleSelectedAvailable,
  available,
  choosePlayer,
  handleChoosePlayer,
  handleDelete,
  claimFreeCredit,
}) => {
  // All player data
  const [allPlayer, setAllPlayer] = useState([]);
  useEffect(() => {
    const dataFetch = async () => {
      const res = await fetch("playerData.json");
      const data = await res.json();
      setAllPlayer(data.players);
    };
    dataFetch();
  }, []);

  const handleAddMorePlayer = () => {
    handleSelectedAvailable(true);
  };

  return (
    <div>
      {/* Available player */}
      <section className="flex justify-between items-center p-3 lg:p-0">
        <h2 className="font-bold md:text-2xl">
          {available
            ? "Available Players"
            : `Selected Player (${choosePlayer.length}/6)`}
        </h2>

        <div className="flex text-xs md:text-base">
          <button
            onClick={() => handleSelectedAvailable(true)}
            className={`${
              available
                ? "active px-3 py-2 rounded-l-lg border"
                : "px-3 py-2 rounded-l-lg border"
            }`}
          >
            Available
          </button>
          <button
            onClick={() => handleSelectedAvailable(false)}
            className={`${
              available
                ? "px-3 py-2 rounded-r-lg border"
                : "active px-3 py-2 rounded-r-lg border"
            }`}
          >
            Selected ({choosePlayer.length})
          </button>
        </div>
      </section>

      <div>
        {available ? (
          <Available
            allPlayer={allPlayer}
            handleChoosePlayer={handleChoosePlayer}
            claimFreeCredit={claimFreeCredit}
          />
        ) : (
          <Selected
            handleDelete={handleDelete}
            choosePlayer={choosePlayer}
            handleAddMorePlayer={handleAddMorePlayer}
          />
        )}
      </div>
    </div>
  );
};

export default AllPlayer;
