import React from "react";

const Accordion = () => {
  return (
    <div className="font-mont">
      {" "}
      <h1 className="text-center pt-20 text-primary font-bold text-4xl">
        FAQs
      </h1>
      <div className="body my-52">
        <section className="accordion ">
          <div className="tab">
            <input type="checkbox" name="accordion-1" id="cb1" defaultChecked />
            <label htmlFor="cb1" className="tab__label">
              Placeholder
            </label>
            <div className="tab__content">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                fugit doloremque provident ut. Facere temporibus laboriosam,
                quis aut mollitia delectus eius voluptatum ipsa, aspernatur
                accusamus soluta ex exercitationem sed blanditiis!
              </p>
            </div>
          </div>
          <div className="tab">
            <input type="checkbox" name="accordion-1" id="cb2" />
            <label htmlFor="cb2" className="tab__label">
              placeholder 2
            </label>
            <div className="tab__content">
              <p>
                Using allows having Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Quasi inventore vero animi eos dolores
                commodi, exercitationem nulla voluptatem iste fugiat quos
                voluptas natus ab, reiciendis eaque? Ipsam possimus vitae quasi!
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Accordion;
