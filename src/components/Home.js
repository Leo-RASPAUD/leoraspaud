import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: #ff6f61;
  display: flex;
  justify-content: center;
  padding: 15% 16px 0 16px;
  min-height: 75vh;
`;

export default () => {
  return (
    <Container id="about">
      <div>
        <p>
          I am a senior software engineer with good knowledge of front-end techniques and many years of full stack
          development. Creating a great user experience and a clean code is always a priority for me.
        </p>
        <p>
          I’m currently working with ReactJS / GraphQL / AWS but I've worked with different technologies over the years
          such as Java, Python, Ruby...
        </p>
      </div>
    </Container>
  );
};
