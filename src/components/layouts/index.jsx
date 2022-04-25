import styled from "styled-components";
import { Anchor } from "..";
import { colors } from "../../assets";
import { LogoPersian } from "../../common";

const headerBg = colors.headerBackground;
const mainBg = colors.mainBackground;
const textColor = colors.text;

const MainLayoutContainer = styled.div`
  min-height: calc(100vh - 4.5rem);
  max-width: 100vw;
  background-color: ${mainBg};
`;

const Header = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  width: 100vw;
  height: 4.5rem;
  padding: 0 10%;
  box-sizing: border-box;
  background-color: ${headerBg};
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.05);
  direction: rtl;
  text-align: right;
  align-items: center;
  justify-content: center;
  z-index: 100;
`;

const HeaderContent = styled.div`
  display: flex;
  width: 100%;
  /* max-width: 75rem; */
  align-items: center;
`;

const Left = styled.span`
  margin-right: auto;
  display: inline-flex;
  max-height: 3rem;
  max-width: 6rem;
`;

const Content = styled.div`
  //space to top as much as the height of the header
  margin-top: 4.5rem;
  padding: 2rem 10%;
  direction: rtl;
`;

export const MainLayout = ({ children }) => {
  const headerLinks = [
    { key: 1, title: "خانه", href: "/home" },
    {
      key: 2,
      title: "درباره ما",
      href: "/aboutUs",
    },
  ];

  const Title = styled.span`
    font-weight: bold;
    font-size: clamp(1rem, 100%, 1.5rem);
    line-height: 2;
    margin-left: 1.5%;
    color: ${textColor};
    font-family: IRANSans;

    @media screen and (max-width: 600px) {
      display: none;
    }
  `;

  return (
    <MainLayoutContainer>
      <Header>
        <HeaderContent>
          <>
            <Title>مدیریت امور مشتریان ترابرنت</Title>

            {headerLinks?.map((headerLink) => (
              <Anchor
                key={headerLink?.key}
                size="1"
                lineHeight="2"
                margin="0 1.5%"
                textDecoration="none"
                color={textColor}
                href={headerLink?.href}
              >
                {headerLink?.title}
              </Anchor>
            ))}
          </>
          <Left>
            <LogoPersian />
          </Left>
        </HeaderContent>
      </Header>

      <Content>{children}</Content>
    </MainLayoutContainer>
  );
};
