import React, { useEffect, useState } from "react";
import Navbar from "./NavbarHome";
import Footer from "./Footer";
import Home from "./Home";
import Service from "./Service";
import Introduction from "./Introduction";
import Contact from "./Contact";
import $ from "jquery";

function App() {
  $(document).on("scroll", function () {
    var pageTop = $(document).scrollTop();
    var pageBottom = pageTop + $(window).height();
    var tags = $(".tag");

    for (var i = 0; i < tags.length; i++) {
      var tag = tags[i];
      if ($(tag).position().top < pageBottom) {
        $(tag).addClass("visible");
      } else {
        $(tag).removeClass("visible");
      }
    }
  });

  return (
    <React.Fragment>
      <Navbar />

      <section className="">
        <Introduction />
      </section>

      <section className="tag">
        <Home />
      </section>

      <section className="tag">
        <Service />
      </section>

      <section className="tag">
        <Contact />
      </section>

      <Footer />
    </React.Fragment>
  );
}

export default App;
