import { FormState } from "@/app/action/action";

type ErrorProps = {
  state?: FormState;
  stateType: keyof FormState["error"] | string;
};

const Error = ({ state, stateType }: ErrorProps) => {
  const messages = state?.error?.[stateType];

  if (!messages || messages.length === 0) return null;

  return (
    <div>
      {messages.map((msg, i) => (
        <p key={i} className="text-(--red) font-semibold">
          {msg}
        </p>
      ))}
    </div>
  );
};

export default Error;
