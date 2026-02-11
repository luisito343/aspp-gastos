import { useMemo } from 'react'
import { useBudget } from '../hooks/useBudget'
import { ExpenseDetail } from './ExpenseDetail';

export const ExpenseList = () => {

    const { state } = useBudget();

    
    const filteredExpenses = useMemo(() => {
        if (!state.currentCategory) return state.expenses;
        return state.expenses.filter(expense => expense.category === state.currentCategory);
    }, [state.expenses, state.currentCategory]);
    const isEmpty = useMemo(() => filteredExpenses.length === 0, [filteredExpenses]);

    return (
        <div className="mt-10 p-5 bg-white shadow-lg rounded-lg">
            {isEmpty ? (
                <div className="text-center py-20">
                    <p className="text-gray-400 text-2xl font-bold">No hay gastos aún</p>
                    <p className="text-gray-400">Comienza agregando uno desde el botón azul</p>
                </div>
            ) : (
                <>
                    <h2 className="text-gray-600 text-2xl font-black my-5 ">Listado de Gastos</h2>
                    <div className="space-y-4 shadow-lg rounded-lg">
                        {filteredExpenses.map((expense) => (
                            <ExpenseDetail key={expense.id} expense={expense} />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}
