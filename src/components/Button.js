import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background: white;
  border: ${props => (props.noBorder ? 'none' : '2px solid coral')};
  border-radius: 2px;
  padding: ${props => (props.noPaddingLeft ? '8px 16px 8px 0' : '8px 16px')};
  font-size: 24px;
  display: flex;
  align-items: center;
  outline: none;
`;

export default ({
  children,
  noPaddingLeft,
  onClick,
  style,
  noBorder = false,
  Icon = null,
  iconSize = '24px',
  iconColor = 'black',
}) => (
  <Button onClick={onClick} style={style} noBorder={noBorder} noPaddingLeft={noPaddingLeft}>
    {Icon && <Icon size={iconSize} color={iconColor} />}
    <span style={Icon && { paddingLeft: 8 }}>{children}</span>
  </Button>
);
