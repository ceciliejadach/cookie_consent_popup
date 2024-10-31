import { LiaCookieBiteSolid } from "react-icons/lia";
import { RxCross2 } from "react-icons/rx";
import Button from "@/components/Button";

const CookieConsentPopup = () => {
  return (
    <section className="grid max-w-64 grid-rows-2 px-5 py-5 bg-black dark:bg-white rounded-2xl h-72 self-end">
      <div className="flex justify-between">
        <LiaCookieBiteSolid className="text-white dark:text-black w-[3rem] h-[3rem]" />
        {/* style={{ width: "3rem", height: "3rem", color: "white", transform: "scaleX(-1)" }} */}
        <RxCross2 className="cursor-pointer text-white dark:text-black" />
      </div>
      <div className="grid gap-4">
        <p className="text-white dark:text-black">We use cookies to improve your user experience.</p>
        <Button ctatext="I like Cookies" />
      </div>
    </section>
  );
};

export default CookieConsentPopup;
