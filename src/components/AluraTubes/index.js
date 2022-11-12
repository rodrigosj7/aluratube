import styled from 'styled-components';

export const StyledAluraTubes = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px 8px;
  gap: 5px;

  h2 {
    font-size: 18px;
    margin-bottom: 16px;
    text-transform: capitalize;
    padding-bottom: 3px;
    border-bottom: 2px solid ${({ theme }) => theme.borderBase};
  }

  #aluratubers {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 90%;
    gap: 16px;

    a {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 4px;
      text-decoration: none;
      color: ${({ theme }) => theme.textColorBase};

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
