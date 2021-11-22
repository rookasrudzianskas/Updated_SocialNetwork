import React from 'react';
import Image from "next/image";

const Header = () => {
        return (
          <div className="">
              <div className="flex justify-between bg-white max-w-6xl">
                  <div className="relative hidden lg:inline-grid w-24 h-24 cursor-pointer">
                      <Image src="https://links.papareact.com/ocw" layout={'fill'} objectFit={'contain'} />
                  </div>

                  <div className="relative w-10 h-10 lg:hidden flex-shrink-0 cursor-pointer">
                      <Image src="https://links.papareact.com/jjm" layout={'fill'} objectFit={'contain'} />
                  </div>

                  {/*        middle     */}

                  <div>
                      <input type="text" placeholder="Search"/>
                  </div>

                  {/*        right      */}
              </div>

          </div>
        );
};

export default Header;

