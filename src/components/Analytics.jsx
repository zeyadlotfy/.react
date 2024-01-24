import laptop from "../assets/images/laptop.jpg";
const Analytics = () => {
  return (
    <div className="bg-white w-full  py-16 px-4">
      <div className="max-w-[p1240px] mx-auto grid md:grid-cols-2 ">
        <img className="w-[500px] mx-auto my-4" src={laptop} alt="/" />
        <div className="flex flex-col justify-center ">
          <p className="text-[#00df9a] font-bold">DATA ANALYTICS DASHBOARD</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Mange Data Analytics Centrally
          </h1>
          <p className="">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi
            recusandae, quas voluptates neque eum sapiente sint exercitationem
            temporibus in omnis deserunt, eligendi debitis consectetur qui. Eos
            impedit enim placeat illo.
          </p>
          <button
            className="bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6
          mx-auto md:mx-0 py-3 "
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
