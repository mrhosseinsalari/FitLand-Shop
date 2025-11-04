import { Cart } from "@/types/Cart";
import ButtonIcon from "@/ui/ButtonIcon";
import { toPersianDigits } from "@/utils/numberFormatter";
import { Bag2 } from "iconsax-react";
import { FC } from "react";

type CartButtonProps = { cart: Cart };

const CartButton: FC<CartButtonProps> = ({ cart }) => {
  return (
    <div className="relative">
      <div
        className="absolute -top-1 -left-1 w-4 h-4 bg-secondary-main 
        rounded-full text-white flex justify-center items-center text-sm font-light"
      >
        {toPersianDigits(cart ? cart.payDetail.productIds.length : 0)}
      </div>
      <ButtonIcon variant="primary">
        <Bag2 />
      </ButtonIcon>
    </div>
  );
};

export default CartButton;
