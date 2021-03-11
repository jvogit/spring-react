import { H1, H2, Paragraph1 } from "baseui/typography";
import React from "react";

const StyledLi = (props) => {
  return (
    <li><Paragraph1>{props.children}</Paragraph1></li>
  )  
}

export const Home = () => {
  return (
    <section>
      <H1>Spring-React</H1>
      <Paragraph1>
        Spring-React is my template repository for a full-scale web application
        using SpringBoot, React, and PostgreSQL.
      </Paragraph1>
      <H2>Features</H2>
      <ul>
        <StyledLi>JWT Authentication</StyledLi>
        <StyledLi>Redux + react-saga middleware</StyledLi>
        <StyledLi>baseweb UI</StyledLi>
        <StyledLi>Heroku deployment ready</StyledLi>
        <StyledLi>Mobile first</StyledLi>
      </ul>
    </section>
  );
}

export default Home;