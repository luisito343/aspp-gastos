import { useMemo } from 'react';
import { formatCurrency } from '../helpers/utils';
import { useBudget } from '../hooks/useBudget';

type AmountDisplayProps = {
    label: string;
    amount: number
}

export const AmountDisplay = ({ label, amount }: AmountDisplayProps) => {


    const colors: Record<string, string> = {
        'Presupuesto': 'text-green-600',
        'Gastado': 'text-red-600',
        'Disponible': 'text-orange-600',
    };

    const textColor = colors[label] || 'text-blue-600';

    const { availableBudget } = useBudget();
    const isBudgetAvailable = useMemo(() => availableBudget > 0, [availableBudget]);


    return (
        <div className='bg-white shadow-md p-4 rounded-lg w-full my-2'>
            <h2 className='text-xl font-bold text-gray-700'>{label}:</h2>
            {
                label === 'Disponible' && !isBudgetAvailable
                    ? <p className={`text-lg font-semibold ${textColor}`}>Sobre pasaste el presupuesto <span className='font-bold'>{formatCurrency(amount)}</span></p>
                    : <p className={`text-lg font-semibold ${textColor}`}>{formatCurrency(amount)}</p>
            }
        </div>
    )
}
