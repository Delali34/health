import Typewriter from "typewriter-effect";

function Text() {
  return (
    <div className="text-3xl font-bold font-mont text-white md:text-6xl">
      {" "}
      <Typewriter
        options={{
          strings: [
            "Leading Health Sector Agenda",
            "Equipped to Improve Livelihoods",
            "Championing Interventions that Improve Lives",
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
