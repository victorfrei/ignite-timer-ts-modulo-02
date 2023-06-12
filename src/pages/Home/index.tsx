import { HandPalm, Play } from "@phosphor-icons/react";
import { HomeContainer, StartCountDownButton, StopCountDownButton } from "./styles";
import { useContext } from "react";
import { NewCycleForm } from "./components/NewCycleForm";
import { Countdown } from "./components/Countdown";
import * as zod from "zod";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CyclesContext } from "../../contexts/CyclesContext";



const newCycleFormValidationSchema = zod.object({
    task: zod.string().min(1, "Informe a Tarefa"),
    minutesAmount: zod.number().min(1).max(60)

})

type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>;


export function Home() {

    const { activeCycle, createNewCycle, interruptCurrentCycle } = useContext(CyclesContext);

    const newFormCycle = useForm<NewCycleFormData>({
        resolver: zodResolver(newCycleFormValidationSchema),
        defaultValues: {
            task: ''
        }
    });

    const { handleSubmit, watch, reset } = newFormCycle;


    function handleCreateNewCycle(data: NewCycleFormData) {
        createNewCycle(data)
        reset()
    }

    const task = watch('task');
    const isSubmitDisabled = !task;

    return (
        <HomeContainer>
            <form onSubmit={handleSubmit(handleCreateNewCycle)} action="">
                <FormProvider {...newFormCycle}>
                    <NewCycleForm />
                </FormProvider>
                <Countdown />
                {activeCycle ? (
                    <StopCountDownButton type="submit" onClick={interruptCurrentCycle}>
                        <HandPalm size={24} />Interromper
                    </StopCountDownButton>

                ) : (
                    <StartCountDownButton type="submit" disabled={isSubmitDisabled} >
                        <Play size={24} />Começar
                    </StartCountDownButton>
                )
                }
            </form>
        </HomeContainer>
    )
}
