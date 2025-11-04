import { FC } from "react";
import { ThreeDots } from "react-loader-spinner";

type LoadingProps = {
  height?: string | number;
  width?: string | number;
};

const Loading: FC<LoadingProps> = ({ width = "75", height = "40" }) => {
  return (
    <ThreeDots
      height={height}
      width={width}
      radius={9}
      color="var(--color-primary-main)"
      visible={true}
      wrapperStyle={{
        display: "flex",
        justifyContent: "center",
      }}
    />
  );
};

export default Loading;
