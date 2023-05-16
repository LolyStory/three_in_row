import "./styles.css";
import React, { FC, useEffect, useRef, useState } from "react";
import { CandyValue } from "./candyValue";
import { PositionField } from "../Field/helpers/getInitialPositionField";

type CandyProps = {
    candyValue: CandyValue;
    Y: number;
    X: number;
    dragAndDropCandy: (
        event: React.MouseEvent<HTMLDivElement, MouseEvent>,
        Y: number,
        X: number
    ) => void;
    positionField: PositionField;
};

export const Candy: FC<CandyProps> = ({
    candyValue,
    X,
    Y,
    dragAndDropCandy,
    positionField,
}) => {
    return (
        <div
            id={`${Y}${X}`}
            className={`candy ${candyValue}`}
            onMouseDown={(event) => {
                dragAndDropCandy(event, Y, X);
            }}
            onMouseUp={(event) => {
                dragAndDropCandy(event, Y, X);
            }}
            onMouseMove={(event) => {
                dragAndDropCandy(event, Y, X);
            }}
            onDragStart={(event) => {
                event.preventDefault();
            }}
            style={{ top: `${positionField[Y][X]}px` }}
        />
    );
};
