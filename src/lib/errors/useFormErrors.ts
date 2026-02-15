"use client"

import { useEffect } from 'react';
import { FormState } from "@/types/errors";
import toast from 'react-hot-toast';

export function useFormErrors(state: FormState) {
  useEffect(() => {
    if (state?.message) {
      console.log('Toast error:', state.message);
      toast.error(state.message);
    }
  }, [state]);
}
