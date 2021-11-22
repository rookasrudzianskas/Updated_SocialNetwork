import React from 'react';
import Image from "next/image";

const Header = () => {
        return (
          <div className="">
              <div className="flex justify-between bg-white max-w-6xl">
                  <div className="relative w-24 h-24">
                      <Image src="https://links.papareact.com/ocw" layout={'fill'} objectFit={'contain'} />
                  </div>

                  {/*        middle     */}
                  {/*        right      */}
                  <h1>rokas</h1>
              </div>

          </div>
        );
};

export default Header;

