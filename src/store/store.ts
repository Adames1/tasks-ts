import { create } from "zustand"
import { devtools, persist } from "zustand/middleware"
import type { Task, DraftTask, PriorityLabel } from "../types"
import { v4 as uuidv4 } from "uuid"

type TasksState = {
    tasks: Task[]
    activeId: Task['id']
    modal: boolean
    searchQuery: string
    priorityValue: PriorityLabel | undefined
    showModal: () => void
    closeModal: () => void
    addTask: (data: DraftTask) => void
    toggleCompleted: (id: Task['id']) => void
    deleteTask: (id: Task['id']) => void
    getTaskById: (id: Task['id']) => void
    updateTask: (data: DraftTask) => void
    setSearchQuery: (query: string) => void
    setPriorityFilter: (priority: PriorityLabel | undefined) => void
}

const createTask = (task: DraftTask): Task => {
    return {
        ...task,
        id: uuidv4(),
        completed: false
    }
}

export const useTasksStore = create<TasksState>()(
    devtools(
        persist((set) => ({
            tasks: [],
            modal: false,
            activeId: '',
            searchQuery: '',
            priorityValue: undefined,

            showModal: () => {
                set(() => ({
                    modal: true
                }))
            },

            closeModal: () => {
                set(() => ({
                    modal: false,
                    activeId: ''
                }))
            },

            addTask: (data) => {
                const newTask = createTask(data)

                set((state) => ({
                    tasks: [...state.tasks, newTask],
                    modal: false
                }))
            },

            toggleCompleted: (id) => {
                set((state) => ({
                    tasks: state.tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task),
                }))
            },

            deleteTask: (id) => {
                set((state) => ({
                    tasks: state.tasks.filter(task => task.id !== id)
                }))
            },

            getTaskById: (id) => {
                set(() => ({
                    activeId: id
                }))
            },

            updateTask: (data) => {
                set((state) => ({
                    tasks: state.tasks.map(task => task.id === state.activeId ? { ...task, ...data } : task),
                    modal: false,
                    activeId: ''
                }))
            },

            setSearchQuery: (query) => {
                set(() => ({
                    searchQuery: query
                }))
            },

            setPriorityFilter: (priority) => {
                set(() => ({
                    priorityValue: priority
                }))
            }

        }), { name: 'task-store' }
        )
    )
)