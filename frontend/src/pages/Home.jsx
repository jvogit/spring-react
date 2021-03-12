import { StyledBody } from "baseui/card";
import { H1, H2, Paragraph1 } from "baseui/typography";
import React from "react";

export const Home = () => {
  return (
    <section>
      <H1>Spring-React</H1>
      <Paragraph1>
        Spring-React is my template repository for a full-scale web application
        using SpringBoot, React, and PostgreSQL.
      </Paragraph1>
      <H2>Features</H2>
      <StyledBody>
        <ul>
          <li>JWT Authentication</li>
          <li>Redux + react-saga middleware</li>
          <li>baseweb UI</li>
          <li>Heroku deployment ready</li>
          <li>Mobile first</li>
        </ul>
      </StyledBody>
    </section>
  );
}

export default Home;