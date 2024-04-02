import { mock } from "../../helpers";

import { DeleteButton } from "../iconbuttons";

type CartElementProps = {
  openDetails?: () => void;
  onDelete: () => void;
  size?: number;
  src?: string;
  dough?: string;
  label?: string;
  quantity?: number;
  totalPrice: number;
};

const CartElement = ({
  size = 10,
  onDelete = mock,
  dough = "thin",
  src = "",
  label = "Pepperoni",
  openDetails = mock,
  quantity = 0,
  totalPrice = 0,
}: CartElementProps) => {
  return (
    <div className="flex w-[100%] h-[100px] border-b border-gray-200 justify-between place-items-center p-4">
      <img
        src={src}
        alt={label}
        className="mb-2 max-w-[80px]"
        onClick={openDetails}
      />
      <div className="flex flex-col ml-3">
        <h1 className="text-black font-bold text-xl">{label}</h1>
        <h2 className="text-l text-gray-500">
          {dough}, {size} in
        </h2>
      </div>
      <div>{quantity}</div>
      <div className="text-black font-bold text-xl">{totalPrice}$</div>
      <DeleteButton onClick={onDelete} />
    </div>
  );
};

export default CartElement;
