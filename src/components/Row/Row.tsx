import "./styles.css";
import React, { FC } from "react";
import { Candy } from "../Candy/Candy";
import { CandyValue } from "../Candy/candyValue";
import { PositionField } from "../Field/helpers/getInitialPositionField";

type RowProps = {
    fieldRow: CandyValue[];
    Y: number;
    dragAndDropCandy: (
        event: React.MouseEvent<HTMLDivElement, MouseEvent>,
        Y: number,
        X: number
    ) => void;
    positionField: PositionField;
};

export const Row: FC<RowProps> = ({
    fieldRow,
    Y,
    dragAndDropCandy,
    positionField,
}) => (
    <div className="row">
        {fieldRow.map((candyValue, X) => (
            <Candy
                candyValue={candyValue}
                Y={Y}
                X={X}
                dragAndDropCandy={dragAndDropCandy}
                key={X}
                positionField={positionField}
            />
        ))}
    </div>
);
