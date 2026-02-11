import { createContext, type ActionDispatch } from "react"
import { type BudgetActions, type BudgetState } from "../reducers/budgetReducer"


export type BudgetContextType = {
    state: BudgetState
    dispatch: ActionDispatch<[acttion: BudgetActions]>
    expensesTotal: number
    availableBudget: number
}


export const BudgetContext = createContext<BudgetContextType>(null!)

