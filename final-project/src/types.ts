import { FormEvent } from "react";

export type Product = {
  id: number;
  name: string;
  brand: string;
  description: string;
  sideEffects: string[];
}

type SideEffectType = {
  name: string;
  amount: number;
}

export type SideEffects = {
  medicament: string;
  sideEffects: SideEffectType[];
}

export type SelectFormEvent = FormEvent<HTMLFormElement> & {
  target: {
    selected: { value: string }
  }
}