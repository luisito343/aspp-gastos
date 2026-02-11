import { type ChangeEvent } from 'react'
import { categories } from '../data/categories'
import { useBudget } from '../hooks/useBudget'

export const FilterByCategory = () => {

    const { dispatch } = useBudget();
    const handleChangeCategory = (e: ChangeEvent<HTMLSelectElement, HTMLSelectElement> ) => {
        dispatch({ type: 'FILTER_BY_CATEGORY', payload: { categoryId: e.target.value} })
    }
    return (
        <div className='bg-white shadow-lg rounded-lg p-10'>
            <form className=''>
                <div className='flex flex-col md:flex-row gap-5 items-center'>
                    <label htmlFor="category">Filtrar Gastos</label>
                    <select name="category" id="category" className='border border-gray-300 rounded-lg p-2 w-full md:w-auto'
                        onChange={(e) => handleChangeCategory(e) }
                    >
                        <option value="">-- Todas las Categorias --</option>
                        {
                            categories.map(category => (
                                <option
                                    key={category.id}
                                    value={category.id}>
                                    {category.name}
                                </option>
                            ))
                        }
                    </select>
                </div>
            </form>
        </div>
    )
}
