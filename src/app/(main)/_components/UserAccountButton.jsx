import ButtonIcon from "@/ui/ButtonIcon";
import { ArrowDown2, LoginCurve, User } from "iconsax-react";
import { useRouter } from "next/navigation";
import { Fragment } from "react";

export default function UserAccountButton({ user }) {
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
          <User />
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
}
