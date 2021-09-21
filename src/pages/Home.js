import { Layout } from "../components";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { HeroSection } from "../sections";
toast.configure();
const Home = ({ account, mint, totalSupply, displayPrice, loadWeb3 }) => {
  return (
    <div>
      <Layout>
        <HeroSection
          account={account}
          mint={mint}
          totalSupply={totalSupply}
          displayPrice={displayPrice}
          loadWeb3={loadWeb3}
        />
      </Layout>
    </div>
  );
};

export default Home;
