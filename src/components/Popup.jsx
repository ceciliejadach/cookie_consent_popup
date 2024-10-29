import { BiSolidCookie } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
import Button from "@/components/Button";

const Popup = () => {
  return (
    <>
      <div className="grid max-w-64 grid-rows-2 px-5 py-5 bg-black rounded-2xl h-72 self-end">
        <div className="flex justify-between">
          <BiSolidCookie style={{ width: "3rem", height: "3rem", color: "white", transform: "scaleX(-1)" }} />
          <RxCross2 style={{ color: "white" }} />
        </div>
        <div className="grid gap-4">
          <p className="text-white">We use cookies to improve your user experience.</p>
          <Button />
        </div>
      </div>
    </>
  );
};

export default Popup;
