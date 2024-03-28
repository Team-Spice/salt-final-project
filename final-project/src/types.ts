import { FormEvent } from "react";

export type Product = {
  id: number;
  name: string;
  brand: string;
  description: string;
  sideEffectList: SideEffectType[];
};

export type SideEffectType = {
  id: number;
  name: string;
};

export type SideEffects = {
  medicament: string;
  sideEffectList: SideEffectType[];
};

export type SelectFormEvent = FormEvent<HTMLFormElement> & {
  target: {
    selected: { value: string };
  };
};
export type ReportType = {
  id: number;
  age: number;
};

export type ReportTypeAll = {
  sideEffectId: number;
  sideEffectName: string;
  amount: number | undefined;
};
