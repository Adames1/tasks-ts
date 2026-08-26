export function formatDate(date: string): string {
    const [year, month, day] = date.split("-").map(Number);
    const dateObj = new Date(year, month - 1, day);

    const options: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    }

    return new Intl.DateTimeFormat('es-ES', options).format(dateObj)
}

export function isOverdue(iso: string, completed: boolean) {
    if (completed) return false;
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return new Date(iso + "T00:00:00") < today;
}