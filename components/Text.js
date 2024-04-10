import Typewriter from "typewriter-effect";

function Text() {
  return (
    <div className="text-[22px] font-bold font-mont text-white md:text-3xl">
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
