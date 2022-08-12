import Script from "next/script";

import about from "../data/about";
import contacts from "../data/contacts";
import educations from "../data/educations";

export default function Game() {
  const data = JSON.stringify({ about, contacts, educations });

  return (
    <>
      <Script src="game/bundle.js" strategy="lazyOnload"></Script>
      <div id="game" data={data}></div>
    </>
  );
}
