import "./styles.css";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { getInitialFieldValue } from "./helpers/getInitialFieldValue";
import { Row } from "../Row/Row";
import { checkCandyAlgorithm } from "../logic/CheckCandyAlgoritm";
import { crashCleaningAlgorithm } from "../logic/CrashCleaningAlgorithm";
import { candyGenerationAlgorithm } from "../logic/CandyGenerationAlgoritm";
import { useDragAndDropCandy } from "./helpers/useDragAndDropCandy";

import { checkChangesField } from "./helpers/checkChangesField";
import { getInitialPositionField } from "./helpers/getInitialPositionField";
import { checkPositionAnimationFinish } from "../logic/CheckPositionAnimationFinish";
import { positionAnimation } from "../animation/positionAnimation";

export const Field = () => {
    const [field, setField] = useState(getInitialFieldValue());
    const [positionField, setPositionField] = useState(
        getInitialPositionField()
    );
    const [crashAnimationFlag, setCrashAnimationFlag] = useState(false);
    // const crashAnimationFlag = useRef(false);
    const changesFlag = useRef(false);
    useEffect(() => {
        if (!crashAnimationFlag) {
            if (checkPositionAnimationFinish({ positionField })) {
                if (crashCleaningAlgorithm({ field }) === false) {
                    if (
                        checkChangesField({
                            field,
                            currentField: checkCandyAlgorithm({
                                field,
                                setCrashAnimationFlag,
                                changesFlag: (changesFlag.current = false),
                            }),
                        })
                    ) {
                        return setField(
                            checkCandyAlgorithm({
                                field,
                                setCrashAnimationFlag,
                                changesFlag: (changesFlag.current = true),
                            })
                        );
                    }
                } else {
                    if (
                        checkChangesField({
                            field,
                            currentField: candyGenerationAlgorithm({
                                field,
                                positionField,
                                setPositionField,
                            }),
                        })
                    ) {
                        return setField(
                            candyGenerationAlgorithm({
                                field,
                                positionField,
                                setPositionField,
                            })
                        );
                    }
                }
            } else {
                window.requestAnimationFrame(() =>
                    positionAnimation({
                        positionField,
                        setPositionField,
                    })
                );
            }
        }
    }, [field, positionField, crashAnimationFlag]);

    const dragAndDropCandy = useDragAndDropCandy({
        field,
        setField,
        setCrashAnimationFlag,
        changesFlag: (changesFlag.current = false),
    });

    return (
        <div>
            <div className="field">
                {field.map((fieldRow, Y) => (
                    <Row
                        fieldRow={fieldRow}
                        Y={Y}
                        dragAndDropCandy={dragAndDropCandy}
                        key={Y}
                        positionField={positionField}
                    />
                ))}
            </div>
        </div>
    );
};
