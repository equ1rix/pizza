import { mock } from "../../helpers";

import IconButton from "./iconButton";
import { DeleteIcon } from "./icons";

type ButtonProps = {
  onClick: () => void;
};

const DeleteButton = ({ onClick = mock }: ButtonProps) => (
  <IconButton onClick={onClick}>
    <DeleteIcon />
  </IconButton>
);

export default DeleteButton;
