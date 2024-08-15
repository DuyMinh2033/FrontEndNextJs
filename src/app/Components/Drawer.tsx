import Link from "next/link";
import React, { useEffect, useState } from "react";
import { SiNextdotjs } from "react-icons/si";

const Drawer = ({
  openDrawer,
  setOpenDrawer,
}: {
  openDrawer: boolean;
  setOpenDrawer: any;
}) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    if (openDrawer) {
      setIsMounted(true);
    }
  }, [openDrawer]);

  const handleTransitionEnd = () => {
    if (!openDrawer) {
      setIsMounted(false);
    }
  };

  const data = [
    { id: 1, href: "/", name: "Home" },
    { id: 2, href: "/", name: "About" },
    { id: 3, href: "/", name: "Hotline:+84 338 119 296" },
  ];
  return (
    <div>
      <div
        className={`fixed top-0 left-0 h-full w-[300px] bg-gray-100 transform transition-transform duration-[250ms] ease-linear md:hidden ${
          openDrawer ? "translate-x-0" : "-translate-x-full"
        } ${isMounted ? "opacity-100" : "opacity-0"}`}
        style={{ zIndex: 50 }}
        onTransitionEnd={handleTransitionEnd}
      >
        <div className="flex justify-center mb-3">
          <div className="flex items-center h-full gap-2 mt-4">
            <SiNextdotjs size={35} />
            <p className="text-xl">NextJSPro</p>
          </div>
        </div>
        {data.map((item) => (
          <div key={item.id} className="text-base ml-5">
            <Link href={item.href} className="block mt-2">
              {item.name}
            </Link>
          </div>
        ))}
        <div className="flex flex-col mt-5 gap-5 px-5">
          <button className="bg-black text-white py-2 rounded-xl hover:bg-opacity-60 hover:transition-all hover:duration-500">Login</button>
          <button className="border-2 border-gray-400 py-2 rounded-xl hover:bg-red-500/60 hover:text-white hover:transition-all hover:duration-500">
            Contact us
          </button>
        </div>
      </div>
      {openDrawer && (
        <div
          className="fixed inset-0 bg-black bg-opacity-35 cursor-pointer md:hidden"
          onClick={() => setOpenDrawer(false)}
          style={{ zIndex: 49 }}
        />
      )}
    </div>
  );
};

export default Drawer;
