import { FIELD_SIZE, ROW_SIZE } from "../../utils/constants";
import { crashAnimation } from "../animation/crashAnimation";
import { CandyValue } from "../Candy/candyValue";
import { Field } from "../Field/helpers/getInitialFieldValue"

type CheckCandyAlgorithm = {
    field: Field;
    setCrashAnimationFlag: React.Dispatch<React.SetStateAction<boolean>>,
    changesFlag: boolean;
};

export const checkCandyAlgorithm = ({ field, setCrashAnimationFlag, changesFlag }: CheckCandyAlgorithm) => {
    const crashCandyField: number[][] = [];
    const currentField = field.slice(0)

    for (let i = 0; i < FIELD_SIZE; i++) {
        currentField[i] = field[i].slice(0);
    }

    for (let i = 0; i < FIELD_SIZE; i++) {
        crashCandyField[i] = [];
        for (let k = 0; k < ROW_SIZE; k++) {
            crashCandyField[i].push(0);
        }
    }



    for (let i = 0; i < FIELD_SIZE; i++) {
        for (let k = 0; k < ROW_SIZE; k++) {


            if ((i > 0) && (i < FIELD_SIZE - 1)) {
                if ((field[i][k] === field[i - 1][k]) && (field[i][k] === field[i + 1][k])) {
                    if (changesFlag) {
                        crashAnimation({ field, Y: i - 1, X: k, setCrashAnimationFlag, });
                        crashAnimation({ field, Y: i, X: k, setCrashAnimationFlag, });
                        crashAnimation({ field, Y: i + 1, X: k, setCrashAnimationFlag, });
                    }
                    crashCandyField[i - 1][k] = 1;
                    crashCandyField[i][k] = 1;
                    crashCandyField[i + 1][k] = 1;

                }
            }

            if ((k > 0) && (k < ROW_SIZE - 1)) {
                if ((field[i][k] === field[i][k - 1]) && (field[i][k] === field[i][k + 1])) {
                    if (changesFlag) {
                        crashAnimation({ field, Y: i, X: k - 1, setCrashAnimationFlag, });
                        crashAnimation({ field, Y: i, X: k, setCrashAnimationFlag, });
                        crashAnimation({ field, Y: i, X: k + 1, setCrashAnimationFlag, });
                    }

                    crashCandyField[i][k - 1] = 1;
                    crashCandyField[i][k] = 1;
                    crashCandyField[i][k + 1] = 1;

                }
            }

        }
    }

    for (let i = 0; i < FIELD_SIZE; i++) {
        for (let k = 0; k < ROW_SIZE; k++) {

            if (crashCandyField[i][k] === 1) {
                currentField[i][k] = CandyValue.CRASH;
            }

        }
    }


    return currentField;

}