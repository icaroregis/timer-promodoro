import { ReactNode } from "react";

export interface ICreateCycleData {
  task: string;
  minutesAmount: number;
}

export interface ICycle {
  id: string;
  task: string;
  minutesAmount: number;
  startDate: Date;
  interruptedDate?: Date;
  finishedDate?: Date;
}

export interface ICycleContextType {
  cycles: ICycle[];
  activeCycle: ICycle | undefined;
  activeCycleId: string | null;
  markCurrentCycleAsFinished: () => void;
  amountSecondsPassed: number;
  setSecondsPassed: (seconds: number) => void;
  CreateNewCycle: (data: ICreateCycleData) => void;
  InterruptCurrentCycle: () => void;
}

export interface ICyclesContextProvidersProps {
  children: ReactNode;
}
