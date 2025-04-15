import styled from 'styled-components/native';

export const DeleteButton = styled.View`
  background-color: red;
  height: ${({ itemHeight }: DeleteButtonProps) => itemHeight}px;
  min-width: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0;
  margin: 0;
`;

type DeleteButtonProps = {
  itemHeight?: number;
};
