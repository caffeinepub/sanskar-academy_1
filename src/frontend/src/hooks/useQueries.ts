import { useMutation } from "@tanstack/react-query";
import { useActor } from "./useActor";

export interface ContactData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export function useSubmitContact() {
  const { actor } = useActor();
  return useMutation({
    mutationFn: async (data: ContactData) => {
      if (!actor) throw new Error("Not connected");
      await actor.submitContact(
        data.name,
        data.email,
        data.phone,
        data.message,
      );
    },
  });
}
