import Opensea from "../../assets/images/Logomark-White.svg";

const Index = () => {
  return (
    <footer className="bg-dark pt-6">
      <div className="container flex justify-between border-t-2 border-primary py-8  items-center flex-wrap flex-col gap-4 sm:flex-row-reverse">
        <div className="w-full text-center">
          <span className="block text-xs">Produced by:</span>
          <span className="block"><a href="https://www.cosmosconquest.com/">Moon's Collection Company</a></span>
        </div>
        <div className="flex items-center gap-4" style={{ color: "#ffc701" }}>
          <span>
            <a href="https://twitter.com/CosmosConquest?s=09">
              <i className="fab fa-twitter"></i>
            </a>
          </span>
          <span>
            <a href="https://discord.gg/aBn8yD9MZT">
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
          <p className=""><a href="https://etherscan.io/address/0x2253c88d95cd26827374ae396a3b8e23f8c5c2bb">Smart Contract</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Index;
