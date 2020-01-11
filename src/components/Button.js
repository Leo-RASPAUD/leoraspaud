import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background: white;
  border: 2px solid coral;
  border-radius: 2px;
  padding: 8px 16px;
  font-size: 24px;
  display: flex;
  align-items: center;
  outline: none;
`;

export default ({ children, onClick, style }) => (
  <Button onClick={onClick} style={style}>
    {children}
  </Button>
);
