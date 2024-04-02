import { mock } from "../../helpers";

type ElementCustomizationProps = {
  id?: number;
  label: string;
  onClick: () => void;
  isActive: boolean;
};

const ElementCustomization = ({
  id,
  label,
  onClick = mock,
  isActive = false,
}: ElementCustomizationProps) => {
  const elementStyle = isActive
    ? "bg-white min-w-[75px] h-[35px] rounded-lg flex-grow flex items-center justify-center text-base"
    : "min-w-[75px] flex-grow flex items-center justify-center text-base";
  return (
    <li key={id} className={elementStyle} onClick={onClick}>
      {label}
    </li>
  );
};

export default ElementCustomization;
