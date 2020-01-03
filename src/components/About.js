import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export default () => {
  return (
    <Container id="about">
      <div>
        <p>Here's a list of project I'm working on:</p>
        <ul>
          <li>
            <a href="https://invited.event" target="_blank" rel="noreferrer noopener">
              Invited
            </a>
          </li>
          <li>
            <a href="https://musicaroundme.io" target="_blank" rel="noreferrer noopener">
              MusicAroundMe.io
            </a>
          </li>
          <li>
            <a href="https://thefuckisforlunch.com" target="_blank" rel="noreferrer noopener">
              The fuck is for lunch?
            </a>
          </li>
          <li>
            <a href="https://dotabook.me" target="_blank" rel="noreferrer noopener">
              Dotabook
            </a>
          </li>
        </ul>
        <div>
          My github account:{' '}
          <a href="https://github.com/Leo-RASPAUD" target="_blank" rel="noreferrer noopener">
            Leo-RASPAUD
          </a>
        </div>
      </div>
    </Container>
  );
};
