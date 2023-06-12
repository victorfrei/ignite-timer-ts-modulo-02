import { useContext, useEffect, } from "react";
import { CountdownContainer, Separator } from "./styles";
import { differenceInSeconds } from "date-fns";
import { CyclesContext } from "../../../../contexts/CyclesContext";



export function Countdown() {

    const { activeCycle, activeCycleId, markCurrentCycleAsFinished, amountSecondsPassed, setSecondsPassed } = useContext(CyclesContext);


    const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0;

    const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0;

    const minutesAmount = Math.floor(currentSeconds / 60);
    const secondsAmount = currentSeconds % 60;

    const minute = String(minutesAmount).padStart(2, "0");
    const seconds = String(secondsAmount).padStart(2, "0");



    useEffect(() => {
        let interval: number;

        if (activeCycle) {
            interval = setInterval(() => {
                const secondsDifference = differenceInSeconds(new Date(), new Date(activeCycle.startDate))

                if (secondsDifference >= totalSeconds) {
                    markCurrentCycleAsFinished();


                    setSecondsPassed(totalSeconds);
                    clearInterval(interval);

                } else {
                    setSecondsPassed(secondsDifference);
                }

            }, 1000)
        }

        return () => {
            clearInterval(interval);
        }
    }, [activeCycle, activeCycleId, totalSeconds, markCurrentCycleAsFinished])


    useEffect(() => {
        if (activeCycle) {
            document.title = `Timer: ${minute}:${seconds}`
        }
    }, [activeCycle, minute, seconds])

    return (
        <CountdownContainer>
            <span>{minute[0]}</span>
            <span>{minute[1]}</span>
            <Separator>:</Separator>
            <span>{seconds[0]}</span>
            <span>{seconds[1]}</span>
        </CountdownContainer>
    )
}