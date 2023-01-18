import ReactDOM from "react-dom";
import styled from "styled-components";

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 8;
  background: rgba(0, 0, 0, 0.4);
`;

const Card = styled.div`
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 10px;
  position: fixed;
  top: 30vh;
  left: 10%;
  width: 80%;
  z-index: 8;
  overflow: hidden;

  @media (min-width: 800px) {
    left: calc(50% - 20rem);
    width: 40rem;
  }
`;

const Header = styled.div`
  background: #0b1316;
  padding: 1rem;
`;

const H4 = styled.h4`
  margin: 0;
  color: white;
  font-weight: 400;
  text-align: center;
`;

const ContentContainer = styled.div`
  padding: 1rem;
`;

const ModalOverlay = (props) => {
  return (
    <Card>
      <Header>
        <H4>{props.title}</H4>
      </Header>
      <ContentContainer>{props.children}</ContentContainer>
    </Card>
  );
};

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Overlay />,
        document.querySelector("#overlay-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay title={props.title}>{props.children}</ModalOverlay>,
        document.querySelector("#modal-root")
      )}
    </>
  );
};

export default Modal;
