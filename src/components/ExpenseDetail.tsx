import { useMemo } from 'react';
import {
    LeadingActions,
    SwipeableList,
    SwipeableListItem,
    SwipeAction,
    TrailingActions,
} from 'react-swipeable-list';
import 'react-swipeable-list/dist/styles.css';
import type { Expense } from '../types';
import { categories } from '../data/categories';
import { formatDate } from '../helpers/utils';
import { useBudget } from '../hooks/useBudget';

type ExpenseDetailProps = {
    expense: Expense;
}

export const ExpenseDetail = ({ expense }: ExpenseDetailProps) => {

    const { dispatch } = useBudget();

    const categoryInfo = useMemo(() => {
        const category = categories.find(cat => cat.id === expense.category);
        return category
    }, [expense])

    const leadingActions = () => {
        return (
            <LeadingActions>
                <SwipeAction
                    onClick={() => dispatch({ type: 'EDIT_EXPENSE', payload: { id: expense.id } })}
                >
                    Editar
                </SwipeAction>
            </LeadingActions>
        )
    }

    const trailingActions = () => {
        return (
            <TrailingActions>
                <SwipeAction
                    onClick={() => dispatch({ type: 'DELETE_EXPENSE', payload: { id: expense.id } })}
                    destructive={true}
                >
                    Eliminar
                </SwipeAction>
            </TrailingActions>
        )
    }

    return (
        <SwipeableList>
            <SwipeableListItem
                maxSwipe={30}
                leadingActions={leadingActions()}
                trailingActions={trailingActions()}
            >
                <div
                    key={expense.id}
                    className="bg-white border-b border-gray-200 p-6 w-full flex gap-5 items-center hover:bg-gray-50 transition-colors"
                >
                    {/* Icono o Categoria (Opcional) */}
                    <div className="bg-white border-b border-gray-200 p-6 w-full flex gap-5 items-center">
                        {/* Icono Dinámico */}
                        <img
                            src={`/icono_${categoryInfo?.icon}.svg`}
                            alt={`Icono ${categoryInfo?.name}`}
                            className="w-20 h-20"
                        />

                        <div className="flex-1 space-y-2">
                            <p className="text-xs font-bold uppercase text-blue-500">
                                {categoryInfo?.name || 'Sin categoría'}
                            </p>
                            <p className="text-xl font-bold text-gray-800">
                                {expense.name}
                            </p>
                            <p className="text-gray-400 text-sm">
                                {expense.date && formatDate(expense.date.toString())}
                            </p>
                        </div>
                    </div>

                    {/* Monto */}
                    <div className="flex flex-col items-end">
                        <p className="text-2xl font-black text-gray-700">
                            <span className="text-green-600 text-lg font-normal">$</span>
                            {expense.amount}
                        </p>
                    </div>
                </div>
            </SwipeableListItem>
        </SwipeableList>
    )
}
