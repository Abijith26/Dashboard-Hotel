import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./components/Button";
import Input from "./components/Input";
import H1 from "./components/Heading";
import Row from "./components/Row";

const StyledApp = styled.div`
  background-color: lime;
  padding: 20px;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Row>
          <Row type="horizontal">
            <H1 as="h1">The Resto Place</H1>
            <div>
              <H1 as="h2">The Resto Place</H1>
              <Button>Check In</Button>
              <Button variation="secondary" size="small">
                Check Out
              </Button>
            </div>
          </Row>
          <Row>
            <H1 as="h3">Enter Details</H1>
            <form>
              <Input type="text" placeholder="Enter your Name"></Input>
              <Input type="text" placeholder="Enter your Name"></Input>
            </form>
          </Row>
        </Row>
      </StyledApp>
    </>
  );
}

export default App;
