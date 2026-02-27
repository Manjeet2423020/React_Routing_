import pic from "../../assets/img.png";
const Overview = () => {
  return (
    <div className="flex justify-center items-center p-10 overflow-hidden">
      <img className="w-full  max-h-full object-contain " src={pic} alt="img" />
    </div>
  );
};

export default Overview;
