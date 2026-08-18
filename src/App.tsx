import { Plus, Search } from "lucide-react";
import { useTasksStore } from "./store/store";
import TasksForm from "./components/TasksForm";
import TasksList from "./components/TasksList";
import { PRIORITY } from "./data/priority";
import { STATUS } from "./data/status";
import type { PriorityLabel } from "./types";

function App() {
  const modal = useTasksStore((state) => state.modal);
  const showModal = useTasksStore((state) => state.showModal);
  const tasks = useTasksStore((state) => state.tasks);
  const setSearchQuery = useTasksStore((state) => state.setSearchQuery);
  const setPriorityFilter = useTasksStore((state) => state.setPriorityFilter);
  const priorityValue = useTasksStore((state) => state.priorityValue);

  const totalTasks = tasks.length;
  const pendingTasks = tasks.filter((task) => !task.completed).length;

  return (
    <div
      className="min-h-screen w-full flex justify-center"
      style={{
        backgroundColor: "#F3F1EA",
        backgroundImage: "radial-gradient(#DEDAC9 1px, transparent 1px)",
        backgroundSize: "18px 18px",
      }}
    >
      <div className="w-full max-w-160 font-body py-8 px-4 sm:px-0">
        {/* Header */}
        <header className="rounded-xl px-5 pt-5 pb-4 bg-[#24352C] shadow">
          <div className="flex items-center justify-between gap-4 mb-4">
            <div>
              <h1 className="font-display text-[26px] font-semibold text-[#F3F1EA] tracking-tight leading-none">
                Tasks TS
              </h1>
              <p className="font-mono text-[11px] mt-1.5 text-[#8FAE9C]">
                {`${pendingTasks} Pendientes de ${totalTasks}`}
                {/* 4 Pendientes de 5 */}
              </p>
            </div>

            <button
              type="button"
              className="shrink-0 flex items-center gap-1.5 text-white text-[13px] font-semibold px-4 py-2.5 rounded-md transition-all bg-[#D98A3D] cursor-pointer"
              onClick={showModal}
            >
              <Plus className="w-4 h-4" strokeWidth={2.5} />
              Nueva tarea
            </button>
          </div>

          {/* Input para busqueda */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.75 h-3.75 text-[#8FAE9C]" />
            <input
              type="search"
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar tareas..."
              className="w-full rounded-md pl-9 pr-3 py-2 text-[13px] text-[#F3F1EA] placeholder:text-[#7A9184] focus:outline-none focus:ring-2 transition-shadow bg-[#1B2822] border border-[#35473C]"
            />
          </div>
        </header>

        {/* filtrados prioridad o status */}
        <div className="flex flex-wrap items-center justify-between gap-4 bg-white rounded-md p-1 w-full my-5 px-5 py-5">
          <div>
            {STATUS.map((s) => (
              <button
                type="button"
                key={s.key}
                className="px-2.5 py-1.5 rounded-[5px] text-[12px] font-medium transition-colors"
              >
                {s.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="font-mono text-[10px] uppercase tracking-wide text-[#A8A79F]">
              Prioridad
            </span>
            {Object.entries(PRIORITY).map(([key, p]) => {
              const active = key === priorityValue;
              return (
                <button
                  type="button"
                  key={key}
                  onClick={() =>
                    active
                      ? setPriorityFilter(undefined)
                      : setPriorityFilter(key as PriorityLabel)
                  }
                  className="flex items-center gap-1.5 px-2.5 py-2 rounded-md text-[12px] font-medium border transition-colors cursor-pointer"
                  style={{
                    borderColor: active ? p.color : "#E3E2DD",
                    backgroundColor: active ? p.bg : "white",
                    color: active ? p.color : "#75746D",
                  }}
                >
                  <span
                    className="w-1.75 h-1.75 rounded-full"
                    style={{ backgroundColor: p.color }}
                  />
                  {p.label}
                </button>
              );
            })}
          </div>
        </div>

        <TasksList />

        {modal && <TasksForm />}
      </div>
    </div>
  );
}

export default App;
