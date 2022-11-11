import styled from 'styled-components';

export const List = styled.ul`
  display: flex;

  padding: 0;
  margin: 0;
  list-style: none;
`;

export const ListItem = styled.li`
  margin-right: 5px;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 2px 5px;
  border: 1px solid lightgray;
  border-radius: 4px;

  background-color: white;

  font-weight: 600;
  font-size: 12px;

  cursor: pointer;

  :hover,
  :focus {
    color: white;
    background-color: #009c7d;
    border: 1px solid #003c31;
  }
`;
