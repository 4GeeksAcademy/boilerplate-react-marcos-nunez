import MyCard from "../components/Card.jsx";
import { useNavigate } from "react-router";

const cardData = [];

const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <MyCard
        cardText={"Epic card just for existing and say you welcome"}
        cardTitle={"WELCOME WELCOME!"}
        onClickAction={() => {
          navigate("/agenda");
        }}
      ></MyCard>
    </>
  );
};

export default LandingPage;
