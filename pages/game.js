import Script from "next/script";

export default function Game() {
  return (
    <>
      <Script src="bundle.js" strategy="lazyOnload"></Script>
    </>
  );
}
