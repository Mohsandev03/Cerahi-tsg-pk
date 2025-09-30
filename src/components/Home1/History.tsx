// components/HistoryArea.js
import Image from "next/image";

const HistoryArea = () => {
  return (
    <div className="history__area   lg:pt-12  m-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h4 className="  text-xl text-left">our history</h4>
          <h2 className="text-4xl font-semibold   pt-5 mb-4 text-left">
            We Are A Lifestyle Brand
          </h2>
          <p className="text-lg mb-6 text-left">
            It is accompanied by a case that can contain up to three different
            diffusers and can be used for dry storage of loose tea. The perfect
            way to enjoy brewing tea on low hanging fruit to identify. Duis
            autem vel eum iriure dolor in hendrerit in vulputate velit esse
            molestie consequat, velillum dolore eu feugiat nulla facilisis.
          </p>
          <p className="text-lg mb-6 text-left">
            The perfect way to enjoy brewing tea on low hanging fruit to
            identify. Duis autem vel eum iriure dolor in hendrerit in vulputate
            velit esse molestie consequat, vel illum dolore eu feugiat nulla
            facilisis. For me, the most important part of improving at
            photography has been sharing it.
          </p>
          <p className="text-lg text-left">
            Sign up for an Exposure account, or post regularly to Tumblr, or
            both. Tell people you’re trying to get better at photography. Talk
            about it. When you talk about it, other people get excited about it.
            There are few plugins and apps available for this purpose, many of
            them required a monthly subscription or needed to expose the full
            store data to a third party.
          </p>
        </div>

        <div className="flex flex-wrap justify-center lg:flex-nowrap">
          <div className="lg:w-8/12 w-full mb-8 lg:mb-0">
            <div className="history__thumb mb-4">
              <Image
                src={"/images/banner/NewArrivals.png"}
                width={2000}
                height={2000}
                alt="bg-img"
                className="w-full duration-500"
              />
            </div>
            <div className="flex flex-wrap">
              <div className="w-1/2 py-2 mb-6 first-img">
                <div className="thumb">
                <Image
                src={"/images/banner/BestSellers.png"}
                width={2000}
                height={2000}
                alt="bg-img"
                className="w-full duration-500"
              />
                </div>
              </div>
              <div className="w-1/2 py-2 mb-6 secnd-img ">
                <div className="thumb">
                <Image
                src={"/images/banner/BestSellers.png"}
                width={2000}
                height={2000}
                alt="bg-img"
                className="w-full duration-500"
              />
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-4/12 w-full px-2 img-3rd">
            <div className="thumb mb-6">
            <Image
                src={"/images/banner/BestSellers.png"}
                width={2000}
                height={2000}
                alt="bg-img"
                className="w-full duration-500"
              />
            </div>
            <div className="thumb-2 mb-6 img-4th ">
            <Image
                src={"/images/other/about-1.jpg"}
                width={2000}
                height={2000}
                alt="bg-img"
                className="w-full duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoryArea;
