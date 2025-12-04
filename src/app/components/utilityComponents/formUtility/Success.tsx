import { FormState } from "@/app/action/action";

type SuccessProps = {
  state?: FormState;
  text: string;
};

const Success = ({ state, text }: SuccessProps) => {
  if (!state?.success) return null;

  return (
    <div>
      <p className="text-green-400 font-semibold text-sm text-center">{text}</p>
    </div>
  );
};

export default Success;
