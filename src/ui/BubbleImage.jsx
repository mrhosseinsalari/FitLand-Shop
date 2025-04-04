import CustomImage from "./CustomImage";

export default function BubbleImage({ src, size, className }) {
  return (
    <div className={`absolute ${className}`}>
      <CustomImage src={src} alt="bubbles-image" width={size} height={size} />
    </div>
  );
}
