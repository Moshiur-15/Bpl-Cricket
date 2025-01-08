import img from "../assets/banner-main.png";
const Banner = ({handleClaimFreeCredit}) => {
  return (
    <div className="p-3 lg:p-0">
      <div
        className="hero bg-[#131313] rounded-lg my-8"
        style={{
          backgroundImage: "url(https://i.ibb.co.com/VB51903/bg-shadow.png)",
        }}
      >
        <div className="text-center text-white py-16">
          <div className="space-y-2 lg:space-y-5">
            <img className="mx-auto" src={img} alt="image" />
            <h1 className="text-xl md:text-3xl lg:text-4xl font-bold">
              Assemble Your Ultimate Dream 11 Cricket Team
            </h1>
            <p className="font-normal text-sm md:text-base lg:text-xl opacity-50">
              Beyond Boundaries Beyond Limits
            </p>

            <div className="border w-[170px] lg:w-[200px] rounded-xl mx-auto border-[#E7FE29] py-1 lg:p-2 bg-yellow-100 bg-opacity-15">
              <button onClick={handleClaimFreeCredit} className="px-4 py-1.5 md:py-2 lg:py-3 text-black rounded-lg bg-[#E7FE29] font-bold text-sm lg:text-base border-none">
                Claim Free Credit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
