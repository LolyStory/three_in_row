import { FIELD_SIZE, ROW_SIZE } from "../../utils/constants";
import { PositionField } from "../Field/helpers/getInitialPositionField";
import { checkPositionAnimationFinish } from "../logic/CheckPositionAnimationFinish";

type PositionAnimation = {
    positionField: PositionField;
    setPositionField: React.Dispatch<React.SetStateAction<PositionField>>;

}

export function positionAnimation({ positionField, setPositionField, }: PositionAnimation) {
    const currentPositionField = positionField.slice(0);
    for (let i = 0; i < FIELD_SIZE; i++) {
        currentPositionField[i] = positionField[i].slice(0);
        for (let k = 0; k < ROW_SIZE; k++) {
            if (currentPositionField[i][k] < 0) currentPositionField[i][k] = currentPositionField[i][k] + 2;
        }
    }
    // if (checkPositionAnimationFinish({ positionField: currentPositionField })) {

    //     setPositionField(currentPositionField);
    //     positionAnimationFlag.current = true;
    // } else {
    //     setPositionField(currentPositionField);
    //     window.requestAnimationFrame(() => positionAnimation({ positionField, setPositionField, positionAnimationFlag }));
    // }
    setPositionField(currentPositionField);

};