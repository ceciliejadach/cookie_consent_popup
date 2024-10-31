import CookieConsentPopup from "./CookieConsentPopup";
import NoCookies from "./NoCookies";

const If = ({ children, condition }) => {
  return (
    <>
      {/* {condition ? <CookieConsentPopup /> : <NoCookies />} */}
      {/* {condition && <CookieConsentPopup />} */}
      {condition && children}
      {/* {children} */}
    </>
  );
};

export default If;
