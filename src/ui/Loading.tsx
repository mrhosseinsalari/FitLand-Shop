import { ThreeDots } from "react-loader-spinner";

type LoadingProps = {
  height?: string | number;
  width?: string | number;
};

function Loading({ width = "75", height = "40" }: LoadingProps) {
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
}

export default Loading;
