"use client";
import { LiaCookieBiteSolid } from "react-icons/lia";
import { RxCross2 } from "react-icons/rx";

import { useState } from "react";
import AcceptButton from "./AcceptButton";

const CookieConsentPopup = () => {
  const [isCookieAccepted, setCookieAccepted] = useState(false);
  const [isCookieNotAccepted, setCookieNotAccepted] = useState(false);

  return (
    !isCookieAccepted &&
    !isCookieNotAccepted && (
      <section className="grid max-w-64 grid-rows-2 px-5 py-5 bg-black dark:bg-white rounded-2xl h-72 self-end">
        <div className="flex justify-between">
          <LiaCookieBiteSolid className="text-white dark:text-black w-[3rem] h-[3rem]" />
          <button
            className="h-fit"
            onClick={() => {
              setCookieNotAccepted(!isCookieNotAccepted);
            }}
          >
            <RxCross2 className="cursor-pointer text-white dark:text-black" />
          </button>
        </div>
        <div className="grid gap-4">
          <p className="text-white dark:text-black">We use cookies to improve your user experience.</p>
          <AcceptButton isCookieAccepted={isCookieAccepted} setCookieAccepted={setCookieAccepted} />
        </div>
      </section>
    )
  );
};

export default CookieConsentPopup;
