"use server";

import { z } from "zod";

const userMail = z.object({
  subscriptionMail: z
    .string()
    .email("Please be sure the input is a valid Email"),
});

type UserInput = z.infer<typeof userMail>;

export type FormState = {
  success: boolean;
  data?: UserInput;
  error?: Record<string, string[]>;
};

export async function submitMail(
  prevState: FormState | undefined,
  formData: FormData
): Promise<FormState> {
  const rawData: UserInput = {
    subscriptionMail: formData.get("subscriptionMail") as string,
  };

  const parsed = userMail.safeParse(rawData);

  if (!parsed.success) {
    return {
      success: false,
      error: parsed.error.flatten().fieldErrors,
    };
  }

  try {
    await new Promise((resolve) => setTimeout(resolve, 2000));

    const response = await fetch("http://localhost:4000/newsletters", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        data: {
          email: parsed.data.subscriptionMail,
        },
      }),
    });

    return {
      success: true,
      data: parsed.data,
      error: {},
    };
}

