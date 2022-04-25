import styled from "styled-components";
import { colors } from "../../assets";
import { LogoSun } from "../../common";
import { Span } from "../typography";
import { useNavigate } from "react-router-dom";

const paleScondary = colors.pale.paleSecondary;
const secondary = colors.secondary;
const mildGrey = colors.mildGrey;

const CardContainer = styled.div`
  border-radius: 1rem;
  padding: 1rem;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  min-height: 15rem;
  box-shadow: 0 0 1rem ${mildGrey};

  svg.logo-sun {
    visibility: hidden;
    position: absolute;
    max-width: 20%;
    opacity: 0.2;
  }
  svg.logo-sun.up {
    top: 0;
    left: 0;
  }
  svg.logo-sun.down {
    bottom: 0;
    right: 0;
    transform: rotate(180deg);
  }

  :hover {
    cursor: pointer;
    box-shadow: 0 0 2rem ${paleScondary};
    transform: scale(1.1);

    span {
      color: ${paleScondary};
    }
    svg.logo-sun {
      visibility: visible;
    }
    & > img {
      opacity: 0.5;
    }
    & > button.detail-button {
      visibility: visible;
    }
  }
`;

const Image = styled.img`
  height: 10rem;
  max-width: 10rem;
`;

const DetailButton = styled.button`
  outline: none;
  border: none;
  background-color: ${secondary};
  border-radius: 0.5rem;
  visibility: hidden;
  color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: IRANSans;
  font-size: 1rem;
  padding: 0.3rem;
  cursor: pointer;
`;

export const Card = ({ image, title, id }) => {
  const navigate = useNavigate();

  if (!image && !title) return null;

  const handleShowDetail = () => {
    navigate(`/${id}`);
  };

  return (
    <CardContainer onClick={handleShowDetail}>
      <Image src={image} alt={title} />
      <Span direction="ltr" textAlign="center" ellipses>
        {title}
      </Span>
      <DetailButton className="detail-button">مشاهده اطلاعات</DetailButton>
      <LogoSun className="logo-sun up" />
      <LogoSun className="logo-sun down" />
    </CardContainer>
  );
};
