import { useBudget } from '../hooks/useBudget'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { AmountDisplay } from './AmountDisplay'



export const BudgetTracker = () => {

    const { state, dispatch, availableBudget, expensesTotal, } = useBudget();

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
            <div className='flex justify-center'>
                <CircularProgressbar
                    value={availableBudget}
                    maxValue={state.budget}
                    text={`${Math.round((availableBudget / state.budget) * 100)}%`}
                    styles={buildStyles({
                        pathColor: availableBudget > 0 ? '#34D399' : '#F87171',
                        textColor: '#374151',
                        trailColor: '#E5E7EB',
                        textSize: '16px',

                    })}
                />
            </div>
            <div className='flex flex-col justify-center items-center'>
                <button
                    className='bg-pink-600 w-full p-2 text-white uppercase font-bold rounded-lg cursor-pointer mb-5 hover:bg-pink-700 transition-colors'
                    onClick={() => dispatch({ type: 'RESET_BUDGET' })}
                >
                    Resetear App
                </button>

                <AmountDisplay label="Presupuesto" amount={state.budget} />
                <AmountDisplay label="Disponible" amount={availableBudget} />
                <AmountDisplay label="Gastado" amount={expensesTotal} />
            </div>
        </div>
    )
}
