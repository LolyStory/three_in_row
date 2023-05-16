import { FIELD_SIZE, ROW_SIZE } from "../../../utils/constants";
import { CandyValue } from "../../Candy/candyValue";

export type Field = CandyValue[][]

export const getInitialFieldValue = () => {
    const initialFieldValue: Field = [];

    for (let i = 0; i < FIELD_SIZE; i++) {
        initialFieldValue[i] = [];
        for (let k = 0; k < ROW_SIZE; k++) {
            initialFieldValue[i].push(CandyValue.CRASH);
            // switch (Math.floor(Math.random() * 4)) {
            //     case 0:
            //         initialFieldValue[i].push(CandyValue.RED);
            //         break;
            //     case 1:
            //         initialFieldValue[i].push(CandyValue.GREEN);
            //         break;
            //     case 2:
            //         initialFieldValue[i].push(CandyValue.BLUE);
            //         break;
            //     case 3:
            //         initialFieldValue[i].push(CandyValue.PINK);
            //         break;
            // }
        }
    }
    return initialFieldValue;
};
