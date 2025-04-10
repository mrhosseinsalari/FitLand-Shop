import OTPInput from "react-otp-input";

export default function CustomOtpInput({ value, onChange }) {
  return (
    <OTPInput
      value={value}
      onChange={onChange}
      numInputs={6}
      renderInput={(props) => <input type="number" {...props} />}
      shouldAutoFocus
      containerStyle="flex flex-row-reverse gap-x-2 justify-center"
      inputStyle={{
        width: "100%",
        maxWidth: "2.8rem",
        padding: "0.5rem 0.2rem",
        border: "1px solid var(--color-neutral-600)",
        borderRadius: "0.5rem",
        fontSize: "1.125rem",
        color: "var(--color-secondary-850)",
      }}
    />
  );
}
