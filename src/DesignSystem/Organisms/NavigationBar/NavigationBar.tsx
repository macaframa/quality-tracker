import * as Styled from "./NavigationBar.styled";
import { Rocket } from "@phosphor-icons/react";
import { Manrope } from "next/font/google";
import Link from "next/link";

const manrope = Manrope({ subsets: ["latin"] });

const links = [
  { title: "My Properties", href: "/myproperties" },
  { title: "Products", href: "/products" },
  { title: "Services", href: "/services" },
];

function NavigationBar() {
  return (
    <Styled.NavigationBar className={`${manrope.className}`}>
      <Rocket size={32} />
      <Styled.Links>
        {links.map(({ title, href }, key) => (
          <Link href={href}>{title}</Link>
        ))}
      </Styled.Links>
    </Styled.NavigationBar>
  );
}

export default NavigationBar;
