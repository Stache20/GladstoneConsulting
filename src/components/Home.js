import React from "react";
import ScrollArrow from "./ScrollArrow";
import Avatar from "./Avatar";

function Home() {
  return (
    <div className="box" id="Main">
      <div className="text-center">
        <Avatar />
        <p>
          {" "}
          Marni is a Board Certified Behaviour Analyst who has been in the field
          of ABA and Positive Behaviour Support for many years.{" "}
        </p>

        <p>
          Her passion for helping people has awarded her opportunities to work
          with folks of all ages and levels of need both in Ontario and British
          Columbia.
        </p>

        <p>
          Marni's current areas of focus are within the forensic system, youth
          in conflict with the law, and sexual behaviours.
        </p>

        <p>
          Marni is constantly keeping up to date with evidence based practices
          and continuing her education to ensure her clients are getting the
          best possible outcomes.{" "}
        </p>

        <br></br>

        <hr
          style={{
            background: "grey",
            height: "1.5px",
            width: "40%",
            border: "none",
          }}
        />
        <div>
          <ScrollArrow scrollTarget="Service" />
        </div>
      </div>
    </div>
  );
}

export default Home;
