import Wrapper from "./MultipleInputInlineWrapper.styled";
import { MultipleInputInlineWrapperProps } from "./types";

function MultipleInputInlineWrapper({ children }: MultipleInputInlineWrapperProps) {
  return <Wrapper>{children}</Wrapper>;
}

export default MultipleInputInlineWrapper;
