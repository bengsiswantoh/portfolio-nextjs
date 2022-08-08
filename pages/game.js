import Script from "next/script";

export default function Game() {
  return (
    <>
      <Script src="https://cdn.jsdelivr.net/npm/phaser@3.55.2/dist/phaser-arcade-physics.min.js"></Script>
      <Script src="myscript.js" strategy="lazyOnload"></Script>
    </>
  );
}
