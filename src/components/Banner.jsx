const Banner = () => {
  return (
    <>
      <div className="">
        {/* Add a slider (you can use any type of static slider/carousel)  with a minimum of 3 slides and  meaningful information */}
        <div>
          <div className="carousel absolute top-0 text-white w-full h-[100vh]">
            <div id="slide4" className="carousel-item relative w-full">
              <img
                src="https://i.ibb.co.com/BLN1bnc/6.png"
                className="w-full object-cover"
              />
              <div className="absolute left-20 right-5 top-[55%] flex -translate-y-1/2 transform">
                <h1 className="text-5xl font-extrabold">
                  Empowering Connections,
                  <br />
                  Enabling Services
                  <p className="text-lg py-6 font-normal">
                    Add, book, and manage services seamlessly in one platform.
                  </p>
                </h1>
              </div>
              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a
                  href="#slide3"
                  className="btn rounded-full h-[10vh]  md:btn-ghost btn-neutral border md:border-none border-white text-white text-lg"
                >
                  ❮
                </a>
                <a
                  href="#slide1"
                  className="btn rounded-full h-[10vh]  md:btn-ghost btn-neutral border md:border-none border-white text-white text-lg"
                >
                  ❯
                </a>
              </div>
              <div className="absolute left-20 -bottom-5 flex -translate-y-1/2 transform">
                {/* <p className="text-5xl text-red-500">h</p> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-[25vh] w-20 text-white hover:text-red-600 transition animate-bounce"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 10l7 7m0 0l7-7m-7 7V2"
                  />
                </svg>
              </div>
            </div>
            <div id="slide1" className="carousel-item relative w-full">
              <img
                src="https://i.ibb.co.com/WnVvRK9/1597443684399.jpg"
                className="w-full object-cover"
              />
              <div className="absolute left-20 right-5 top-[55%] flex -translate-y-1/2 transform">
                <h1 className="text-5xl text-black font-extrabold">
                  Your Service Hub Awaits!
                  <br />
                  <p className="text-lg text-black py-6 font-normal">
                    Discover, share, and book services with ease and
                    convenience.
                  </p>
                </h1>
              </div>
              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a
                  href="#slide4"
                  className="btn rounded-full h-[10vh]  md:btn-ghost btn-neutral border md:border-none border-white text-white text-lg"
                >
                  ❮
                </a>
                <a
                  href="#slide2"
                  className="btn rounded-full h-[10vh]  md:btn-ghost btn-neutral border md:border-none border-white text-white text-lg"
                >
                  ❯
                </a>
              </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
              <img
                src="https://i.ibb.co.com/WFgxBPb/Network-services-scaled.webp"
                className="w-full object-cover"
              />
              <div className="absolute left-20 right-5 top-[55%] flex -translate-y-1/2 transform">
                <h1 className="text-5xl font-extrabold">
                  Services Made Simple
                  <br />
                  <p className="text-lg py-6 font-normal">
                    Find what you need. Share what you offer. All in one place.
                  </p>
                </h1>
              </div>
              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a
                  href="#slide1"
                  className="btn rounded-full h-[10vh]  md:btn-ghost btn-neutral border md:border-none border-white text-white text-lg"
                >
                  ❮
                </a>
                <a
                  href="#slide3"
                  className="btn rounded-full h-[10vh]  md:btn-ghost btn-neutral border md:border-none border-white text-white text-lg"
                >
                  ❯
                </a>
              </div>
            </div>
          </div>
          <div className="pt-[100vh]"></div>
        </div>
      </div>
    </>
  );
};

export default Banner;
