import Script from "next/script";

export default function Game() {
  return (
    <>
      <Script src="game/bundle.js" strategy="lazyOnload"></Script>
      <div id="game"></div>
    </>
  );
}
