import { useMemo, useReducer } from "react"
import { budgetReducer, initialBudgetState } from "../reducers/budgetReducer"
import 'react-circular-progressbar/dist/styles.css';
import { BudgetContext } from "../context/BudgetContext"


type BudgetProviderProps = {
    children: React.ReactNode
}


export const BudgetProvider = ({ children }: BudgetProviderProps) => {
    const [state, dispatch] = useReducer(budgetReducer, initialBudgetState)
    const expensesTotal = useMemo(() => {
        return state.expenses.reduce((total, expense) => total + expense.amount, 0);
    }, [state.expenses]);
    const availableBudget = useMemo(() => state.budget - expensesTotal, [state.budget, expensesTotal]);
    return (
        <BudgetContext.Provider value={{ state, dispatch, expensesTotal, availableBudget }}>
            {children}
        </BudgetContext.Provider>
    )
}