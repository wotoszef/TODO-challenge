import styled from "styled-components";

export const ItemWrapper = styled.li`
  width: 100%;
  display: flex;
  justify-content: center;
  list-style-type: square;
  cursor: pointer;
  gap: 10px;
`;

export const ItemText = styled.span<{ completed?: boolean }>`
  text-decoration: ${(props) => (props.completed ? "line-through" : "none")};
`;

export const UtilButton = styled.button`
  padding: 10px 30px;
  border-radius: 10px;
  background-color: transparent;
  border: 1px solid #3d3d3d;
  cursor: pointer;
`;
