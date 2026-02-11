export function formatCurrency(amount: number): string {
    return amount.toLocaleString('es-ES', {
        style: 'currency',
        currency: 'MXN',
    });
}

export function formatDate(dateStr: string | number | Date) : string {
    return new Date(dateStr).toLocaleDateString('es-ES', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    })
}