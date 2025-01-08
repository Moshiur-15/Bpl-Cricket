import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import AllPlayer from "./AllPlayer/AllPlayer";
import "./App.css";
import Banner from "./bannar/Banner";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import Newsletter from "./Newsletter/Newsletter";

function App() {
  // claim free credit useState
  const [claimFreeCredit, setClaimFreeCredit] = useState(0);
  const handleClaimFreeCredit = () => {
    setClaimFreeCredit(claimFreeCredit + 100000);
    toast.success("Credit Added to your Account");
  };

  // Available  or  selected (0) useState
  const [available, setSelected] = useState(true);
  const handleSelectedAvailable = (value) => {
    if (value) {
      setSelected(true);
    } else {
      setSelected(false);
    }
  };

  // choose  player
  const [choosePlayer, setChoosePlayer] = useState([]);
  const handleChoosePlayer = (players) => {
    const isExist = choosePlayer.find(
      (player) => player.playerId === players.playerId
    );
    if (!isExist) {
      if (choosePlayer.length >= 6) {
        toast.error("You can't choose more than 6 players");
      } else {
        setClaimFreeCredit(claimFreeCredit - players.biddingPrice);
        setChoosePlayer([...choosePlayer, players]);
        toast.success(`Congrates ${players.name} is now in your squed`);
      }
    } else {
      toast.error("Player AllReady Selected");
    }
  };

  // delate func
  const handleDelete = (id) => {
    const deleted = choosePlayer.filter((delate) => delate.playerId !== id);
    setChoosePlayer(deleted);
    toast.warning("Player Removed",{position:'top-right'})
  };

  return (
    <div>
      <div className="container mx-auto">
        <Header claimFreeCredit={claimFreeCredit} />
        <ToastContainer position="top-center"></ToastContainer>
        <Banner handleClaimFreeCredit={handleClaimFreeCredit} />
      </div>
      <div className="container mx-auto">
        <AllPlayer
          handleDelete={handleDelete}
          choosePlayer={choosePlayer}
          handleChoosePlayer={handleChoosePlayer}
          available={available}
          handleSelectedAvailable={handleSelectedAvailable}
          claimFreeCredit={claimFreeCredit}
        />
      </div>
      <div>
        <Newsletter />
        <Footer />
      </div>
    </div>
  );
}

export default App;






