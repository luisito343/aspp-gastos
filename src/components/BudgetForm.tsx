import { useMemo, useState } from "react"
import { useBudget } from "../hooks/useBudget";

export const BudgetForm = () => {

    const [budget, setBudget] = useState(0);

    const { dispatch } = useBudget();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setBudget(Number(e.target.value));
    }

    const isValidBudget = useMemo(() => {
        return budget > 0;
    }, [budget]);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch({type:'SET_BUDGET', payload: {budget}})
        setBudget(0);
    }

    return (
        <form className='space-y-5' onSubmit={handleSubmit}>
            <div className='flex flex-col space-y-5'>
                <label htmlFor="budget" className='text-4xl text-blue-600 font-bold text-center'>
                    Presupuesto Inicial Inicial
                </label>
                <input
                    type="number"
                    id="budget"
                    className='border border-gray-300 rounded-lg p-3 text-center text-2xl'
                    placeholder='Ejemplo: 300'
                    onChange={e => handleChange(e)}
                    value={budget}
                />
            </div>

            <input
                type="submit"
                value="Definir Presupuesto"
                className="bg-blue-600 cursor-pointer w-full p-2 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={!isValidBudget}
            />
        </form>
    )
}
