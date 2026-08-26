import type { STATUS } from "../data/status"

export type PriorityLabel = "alta" | "media" | "baja"

export type StatusFilter = typeof STATUS[number]["key"]

export type Task = {
    id: string
    title: string
    dueDate: string
    priority: PriorityLabel
    completed: boolean
}

export type DraftTask = Omit<Task, 'id' | 'completed'>