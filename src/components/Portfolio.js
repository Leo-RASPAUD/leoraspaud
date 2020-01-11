import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  min-height: 100vh;
`;

export default () => {
  return (
    <Container id="portfolio">
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
        <div>
          <p>Youtube channels:</p>
          <li>
            <a
              href="https://www.youtube.com/channel/UC-BgJSCQ-7ZND43Qo_t8-LA?view_as=subscriber"
              target="_blank"
              rel="noreferrer noopener"
            >
              CSS-tricks
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/channel/UCgVmj-dtqY7Lq9enJ076C2w?view_as=subscriber"
              target="_blank"
              rel="noreferrer noopener"
            >
              Léo Raspaud
            </a>
          </li>
        </div>
      </div>
    </Container>
  );
};
