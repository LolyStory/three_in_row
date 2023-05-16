import { FIELD_SIZE, ROW_SIZE } from "../../../utils/constants";


export type PositionField = number[][];

export const getInitialPositionField = () => {
    const initialPositionField: PositionField = [];

    for (let i = 0; i < FIELD_SIZE; i++) {
        initialPositionField[i] = [];
        for (let k = 0; k < ROW_SIZE; k++) {
            initialPositionField[i][k] = -80;
        }
    }
    return initialPositionField;
};
