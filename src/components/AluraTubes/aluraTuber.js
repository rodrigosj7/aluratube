import styled from "styled-components";

export const StyledUser = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
  gap: 22px;
  background-color: ${({ theme }) => theme.backgroundBase};

  header {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .banner {
    width: 100%;
    height: 116px;
    background-color: ${({ theme }) => theme.backgroundLevel1};
  }

  .user-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;

    //position: absolute;

    img {
      width: 120px;
      height: 120px;
      padding: 2px;
      border-radius: 50%;
      border: 2px solid #ff0000;
    }

    h2 {
      font-size: 22px;
    }

    span {
      font-size: 16px;
      opacity: .85;
      padding-top: 4px;
      border-top: 2px solid ${({ theme }) => theme.borderBase};
    }
  }

  main {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    border-radius: 6px;
    width: 90vw;
    height: 50px;
    padding: 4px;
    border: 1px solid ${({ theme }) => theme.borderBase};
    background-color: ${({ theme }) => theme.backgroundLevel1};

    a {
      display: flex;
      align-items: center;
      height: 20px;
      text-align: center;
      color: ${({ theme }) => theme.textColorBase};
      padding: 5px;
      border-radius: 34px;
      border: 1px solid ${({ theme }) => theme.borderBase};
      background-color: ${({ theme }) => theme.backgroundLevel2};
    }
  }
`;

