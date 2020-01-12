import React from 'react';
import styled from 'styled-components';
import PortfolioItem from './PortfolioItem';

const Container = styled.div`
  min-height: 100vh;
  padding: 16px;
`;

const Header = styled.h2`
  font-size: 24px;
  font-weight: 500;
`;

export default () => {
  return (
    <Container id="portfolio">
      <h1>Portfolio</h1>
      <Header>
        As a software engineer it's important to always have personal projects to make sure to keep up with the latest
        technologies, here's a list of things I'm working on.
      </Header>
      <ul>
        <PortfolioItem label="Invited.events" href="https://invited.events" description="Invitations made simple" />
        <PortfolioItem
          label="The f**k is for lunch?"
          href="https://thefuckisforlunch.com"
          description="What's for lunch?"
        />
        <PortfolioItem label="Dotabook" href="https://dotabook.me" description="Dota 2 tracker" />
        <PortfolioItem
          label="MusicAroundMe.io"
          href="https://musicaroundme.io"
          description="Find a concert next to you"
        />
        <PortfolioItem
          label="Plaid integration prototype"
          href="https://master.d1a0bk4kgw2g23.amplifyapp.com/"
          description="POC to test plaid integration using material UI"
        />
        <PortfolioItem
          label="Website todolist"
          href="https://d3ig7nj0f1npvb.cloudfront.net/"
          description="Todolist with graphql subscriptions"
        />
      </ul>
    </Container>
  );
};
