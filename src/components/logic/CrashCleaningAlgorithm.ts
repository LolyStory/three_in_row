import { FIELD_SIZE, ROW_SIZE } from "../../utils/constants";
import { CandyValue } from "../Candy/candyValue";
import { Field } from "../Field/helpers/getInitialFieldValue";

type CrashCleaningAlgorithm = { field: Field };

export const crashCleaningAlgorithm = ({ field }: CrashCleaningAlgorithm) => {

    for (let i = 0; i < FIELD_SIZE; i++) {
        for (let k = 0; k < ROW_SIZE; k++) {
            if (field[i][k] === CandyValue.CRASH) {
                return true;
            }
        }
    }
    return false;
}