import { createContext, useEffect, useReducer, useState } from "react";
import {
  ICycle,
  ICreateCycleData,
  ICycleContextType,
  ICyclesContextProvidersProps,
} from "./CycleContext.types";
import {
  InterruptCurrentCycleAction,
  addNewCycleAction,
  cyclesReducer,
  markCurrentCycleAsFinishedAction,
} from "../../reducers";
import { differenceInSeconds } from "date-fns";

export const CyclesContext = createContext({} as ICycleContextType);

export function CyclesContextProvider({
  children,
}: ICyclesContextProvidersProps) {
  /*
  useReducer =>
  state: valor atual em tempo real da variável de ciclos.
  action: ações que o usuário pode realizar para modificar o estado(cyles)
  */
  const [cyclesState, dispatch] = useReducer(
    cyclesReducer,
    {
      cycles: [],
      activeCycleId: null,
    },
    () => {
      const storedStateAsJSON = localStorage.getItem(
        "@timer-promodoro:cycles-state-1.0.0"
      );

      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON);
      }
    }
  );

  const { cycles, activeCycleId } = cyclesState;
  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId);
  const [amountSecondsPassed, setAmountSecondsPassed] = useState(() => {
    if (activeCycle) {
      return differenceInSeconds(new Date(), new Date(activeCycle.startDate));
    }

    return 0;
  });

  function setSecondsPassed(seconds: number) {
    setAmountSecondsPassed(seconds);
  }

  function markCurrentCycleAsFinished() {
    dispatch(markCurrentCycleAsFinishedAction());
  }

  function CreateNewCycle(data: ICreateCycleData) {
    const id = String(new Date().getTime());

    const newCycle: ICycle = {
      id,
      task: data.task,
      minutesAmount: data.minutesAmount,
      startDate: new Date(),
    };

    dispatch(addNewCycleAction(newCycle));
    setAmountSecondsPassed(0);
  }

  function InterruptCurrentCycle() {
    dispatch(InterruptCurrentCycleAction());
  }

  useEffect(() => {
    const stateJSON = JSON.stringify(cyclesState);
    localStorage.setItem("@timer-promodoro:cycles-state-1.0.0", stateJSON);
  }, [cyclesState]);

  return (
    <CyclesContext.Provider
      value={{
        cycles,
        activeCycle,
        activeCycleId,
        markCurrentCycleAsFinished,
        amountSecondsPassed,
        setSecondsPassed,
        CreateNewCycle,
        InterruptCurrentCycle,
      }}
    >
      {children}
    </CyclesContext.Provider>
  );
}
