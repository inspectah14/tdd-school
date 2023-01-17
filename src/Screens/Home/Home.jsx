import Lists from "../../Components/Lists/RenderLists/Lists";
import styled from "styled-components";

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Home = () => {
  return (
    <StyledMain>
      <Lists />
    </StyledMain>
  );
};

export default Home;
