import {useState, useEffect, useRef} from "react";

/**
 * A timer that able to start and restart.
 *
 * @param {int} initialSeconds
 * @param {function} callBack
 * @param {int} delayInMilliseconds
 */
const useTimer = (initialSeconds, callBack, delayInMilliseconds) => {
    const [seconds, setSeconds] = useState(initialSeconds);
    const internalRef = useRef();

    const startCountdown = () => {
        let intervalId = setInterval(() => {
            setSeconds(previousSecond => {

                if (previousSecond === 0) {
                    clearInterval(intervalId);
                    internalRef.current = null;
                    callBack();
                    return previousSecond;
                }

                return previousSecond - 1;
            });
        }, delayInMilliseconds);

        internalRef.current = intervalId;
    };

    const restartCountdown = () => {

        // timer is counting, terminate the current intervals.
        if (internalRef.current !== null) {
            clearInterval(internalRef.current);
            internalRef.current = null;
        }

        setSeconds(initialSeconds);
        startCountdown();
    };

    useEffect(() => {
        startCountdown();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return [seconds, restartCountdown];
};

export {useTimer} ;