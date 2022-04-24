import styled from "styled-components";
import { Anchor, Span } from "..";
import { colors } from "../../assets";
import { LogoPersian } from "../../common";

const headerBg = colors.headerBackground;
const mainBg = colors.mainBackground;
const greyishText = colors.greyishText;

const MainLayoutContainer = styled.div`
  min-height: 100vh;
  max-width: 100vw;
  background-color: ${mainBg};
`;

const Header = styled.header`
  display: flex;
  position: fixed;
  top: 0;
  width: 100vw;
  height: 4.5rem;
  box-sizing: border-box;
  background-color: ${headerBg};
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.05);
  direction: rtl;
  text-align: right;
  align-items: center;
  justify-content: center;
  z-index: 100;
  padding: 0 10%;
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

  return (
    <MainLayoutContainer>
      <Header>
        <HeaderContent>
          <>
            <Span
              bold
              size="1.25"
              lineHeight="2"
              margin="0 0 0 1.5%"
              color={greyishText}
            >
              مدیریت امور مشتریان ترابرنت
            </Span>

            {headerLinks?.map((headerLink) => (
              <Anchor
                key={headerLink?.key}
                size="1"
                lineHeight="2"
                margin="0 1.5%"
                textDecoration="none"
                color={greyishText}
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
