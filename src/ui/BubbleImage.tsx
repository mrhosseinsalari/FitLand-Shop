import { StaticImport } from "next/dist/shared/lib/get-img-props";
import CustomImage from "./CustomImage";

type BubbleImageProps = {
  src: string | StaticImport;
  size?: number | `${number}`;
  className?: string;
};

export default function BubbleImage({
  src,
  size,
  className,
}: BubbleImageProps) {
  return (
    <div className={`absolute ${className}`}>
      <CustomImage src={src} alt="bubbles-image" width={size} height={size} />
    </div>
  );
}
