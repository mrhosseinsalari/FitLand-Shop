import ButtonIcon from "@/ui/ButtonIcon";
import { ArrowDown2, LoginCurve, User as UserIcon } from "iconsax-react";
import { useRouter } from "next/navigation";
import { FC, Fragment } from "react";
import { User } from "@/types/User";

type UserAccountButtonProps = { user: User };

const UserAccountButton: FC<UserAccountButtonProps> = ({ user }) => {
  const router = useRouter();

  const handleClick = () => {
    if (!user) {
      router.push("/auth");
      return;
    }
  };

  return (
    <ButtonIcon
      variant="neutral"
      onClick={handleClick}
      className="shadow-custom"
    >
      {user ? (
        <Fragment>
          <UserIcon />
          <ArrowDown2 className="stroke-primary-main w-4 h-4" />
        </Fragment>
      ) : (
        <Fragment>
          <LoginCurve />
          <span>ورود</span>
        </Fragment>
      )}
    </ButtonIcon>
  );
};

export default UserAccountButton;
