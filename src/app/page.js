import CookieConsentPopup from "@/components/CookieConsentPopup";
import If from "../components/If";

export default function Home() {
  const cookieIsAccepted = true;

  return (
    <div className="grid justify-end h-screen px-8 py-8">
      <If condition={cookieIsAccepted}>
        <CookieConsentPopup />
      </If>
    </div>
  );
}
