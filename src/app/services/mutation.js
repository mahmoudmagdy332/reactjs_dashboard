import { useMutation } from "@tanstack/react-query";
import { postLoginUserAPI } from "./api";


export function useLoginMutation() {
    return useMutation({
      mutationFn: (data) => {
        return postLoginUserAPI(data);
      },
  
      onError: (err) => {
        console.error("Login error", err);
        return err;
      }
    });
  }