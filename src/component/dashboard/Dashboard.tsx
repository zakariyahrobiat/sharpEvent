import images from "../../assets/images/category.png";
import image from "../../assets/images/task-square.png";
import { useAuth } from "../../context/AuthContext";

const Dashboard = () => {
  const {
    block,
    currentPage,
    handlePageChange,
    handleBlock,
    handleFlex,
    currentItems,
    totalPages,
  } = useAuth();
  return (
    <div className="w-full md:w-[70%] text-left md:py-7 pl-3 pr-3 md:pr-20 font-[inter] ">
      <p className="text-sm font-semibold text-[#767676]">
        140 search results for
      </p>
      <div className="flex justify-between items-center">
        <h3 className=" text-base md:text-2xl font-semibold text-black">
          Wedding, Lagos ₦20k - ₦40k, Excellent
        </h3>
        <div className="flex justify-between items-center gap-2">
          <img src={images} alt="images" srcSet="" onClick={handleFlex} />
          <img src={image} alt="image" srcSet="" onClick={handleBlock} />
        </div>
      </div>
      <div
        data-testid="dashboard"
        className={`grid grid-cols-1 justify-between w-full py-10 gap-10 ${
          block ? "md:grid-cols-1" : "md:grid-cols-2"
        }`}
      >
        {currentItems.map((item) => {
          const {
            id,
            name,
            image,
            direction,
            facilities,
            rating,
            rate,
            price,
            reviews,
          } = item;
          return (
            <div
              key={id}
              className={`w-full ${
                block ? "flex justify-between w-full" : "grid"
              }`}
            >
              <div
                className={`${
                  block ? "flex justify-between w-full" : "w-full"
                }`}
              >
                <div
                  className={`${block ? "w-2/3 flex gap-x-1 md:gap-x-5" : ""}`}
                >
                  <img
                    src={image}
                    alt=""
                    srcSet=""
                    className={`${block ? "w-[35%]" : "w-full"}`}
                  />
                  <div
                    className={`w-full justify-between grid ${
                      block ? "grid-cols-1 pt-0 w-full" : "grid-cols-2 pt-3"
                    } `}
                  >
                    <div className="">
                      <h2
                        className={`font-semibold text-black ${
                          block ? "text-[10.09px] md:text-xl" : "text-base"
                        }`}
                      >
                        {name}
                      </h2>
                      <p
                        className={`font-semibold text-[#A2A2A2] ${
                          block ? " text-[7.07px] md:text-sm" : "text-xs"
                        }`}
                      >
                        {direction}
                      </p>
                      <h3
                        className={`font-semibold text-black pt-1 ${
                          block ? "text-[7.57px] md:text-sm" : "text-xs"
                        }`}
                      >
                        Facilities
                      </h3>
                      {facilities
                        .split(",")
                        .slice(0, 6)
                        .map((facilty, index) => {
                          return (
                            <p
                              key={index}
                              className={`font-semibold text-[#A2A2A2] ${
                                block ? " text-[7.07px] md:text-sm" : "text-xs"
                              }`}
                            >
                              {facilty}
                            </p>
                          );
                        })}
                    </div>
                    {!block && (
                      <div className="w-full text-right flex flex-col justify-between items-end">
                        <div className="flex gap-1">
                          <div>
                            <p className=" text-xs font-semibold text-[#0166FF]">
                              {rating}
                            </p>
                            <p className=" text-[10.21px] font-semibold text-[#A2A2A2]">
                              {reviews}
                            </p>
                          </div>
                          <p className="text-[#0166FF] font-semibold text-xs bg-[#E1EAFC] rounded-2xl flex justify-center items-center text-center px-3 py-1">
                            {rate}
                          </p>
                        </div>
                        <h3 className="text-base font-semibold text-black">
                          {" "}
                          &#8358;{price}
                        </h3>
                        <button className="bg-[#0166FF] text-white font-semibold py-1 w-full rounded-xl">
                          See booking options
                        </button>
                      </div>
                    )}
                  </div>
                </div>
                <div className="w-1/3 flex">
                  {block && (
                    <div className="w-full text-right flex flex-col justify-between items-end">
                      <div className="flex gap-1">
                        <div>
                          <p className="font-semibold text-[#0166FF] text-[7.57px] md:text-sm">
                            {rating}
                          </p>
                          <p className="font-semibold text-[#A2A2A2] text-[6.05px] md:text-xs">
                            {reviews}
                          </p>
                        </div>
                        <p className="font-semibold  bg-[#E1EAFC] rounded-2xl flex justify-center items-center text-center px-3 py-1 text-[7.57px] md:text-">
                          {rate}
                        </p>
                      </div>
                      <h3 className="font-semibold text-black text-[10.09px] md:text-xl">
                        {" "}
                        &#8358;{price}
                      </h3>
                      <button className="bg-[#0166FF] text-white font-semibold py-1 rounded-xl text-[6.5px] md:text-sm w-full md:w-2/3">
                        See booking options
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex justify-center items-center gap-3">
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            className={` text-base font-semibold rounded-full flex justify-center items-center w-7 h-7  ${
              currentPage === index + 1
                ? "bg-[#0166FF] text-white"
                : "text-black"
            }`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
