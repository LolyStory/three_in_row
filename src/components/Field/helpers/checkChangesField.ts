import { FIELD_SIZE, ROW_SIZE } from "../../../utils/constants";
import { Field } from "./getInitialFieldValue"


type CheckChangesField = { field: Field; currentField: Field }

export const checkChangesField = ({ field, currentField }: CheckChangesField) => {
    let current = 0;

    for (let i = 0; i < FIELD_SIZE; i++) {
        for (let k = 0; k < ROW_SIZE; k++) {
            if (field[i][k] === currentField[i][k]) current++;
        }
    }

    if (current === 100) return false; else return true;
}