import styled from "styled-components";

export const StyledTimeline = styled.div`
  flex: 1;
  width: 100%;
  padding: 16px;
  overflow: hidden;

  h2 {
    font-size: 16px;
    margin-bottom: 16px;
    text-transform: capitalize;
  }

  img {
    aspect-ratio: 16/9;
    font-weight: 500;
    object-fit: cover;
    width: 100%;
    max-width: 210px;
    height: auto;

    border-radius: 6px;
  }

  section {
    width: 100%;
    padding: 0;
    overflow: hidden;
    padding: 16px;

    div {
      width: calc(100vw - 16px * 4);
      display: grid;
      grid-gap: 16px;
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      grid-auto-flow: column;
      grid-auto-columns: minmax(200px, 1fr);
      padding-bottom: 5px;
      overflow-x: scroll;
      scroll-snap-type: x mandatory;

      &::-webkit-scrollbar {
        width: 2px;
        height: 10px;
      }

      &::-webkit-scrollbar-track {
        background: ${({ theme }) => theme.backgroundLevel1};
      }

      &::-webkit-scrollbar-thumb {
        width: 25%;
        background-color: ${({ theme }) => theme.backgroundLevel2};
        border: 1px solid ${({ theme }) => theme.borderBase};
        border-radius: 34px;
      }

      a {
        scroll-snap-align: start;
        span {
          padding-top: 8px;
          display: block;
          padding-right: 24px;
          color: ${({ theme }) => theme.textColorBase || "#222222"};
        }
      }
    }
  }
`;
