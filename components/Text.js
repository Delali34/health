import Typewriter from "typewriter-effect";

function Text() {
  return (
    <div className="text-3xl font-bold font-mont text-white md:text-5xl">
      {" "}
      <Typewriter
        options={{
          strings: [
            "Leading Health Sector Agenda",

            "Championing Interventions that Improve Lives",
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
