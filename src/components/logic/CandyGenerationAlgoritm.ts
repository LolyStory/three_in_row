import { FIELD_SIZE, ROW_SIZE } from "../../utils/constants";
import { CandyValue } from "../Candy/candyValue";
import { Field } from "../Field/helpers/getInitialFieldValue";
import { PositionField } from "../Field/helpers/getInitialPositionField";

type CandyGenerationAlgorithm = {
    field: Field;
    positionField: PositionField;
    setPositionField: React.Dispatch<React.SetStateAction<PositionField>>;
};

export const candyGenerationAlgorithm = ({ field, positionField,
    setPositionField, }: CandyGenerationAlgorithm) => {
    const currentField = field.slice(0)
    const currentPositionField = positionField.slice(0)
    for (let i = 0; i < FIELD_SIZE; i++) {
        currentField[i] = field[i].slice(0);
        currentPositionField[i] = positionField[i].slice(0);
    }


    for (let i = FIELD_SIZE - 1; i >= 0; i--) {
        for (let k = 0; k < ROW_SIZE; k++) {
            if (i > 0) {
                if (currentField[i][k] === CandyValue.CRASH) {
                    currentField[i][k] = currentField[i - 1][k];
                    currentPositionField[i][k] = -80;
                    currentField[i - 1][k] = CandyValue.CRASH;

                }
            } else if (i === 0) {
                if (currentField[i][k] === CandyValue.CRASH) {
                    currentPositionField[i][k] = -80;
                    switch (Math.floor(Math.random() * 4)) {
                        case 0:
                            currentField[i][k] = CandyValue.RED;
                            break;
                        case 1:
                            currentField[i][k] = CandyValue.GREEN;
                            break;
                        case 2:
                            currentField[i][k] = CandyValue.BLUE;
                            break;
                        case 3:
                            currentField[i][k] = CandyValue.PINK;
                            break;
                    }
                }
            }
        }
    }


    setPositionField(currentPositionField);
    return currentField;
}