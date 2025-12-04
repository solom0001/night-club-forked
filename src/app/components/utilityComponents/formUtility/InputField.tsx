import { FormState } from "@/app/action/action";

export type InputProps = {
  dataInput: string;
  type: React.InputHTMLAttributes<HTMLInputElement>["type"];
  placeholder?: string;
  defaultValue?: string | number;
  state?: FormState;
};

const InputField = ({
  state,
  dataInput,
  type,
  placeholder,
  defaultValue,
}: InputProps) => {
  const hasError = state?.error?.[dataInput];
  console.log(hasError);

  return (
    <input
      className="border-2 border-(--white) p-2 pl-5 max-w-[704px] h-[85px]"
      type={type}
      name={dataInput}
      placeholder={placeholder}
      defaultValue={defaultValue ?? ""}
    />
  );
};

export default InputField;
