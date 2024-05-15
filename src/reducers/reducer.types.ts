import { ICycle } from "../contexts/CycleContext/CycleContext.types";

export interface CyclesState {
  cycles: ICycle[];
  activeCycleId: string | null;
}

export enum ActionTypes {
  ADD_NEW_CYCLE = "ADD_NEW_CYCLE",
  INTERRUPT_CURRENT_CYCLE = "INTERRUPT_CURRENT_CYCLE",
  MARK_CURRENT_CYCLE_AS_FINISHED = "MARK_CURRENT_CYCLE_AS_FINISHED",
}
