import React from 'react';
import styled from 'styled-components';

const Label = styled.div`
  font-size: 24px;
`;
const Description = styled.div`
  font-size: 20px;
  font-style: italic;
  color: coral;
`;

const ListItem = styled.li`
  margin: 16px 0;
`;

export default ({ href, label, description }) => {
  return (
    <ListItem>
      <a href={href} target="_blank" rel="noreferrer noopener">
        <Label>{label}</Label>
      </a>
      <Description>{description}</Description>
    </ListItem>
  );
};
