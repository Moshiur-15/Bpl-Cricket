const Newsletter = () => {
  return (
    <div className="p-3 lg:p-0">
      <div className="relative top-36 max-w-7xl mx-auto border rounded-xl p-5 bg-[#FFFFFF] bg-opacity-15">
        <div
          className="hero bg-white rounded-xl p-3 lg:p-0"
          style={{
            backgroundImage: "url(https://i.ibb.co.com/VB51903/bg-shadow.png)",
          }}
        >
          <div className="text-center py-16">
            <div className="space-y-2">
              <h2 className="font-bold text-base md:text-2xl lg:text-3xl">
                Subscribe to our Newsletter
              </h2>
              <p className="font-normal text-xs md:text-base opacity-80">
                Get the latest updates and news right in your inbox!
              </p>
              <div className="flex flex-col md:flex-row gap-5">
                <div className="lg:w-96">
                <input
                  type="text"
                  placeholder="Enter your email"
                  className="input input-bordered w-full"
                />
                </div>
                <div>
                  <button className="px-5 py-3 text-black font-bold rounded-lg bg-gradient-to-r from-yellow-300 to-purple-400 border-none">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
