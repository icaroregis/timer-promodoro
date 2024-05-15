import { ActionTypes } from "./reducer.types";
import { ICycle } from "../contexts/CycleContext/CycleContext.types";

export function addNewCycleAction(newCycle: ICycle) {
  return {
    type: ActionTypes.ADD_NEW_CYCLE,
    payload: { newCycle },
  };
}

export function markCurrentCycleAsFinishedAction() {
  return {
    type: ActionTypes.MARK_CURRENT_CYCLE_AS_FINISHED,
  };
}

export function InterruptCurrentCycleAction() {
  return {
    type: ActionTypes.INTERRUPT_CURRENT_CYCLE,
  };
}
