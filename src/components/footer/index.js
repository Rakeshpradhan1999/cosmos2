import Opensea from "../../assets/images/Logomark-White.svg";

const Index = () => {
  return (
    <footer className="bg-dark pt-6">
      <div className="container flex justify-between border-t-2 border-primary py-8  items-center flex-wrap flex-col gap-4 sm:flex-row-reverse">
        <div className="w-full text-center">
          <span className="block text-xs">Produced by:</span>
          <span className="block">Moon's Collection Company</span>
        </div>
        <div className="flex items-center gap-4" style={{ color: "#ffc701" }}>
          <span>
            <a href="/">
              <i className="fab fa-twitter"></i>
            </a>
          </span>
          <span>
            <a href="/">
              <i className="fab fa-discord"></i>
            </a>
          </span>

          <span>
            <a href="/">
              <img src={Opensea} alt="dribble" className="w-8" />
            </a>
          </span>
        </div>
        <div className="text-white  text-lg text-center sm:text-left mt-4  sm:mt-0">
          <p className="">Smart Contract</p>
        </div>
      </div>
    </footer>
  );
};

export default Index;
