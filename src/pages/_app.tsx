import "@/root/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { Theme } from "../styles/theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={Theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
