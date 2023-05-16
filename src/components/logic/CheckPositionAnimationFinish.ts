import { FIELD_SIZE, ROW_SIZE } from "../../utils/constants";
import { PositionField } from "../Field/helpers/getInitialPositionField";


type CheckPositionAnimationFinish = {
    positionField: PositionField;
};

export const checkPositionAnimationFinish = ({ positionField }: CheckPositionAnimationFinish) => {
    let current = 0;

    const currentField = positionField.slice(0);
    for (let i = 0; i < FIELD_SIZE; i++) {
        currentField[i] = positionField[i].slice(0);
    }


    for (let i = 0; i < FIELD_SIZE; i++) {
        for (let k = 0; k < ROW_SIZE; k++) {
            if (currentField[i][k] >= 0) current++;
        }
    }

    if (current === FIELD_SIZE * ROW_SIZE) return true;
    else {
        return false;
    }
}