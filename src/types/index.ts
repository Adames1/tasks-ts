export type Task = {
    id: string,
    title: string,
    dueDate: Date,
    priority: "alta" | "media" | "baja"
}

export type DraftTask = Omit<Task, 'id'>