"use server";

import { validateString } from "@/lib/utils";

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("email");
  const message = formData.get("message");

  if (!validateString(senderEmail, 50)) {
    return {
      error: "Invalid sender email",
    };
  }

  if (!validateString(message, 2000)) {
    return {
      error: "Invalid message",
    };
  }
};
