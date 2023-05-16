import { useCallback } from "react";
import { FIELD_SIZE } from "../../../utils/constants";
import { CandyValue } from "../../Candy/candyValue";
import { checkCandyAlgorithm } from "../../logic/CheckCandyAlgoritm";
import { crashCleaningAlgorithm } from "../../logic/CrashCleaningAlgorithm";
import { Field } from "./getInitialFieldValue"

type SwapCandy = {
    value: CandyValue,
    Y: number,
    X: number,
};
type DragAndDropCandy = {
    field: Field,
    setField: React.Dispatch<React.SetStateAction<Field>>,
    setCrashAnimationFlag: React.Dispatch<React.SetStateAction<boolean>>,
    changesFlag: boolean,
}
let swapCandy: SwapCandy = {
    value: CandyValue.CRASH,
    Y: -1,
    X: -1,
};


export const useDragAndDropCandy = ({ field, setField, setCrashAnimationFlag, changesFlag }: DragAndDropCandy) => {
    const currentField: Field = field.slice(0)
    for (let i = 0; i < FIELD_SIZE; i++) {
        currentField[i] = field[i].slice(0);
    }




    return useCallback(
        (event: React.MouseEvent<HTMLDivElement, MouseEvent>, Y: number, X: number,) => {


            if (event.type === "mousedown" && event.button === 0) {

                swapCandy.value = field[Y][X];
                swapCandy.Y = Y;
                swapCandy.X = X;

            }

            if (event.type === "mouseup" && event.button === 0) {

                if ((X === swapCandy.X + 1) && (Y === swapCandy.Y)) {

                    currentField[Y][X] = swapCandy.value;
                    currentField[Y][X - 1] = field[Y][X];
                    if (crashCleaningAlgorithm({ field: checkCandyAlgorithm({ field: currentField, setCrashAnimationFlag, changesFlag }) })) { setField(currentField); }
                }

                if ((X === swapCandy.X - 1) && (Y === swapCandy.Y)) {

                    currentField[Y][X] = swapCandy.value;
                    currentField[Y][X + 1] = field[Y][X]
                    if (crashCleaningAlgorithm({ field: checkCandyAlgorithm({ field: currentField, setCrashAnimationFlag, changesFlag }) })) { setField(currentField); }
                }

                if ((Y === swapCandy.Y + 1) && (X === swapCandy.X)) {

                    currentField[Y][X] = swapCandy.value;
                    currentField[Y - 1][X] = field[Y][X]
                    if (crashCleaningAlgorithm({ field: checkCandyAlgorithm({ field: currentField, setCrashAnimationFlag, changesFlag }) })) { setField(currentField); }
                }

                if ((Y === swapCandy.Y - 1) && (X === swapCandy.X)) {

                    currentField[Y][X] = swapCandy.value;
                    currentField[Y + 1][X] = field[Y][X]
                    if (crashCleaningAlgorithm({ field: checkCandyAlgorithm({ field: currentField, setCrashAnimationFlag, changesFlag }) })) { setField(currentField); }
                }
            }

            if (event.type === "mousemove" && event.button === 0) {

            }
        }


        ,
        [field]
    )
}