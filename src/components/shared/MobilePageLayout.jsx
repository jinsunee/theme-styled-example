import styled from "styled-components";

export default function MobilePageLayout({ children }) {
  return <MobilePageLayoutContainer>{children}</MobilePageLayoutContainer>;
}

const MobilePageLayoutContainer = styled.div`
  width: 400px;
  padding: 20px;
  margin: auto;
  box-sizing: border-box;
  min-height: 100vh;
  background: #fff;
`;
