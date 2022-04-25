import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Span } from "../../components";
import { StarRating } from "../../components/starRating";
import { numberCommaSplitter, toFaNumber } from "../../utils";

const Container = styled.div`
  display: grid;
  background-color: white;
  border-radius: 0.5rem;
  padding: 2rem;
  grid-template-areas: "details imageAndPrice" "desc desc";
  grid-template-columns: auto 15rem;

  @media screen and (max-width: 720px) {
    grid-template-areas: "imageAndPrice" "details" " desc";
    grid-template-columns: auto;
  }
`;

const Details = styled.div`
  grid-area: details;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  & > * {
    text-align: justify;
    max-width: 90%;
  }
`;

const IamgeAndPrice = styled.div`
  grid-area: imageAndPrice;
  display: flex;
  flex-direction: column;
  place-self: center;
`;

const Image = styled.img`
  width: 100%;
  margin-bottom: 1rem;
  max-width: 15rem;
`;

const Description = styled.div`
  grid-area: desc;
`;

export const ItemDetail = () => {
  const { id } = useParams();
  const { products } = useSelector((state) => state?.productsList);
  const item = products.filter((product) => product?.id == id)[0];

  if (!item) return <Span>محصول مورد نظر شما یافت نشد!</Span>;

  return (
    <Container>
      <Details>
        <Span bold size="1.5">
          {item?.title}
        </Span>
        <Span>
          <strong>دسته بندی: </strong>
          <Span>{item?.category}</Span>
        </Span>
        <Span>
          <strong>امتیاز: </strong>
          <StarRating rate={item?.rating?.rate} />
          <Span size="0.7">
            ({toFaNumber(numberCommaSplitter(item?.rating?.count))} رای)
          </Span>
        </Span>
        <Span>
          <strong>توضیحات: </strong>
          <br />
          <Span>{item?.description}</Span>
        </Span>
      </Details>
      <IamgeAndPrice>
        <Image src={item?.image} alt={item?.title} />
        <Span textAlign="center">
          <Span bold color="seaGreen" size="2">
            {toFaNumber(numberCommaSplitter(item?.price * 10000))}
          </Span>{" "}
          تومان
        </Span>
      </IamgeAndPrice>
      <Description></Description>
    </Container>
  );
};
