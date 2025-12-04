import { FormState } from "@/app/action/action";
import InputField from "../utilityComponents/formUtility/InputField";

export type FormProps = {
  state?: FormState;
  postUser: (formData: FormData) => Promise<FormState>;
  children?: React.ReactNode;
};

const BookForm = ({ state, postUser, children }: FormProps) => {
  return (
    <form action={postUser} className="flex flex-col gap-4">
      <InputField
        state={state}
        dataInput="username"
        type="text"
        placeholder="Username"
        defaultValue={state?.data?.username ?? ""}
      ></InputField>
    </form>
  );
};

export default BookForm;
