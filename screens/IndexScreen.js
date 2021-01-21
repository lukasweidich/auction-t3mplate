import React from "react";
import Hero from "../components/index/Hero";
import Features from "../components/index/Features";
import ATSteps from "../components/index/ATSteps";

const Wrapper = ({ children, noTop = false, noBottom = false }) => {
  const dist = "20vh";
  return (
    <section
      style={{
        alignItems: "center",
        margin: `${noTop ? "0" : dist} 0 ${noBottom ? "0" : dist} 0`,
      }}
    >
      {children}
    </section>
  );
};

const IndexScreen = () => {
  return (
    <>
      <Wrapper noBottom>
        <Hero />
      </Wrapper>
      <Wrapper noBottom>
        <Features />
      </Wrapper>
      <Wrapper>
        <ATSteps />
      </Wrapper>
    </>
  );
};

export default IndexScreen;
