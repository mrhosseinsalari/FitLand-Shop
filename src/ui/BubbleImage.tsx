import { StaticImport } from "next/dist/shared/lib/get-img-props";
import CustomImage from "./CustomImage";
import { FC } from "react";

type BubbleImageProps = {
  src: string | StaticImport;
  size?: number | `${number}`;
  className?: string;
};

const BubbleImage: FC<BubbleImageProps> = ({ src, size, className }) => {
  return (
    <div className={`absolute ${className}`}>
      <CustomImage src={src} alt="bubbles-image" width={size} height={size} />
    </div>
  );
};

export default BubbleImage;
