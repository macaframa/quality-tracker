import * as Styled from "./Page.styled";
import { PageProps } from "./types";
import { Manrope } from "next/font/google";

const manrope = Manrope({ subsets: ["latin"] });

function Page({ children, title, ...rest }: PageProps) {
  return (
    <Styled.Page className={`${manrope.className}`} {...rest}>
      <Styled.PageHeading>{title}</Styled.PageHeading>
      {children}
    </Styled.Page>
  );
}

export default Page;
