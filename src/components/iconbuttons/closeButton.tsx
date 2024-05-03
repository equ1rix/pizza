import { mock } from "../../helpers";

import IconButton from "./iconButton";
import CloseIcon from "./icons/closeIcon";

type ButtonProps = {
  onClick: () => void;
};

const CloseButton = ({ onClick = mock }: ButtonProps) => (
  <IconButton onClick={onClick}>
    <CloseIcon />
  </IconButton>
);

export default CloseButton;
