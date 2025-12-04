import { FormState } from "@/app/action/action";

export type InputProps = {
  dataInput: string;
  type: React.InputHTMLAttributes<HTMLInputElement>["type"];
  placeholder?: string;
  defaultValue?: string | number;
  state?: FormState;
};

const SubscriptionInput = ({
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
      className="border-b-2 border-b-(--white) p-2 pl-5 w-full max-w-[500px] h-[60px]"
      type={type}
      name={dataInput}
      placeholder={placeholder}
      defaultValue={defaultValue ?? ""}
    />
  );
};

export default SubscriptionInput;
