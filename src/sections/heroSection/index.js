import { useState } from "react";
import { Button } from "../../components";
import Gif from "../../assets/images/Gif.gif";
import Logo from "../../assets/images/logo.png";

import Slider, { SliderTooltip } from "rc-slider";
import "rc-slider/assets/index.css";
import "./style.css";

const Index = ({ account, mint, totalSupply, displayPrice, loadWeb3 }) => {
  const [value, setValue] = useState(0);

  const { Handle } = Slider;

  const handle = (props) => {
    const { value, dragging, index, ...restProps } = props;
    if (value > 0) {
      setValue(value);
    }

    return (
      <SliderTooltip
        prefixCls="rc-slider-tooltip"
        overlay={`${value}`}
        visible={dragging}
        placement="top"
        key={index}
      >
        <Handle value={value} {...restProps} />
      </SliderTooltip>
    );
  };

  return (
    <section className="py-10">
      <div className="container lg:flex lg:flex-row-reverse gap-10 ">
        <div className="lg:w-1/2 w-full">
          <div className="flex justify-between mb-20 items-center">
            <div>
              <img
                src={Logo}
                alt="logo"
                className="logo lg:hidden w-28 sm:w-40"
              />
            </div>
            <Button color="primary" onClick={() => loadWeb3()}>
              {account
                ? account.slice(0, 8) +
                  "..." +
                  account.slice(account.length - 5)
                : "disconnected"}
            </Button>
          </div>
          <img
            src={Gif}
            alt="gif"
            className="max-w-sm lg:max-w-md mx-auto w-full"
          />
        </div>
        <div className="lg:w-1/2 w-full">
          <div className="hidden lg:block">
            <img src={Logo} alt="logo" />
          </div>
          <p className="text-center sm:mx-auto  text-lg font-black mt-6  w-full  max-w-lg ">
            The Nebula Conqueror is a 10,000 NFT's series of space Avatar which
            will be usable as characters in our cosmos conquest browser P2E
            game.
          </p>

          <div className="mt-14 max-w-md w-full mx-auto">
            <div className="flex justify-center text-xs mb-5">
              <span>Total Nebula Conqueror Minted: {totalSupply} / 7777</span>
            </div>
            <Slider min={0} max={20} defaultValue={1} handle={handle} />
            <p className="text-center text-xs mt-2">
              {account
                ? `Mint ${value} Starfish(${(value * displayPrice).toFixed(
                    4
                  )} Ether)`
                : "Connect Account"}
            </p>
            <div className="mt-8 text-center">
              <Button
                onClick={() => mint(value)}
                disabled={!account ? true : false}
                color="primary"
              >
                Mint Your Nebula Conqueror
              </Button>
              <p className="mt-10 text-center">
                20 fully unique are hidden in the 10k NFTs.
              </p>
              <p className="mx-auto text-center">Good luck!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Index;
