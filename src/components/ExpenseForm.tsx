import { useEffect, useState } from 'react'
import { categories } from '../data/categories'
import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import type { DraftExpense, Value } from '../types';
import { ErrorMessage } from './ErrorMessage';
import { useBudget } from '../hooks/useBudget';



export const ExpenseForm = () => {

    const [expense, setExpense] = useState<DraftExpense>({
        name: '',
        amount: 0,
        category: '',
        date: new Date()
    })

    const [error, setError] = useState<string>('')

    const { dispatch, state } = useBudget();

    useEffect(() => {
        if (state.editingId) {
            const expenseToEdit = state.expenses.find(expense => expense.id === state.editingId);
            if (expenseToEdit) {
                setExpense({
                    name: expenseToEdit.name,
                    amount: expenseToEdit.amount,
                    category: expenseToEdit.category,
                    date: expenseToEdit.date
                })
            }
        }
    }, [state.editingId])

    const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setExpense(prev => ({ ...prev, name: e.target.value }))
    }


    const handleChangeAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
        setExpense(prev => ({ ...prev, amount: Number(e.target.value) }))
    }

    const handleChangeCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setExpense(prev => ({ ...prev, category: e.target.value }))
    }

    const handleChangeDate = (value: Value) => {
        setExpense(prev => ({ ...prev, date: value }))
    }

    const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Aquí iría la lógica para agregar el gasto


        if (Object.values(expense).some(value => value === '' || value === 0 || value === null)) {
            setError('Por favor complete todos los campos del formulario.');
            return;
        }

        console.log('Gasto agregado:', expense);
        // Reiniciar el formulario
        if (state.editingId) {
            dispatch({ type: 'UPDATE_EXPENSE', payload: { expense: { ...expense, id: state.editingId } } })
            setExpense({
                name: '',
                amount: 0,
                category: '',
                date: new Date()
            });
            setError('');

        } else {
            dispatch({ type: 'ADD_EXPENSE', payload: { expese: expense } })
            setExpense({
                name: '',
                amount: 0,
                category: '',
                date: new Date()
            });
            setError('');
        }
    }

    return (
        <form onSubmit={e => handleSubmit(e)} className='space-y-4 relative'>
            <legend className='uppercase text-center text-2xl font-black border-b-4 p-2 border-blue-500'>
                {state.editingId ? 'Editar Gasto' : 'Nuevo Gasto'}
            </legend>
            {/* boton de cerrar*/}
            <button
                type="button"
                onClick={() => dispatch({ type: 'SHOW_CLOSE_MODAL' })}
                className='absolute right-4 top-4 w-8 h-8 flex items-center justify-center rounded-full text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition-all'
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>

            {error && <ErrorMessage>
                {error}
            </ErrorMessage>}

            <div className='flex flex-col gap-2'>
                <label htmlFor="expenseName" className='text-xl'>Nombre de Gasto:</label>
                <input
                    type="text"
                    id="expenseName"
                    className='border border-gray-300 rounded-lg p-2'
                    placeholder='Ejemplo: Comida'
                    value={expense.name}
                    onChange={(e) => handleChangeName(e)}
                />
            </div>

            <div className='flex flex-col gap-2'>
                <label htmlFor="amount" className='text-xl'>Cantidad:</label>
                <input
                    type="number"
                    id="amount"
                    className='border border-gray-300 rounded-lg p-2'
                    placeholder='Ejemplo: 300'
                    value={expense.amount}
                    onChange={(e) => handleChangeAmount(e)}
                />
            </div>

            <div className='flex flex-col gap-2'>
                <label htmlFor="category" className='text-xl'>Categoria:</label>
                <select
                    id="category"
                    className='border border-gray-300 rounded-lg p-2'
                    value={expense.category}
                    onChange={(e) => handleChangeCategory(e)}
                >
                    <option value="">-- Seleccione --</option>
                    {categories.map(category => (
                        <option key={category.id} value={category.id}>{category.name}</option>
                    ))}
                </select>
            </div>

            <div className='flex flex-col gap-2'>
                <label htmlFor="date" className='text-xl'>Fecha:</label>
                <DatePicker
                    id="date"
                    className='border border-gray-100 b-0 rounded-lg p-2 w-full'
                    value={expense.date}
                    onChange={(date) => handleChangeDate(date)}
                />
            </div>

            <input
                type="submit"
                className='bg-blue-600 cursor-pointer w-full p-2 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors mt-4'
                value={state.editingId ? 'Guardar Cambios' : 'Agregar Gasto'}
            />
        </form>
    )
}
