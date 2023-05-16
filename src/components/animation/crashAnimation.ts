import { CandyValue } from "../Candy/candyValue";
import { Field } from "../Field/helpers/getInitialFieldValue";

type CrashAnimation = {
    field: Field,
    Y: number,
    X: number,
    setCrashAnimationFlag: React.Dispatch<React.SetStateAction<boolean>>,

}
const duration = 600;

export function crashAnimation({ field, Y, X, setCrashAnimationFlag, }: CrashAnimation) {
    const elem = document.getElementById(`${Y}${X}`);
    let start = performance.now();

    setCrashAnimationFlag(true);

    requestAnimationFrame(function animate(time = performance.now()) {
        let timeFraction = (time - start) / duration;

        if (elem) {
            if (timeFraction < 0.2) {
                switch (field[Y][X]) {
                    case CandyValue.BLUE:
                        elem.classList.add("boom1Blue");
                        requestAnimationFrame(animate);
                        break;
                    case CandyValue.RED:
                        elem.classList.add("boom1Red");
                        requestAnimationFrame(animate);
                        break;
                    case CandyValue.GREEN:
                        elem.classList.add("boom1Green");
                        requestAnimationFrame(animate);
                        break;
                    case CandyValue.PINK:
                        elem.classList.add("boom1Pink");
                        requestAnimationFrame(animate);
                        break;
                }


            };
            if ((timeFraction > 0.2) && (timeFraction < 0.4)) {
                switch (field[Y][X]) {
                    case CandyValue.BLUE:
                        elem.classList.remove("boom1Blue");
                        elem.classList.add("boom2Blue");
                        requestAnimationFrame(animate);
                        break;
                    case CandyValue.RED:
                        elem.classList.remove("boom1Red");
                        elem.classList.add("boom2Red");
                        requestAnimationFrame(animate);
                        break;
                    case CandyValue.GREEN:
                        elem.classList.remove("boom1Green");
                        elem.classList.add("boom2Green");
                        requestAnimationFrame(animate);
                        break;
                    case CandyValue.PINK:
                        elem.classList.remove("boom1Pink");
                        elem.classList.add("boom2Pink");
                        requestAnimationFrame(animate);
                        break;
                }

            };
            if ((timeFraction > 0.4) && (timeFraction < 0.6)) {
                switch (field[Y][X]) {
                    case CandyValue.BLUE:
                        elem.classList.remove("boom2Blue");
                        elem.classList.add("boom3Blue");
                        requestAnimationFrame(animate);
                        break;
                    case CandyValue.RED:
                        elem.classList.remove("boom2Red");
                        elem.classList.add("boom3Red");
                        requestAnimationFrame(animate);
                        break;
                    case CandyValue.GREEN:
                        elem.classList.remove("boom2Green");
                        elem.classList.add("boom3Green");
                        requestAnimationFrame(animate);
                        break;
                    case CandyValue.PINK:
                        elem.classList.remove("boom2Pink");
                        elem.classList.add("boom3Pink");
                        requestAnimationFrame(animate);
                        break;
                }
            };
            if ((timeFraction > 0.6) && (timeFraction < 0.8)) {
                switch (field[Y][X]) {
                    case CandyValue.BLUE:
                        elem.classList.remove("boom3Blue");
                        elem.classList.add("boom4Blue");
                        requestAnimationFrame(animate);
                        break;
                    case CandyValue.RED:
                        elem.classList.remove("boom3Red");
                        elem.classList.add("boom4Red");
                        requestAnimationFrame(animate);
                        break;
                    case CandyValue.GREEN:
                        elem.classList.remove("boom3Green");
                        elem.classList.add("boom4Green");
                        requestAnimationFrame(animate);
                        break;
                    case CandyValue.PINK:
                        elem.classList.remove("boom3Pink");
                        elem.classList.add("boom4Pink");
                        requestAnimationFrame(animate);
                        break;
                }
            };
            if ((timeFraction > 0.8) && (timeFraction < 1)) {
                switch (field[Y][X]) {
                    case CandyValue.BLUE:
                        elem.classList.remove("boom4Blue");
                        elem.classList.add("boom5Blue");
                        requestAnimationFrame(animate);
                        break;
                    case CandyValue.RED:
                        elem.classList.remove("boom4Red");
                        elem.classList.add("boom5Red");
                        requestAnimationFrame(animate);
                        break;
                    case CandyValue.GREEN:
                        elem.classList.remove("boom4Green");
                        elem.classList.add("boom5Green");
                        requestAnimationFrame(animate);
                        break;
                    case CandyValue.PINK:
                        elem.classList.remove("boom4Pink");
                        elem.classList.add("boom5Pink");
                        requestAnimationFrame(animate);
                        break;
                }
            };
            if (timeFraction >= 1) {
                switch (field[Y][X]) {
                    case CandyValue.BLUE:
                        elem.classList.remove("boom5Blue");
                        break;
                    case CandyValue.RED:
                        elem.classList.remove("boom5Red");
                        break;
                    case CandyValue.GREEN:
                        elem.classList.remove("boom5Green");
                        break;
                    case CandyValue.PINK:
                        elem.classList.remove("boom5Pink");
                        break;
                }
                setCrashAnimationFlag(false);
            };
        }


    });
};