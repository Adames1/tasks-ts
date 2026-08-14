export type PriorityLabel = "alta" | "media" | "baja"

export type Task = {
    id: string
    title: string
    dueDate: Date
    priority: PriorityLabel
    completed: boolean
}

export type DraftTask = Omit<Task, 'id' | 'completed'>