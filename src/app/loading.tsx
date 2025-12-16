import Image from "next/image";

//loading gif, inbetween page loads
export default function Loading() {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(0,0,0,0.5)",
        zIndex: 9999,
      }}
    >
      <Image src="/assets/icon/music_loader.gif" alt="Loading" width={100} height={100} priority />
    </div>
  );
}
