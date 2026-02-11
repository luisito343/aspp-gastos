import { v4 as uuid } from "uuid"
import type { Category, DraftExpense, Expense } from "../types"

export type BudgetActions =
    { type: 'SET_BUDGET', payload: { budget: number } } |
    { type: 'SHOW_CLOSE_MODAL' } |
    { type: 'ADD_EXPENSE', payload: { expese: DraftExpense } } |
    { type: 'DELETE_EXPENSE', payload: { id: Expense['id'] } } |
    { type: 'EDIT_EXPENSE', payload: { id: Expense['id'] } } |
    { type: 'UPDATE_EXPENSE', payload: { expense: Expense } } |
    { type: 'RESET_BUDGET' } |
    { type: 'FILTER_BY_CATEGORY', payload: { categoryId: Category['id'] } }

export type BudgetState = {
    budget: number
    modalOpen?: boolean
    expenses: Expense[]
    editingId: Expense['id']
    currentCategory: Category['id']
}


const initialBudget = (): number => {
    const budgetFromStorage = localStorage.getItem('budget');
    return budgetFromStorage ? Number(budgetFromStorage) : 0;
}

const initialExpenses = (): Expense[] => {
    const expensesFromStorage = localStorage.getItem('expenses');
    return expensesFromStorage ? JSON.parse(expensesFromStorage) : [];
}

export const initialBudgetState: BudgetState = {
    budget: initialBudget(),
    modalOpen: false,
    expenses: initialExpenses(),
    editingId: '',
    currentCategory: ''
}

const createExpense = (draft: DraftExpense): Expense => {
    return {
        id: uuid(),
        name: draft.name,
        amount: draft.amount,
        category: draft.category,
        date: draft.date
    }
}


export const budgetReducer = (
    state: BudgetState,
    acttion: BudgetActions) => {

    if (acttion.type === 'SET_BUDGET') {
        return {
            ...state,
            budget: acttion.payload.budget
        }
    }

    if (acttion.type === 'SHOW_CLOSE_MODAL') {
        return {
            ...state,
            modalOpen: state.modalOpen ? false : true,
            editingId: '',
        }
    }


    if (acttion.type === 'ADD_EXPENSE') {
        const acttionExpense = acttion.payload.expese;
        const expense = createExpense(acttionExpense);

        return {
            ...state,
            expenses: [...state.expenses, expense]
        }
    }

    if (acttion.type === 'DELETE_EXPENSE') {
        return {
            ...state,
            expenses: state.expenses.filter(expense => expense.id !== acttion.payload.id)
        }
    }

    if (acttion.type === 'EDIT_EXPENSE') {
        return {
            ...state,
            editingId: acttion.payload.id,
            modalOpen: true
        }
    }

    if (acttion.type === 'UPDATE_EXPENSE') {
        return {
            ...state,
            expenses: state.expenses.map(expense => expense.id === acttion.payload.expense.id ? acttion.payload.expense : expense),
            editingId: '',
            modalOpen: false
        }

    }

    if(acttion.type === 'RESET_BUDGET'){
        return {
            ...state,
            budget: 0,
            expenses: [],
            editingId: '',
            modalOpen: false
        }
    }

    if(acttion.type === 'FILTER_BY_CATEGORY'){
        return {
            ...state,
            currentCategory: acttion.payload.categoryId
        }
    }

    return state;
}
