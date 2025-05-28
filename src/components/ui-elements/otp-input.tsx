import React, { useRef } from "react";

export type OTPInputProps = {
  length?: number;
  onChange: (value: string) => void;
};

export const OTPInput: React.FC<OTPInputProps> = ({ length = 6, onChange }) => {
  const inputsRef = useRef<Array<HTMLInputElement | null>>([]);
  const handleChange = (index: number, value: string) => {
    if (!/^[0-9]?$/.test(value)) return;

    const newOTP = inputsRef.current.map((input, i) =>
      i === index ? value : input?.value || ""
    );
    onChange(newOTP.join(""));

    if (value && index < length - 1) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === "Backspace" && !inputsRef.current[index]?.value && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  return (
    <div className="flex justify-center gap-3">
      {Array.from({ length }).map((_, i) => (
        <input
          key={i}
          type="text"
          maxLength={1}
          className="w-[50px] h-[50px] rounded-[12px] border border-[#00000080] bg-white text-center text-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          ref={(el) => {
            inputsRef.current[i] = el;
          }}          
          onChange={(e) => handleChange(i, e.target.value)}
          onKeyDown={(e) => handleKeyDown(e, i)}
        />
      ))}
    </div>
  );
};
