export function formatDate(date: Date): string {
    const dateObj = new Date(date)
    const options: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    }

    return new Intl.DateTimeFormat('es-ES', options).format(dateObj)
}

export function isOverdue(iso: Date, completed: boolean) {
    if (completed) return false;
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return new Date(iso + "T00:00:00") < today;
}