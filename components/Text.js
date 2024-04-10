import Typewriter from "typewriter-effect";

function Text() {
  return (
    <div className="text-[18px] font-bold font-mont text-blue-400 md:text-[25px]">
      {" "}
      <Typewriter
        options={{
          strings: [
            "Championing interventions that improve livelihoods",
            "Be empowered...",
          ],
          autoStart: true,
          loop: true,
          pauseFor: 8000,
        }}
      />
    </div>
  );
}

export default Text;
