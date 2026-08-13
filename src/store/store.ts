import { create } from "zustand"
import { devtools } from "zustand/middleware"
import type { Task, DraftTask } from "../types"
import { v4 as uuidv4 } from "uuid"

type TasksState = {
    tasks: Task[]
    modal: boolean
    addTask: (data: DraftTask) => void
    showModal: () => void
    closeModal: () => void
}

const createTask = (task: DraftTask): Task => {
    return {
        ...task, id: uuidv4()
    }
}

export const useTasksStore = create<TasksState>()(
    devtools(
        (set) => ({
            tasks: [],
            modal: false,

            addTask: (data) => {
                const newTask = createTask(data)

                set((state) => ({
                    tasks: [...state.tasks, newTask]
                }))
            },

            showModal: () => {
                set(() => ({
                    modal: true
                }))
            },

            closeModal: () => {
                set(() => ({
                    modal: false
                }))
            }
        })
    )
)