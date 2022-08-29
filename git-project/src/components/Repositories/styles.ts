import styled from "styled-components";

// export const RepoContainer = styled.section`
  /* width: 100vw;
  margin-top: 20px;

  header {
    display: flex;
    gap: 12px;
    width: 20%;
    padding: 0;
    border-bottom: 1px solid red;
    margin-bottom: 20px;

    h2 {
      font-size: 14px;
      margin-bottom: 20px;

      span {
        min-height: 20px;
        background-color: rgba(175, 184, 193, 0.2);
        padding: 20px;
        border-radius: 50%;
        min-width: 20px;
        padding: 0 6px;
        font-size: 12px;
        font-weight: 500;
      }
    }
  }

  main {
    margin-bottom: 30px;
  }
  a {
    text-decoration: none;
    color: #0969da;
  }

  span{
    font-size: 12px;
  }

  p {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  hr {
    width: 90%;
  }

  li {
    list-style-type: none;
  }

  div {
    display: flex;
    align-items: center;
    gap: 8px;
    margin: 12px 12px;
    font-size: 12px;
  }
`; */

const STATUS_COLORS = {
  yellow: "yellow",
  red: "red",
  blue: "blue",
  gray: "gray",
  pink: 'pink',
} as const;

interface StatusProps {
  statusColor: keyof typeof STATUS_COLORS;
}

export const Status = styled.span<StatusProps>`
  position: relative;
  top: 1px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${(props) => props.theme[STATUS_COLORS[props.statusColor]]};

  &::before {
    content: "";
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 9999px;
    background-color: ${(props) => props.theme[STATUS_COLORS[props.statusColor]]};
  }
`;
