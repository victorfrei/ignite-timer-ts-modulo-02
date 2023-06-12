import { FormContainer, MinutesAmountInput, TaskInput } from "./styles";
import { useFormContext } from "react-hook-form";



export function NewCycleForm() {

    const { register } = useFormContext();


    return (
        <FormContainer>
            <label htmlFor="task">Vou trabalhar em</label>
            <TaskInput
                id='task'
                list="task-suggestions"
                placeholder="Dê um nome para seu projeto"
                {...register('task')}
            />
            <datalist id='task-suggestions'>
                <option value="Projeto 1" />
                <option value='Projeto 2' />
            </datalist>

            <label htmlFor="minutesAmount">durante</label>
            <MinutesAmountInput
                type="number"
                step={1}
                max={60}
                id='minutesAmount'
                placeholder="00"
                {...register('minutesAmount', { valueAsNumber: true })}
            />
            <span>minutos.</span>
        </FormContainer>

    )
}