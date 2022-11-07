import styled from 'styled-components';

export const StyledAluraTubes = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px 8px;
  gap: 5px;

  h2 {
    font-size: 16px;
    margin-bottom: 16px;
    text-transform: capitalize;
  }

  #aluratubers {
    display: flex;
    flex-direction: row;
    width: 90%;
    gap: 16px;

    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 4px;

      img {
        width: 87px;
        height: 87px;
        border-radius: 50%;
      }

      p {
        font-size: 13px;
      }
    }
  }
`
