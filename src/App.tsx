import { Plus, Search } from "lucide-react";
import TasksForm from "./components/TasksForm";
import TasksItem from "./components/TasksItem";

function App() {
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
        <header className="rounded-xl px-5 pt-5 pb-4 mb-5 bg-[#24352C] shadow">
          <div className="flex items-center justify-between gap-4 mb-4">
            <div>
              <h1 className="font-display text-[26px] font-semibold text-[#F3F1EA] tracking-tight leading-none">
                Tasks TS
              </h1>
              <p className="font-mono text-[11px] mt-1.5 text-[#8FAE9C]">
                4 Pendientes de 5
              </p>
            </div>

            <button
              type="button"
              className="shrink-0 flex items-center gap-1.5 text-white text-[13px] font-semibold px-4 py-2.5 rounded-md transition-all bg-[#D98A3D] cursor-pointer"
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
              placeholder="Buscar tareas..."
              className="w-full rounded-md pl-9 pr-3 py-2 text-[13px] text-[#F3F1EA] placeholder:text-[#7A9184] focus:outline-none focus:ring-2 transition-shadow bg-[#1B2822] border border-[#35473C]"
            />
          </div>
        </header>

        <ul className="flex flex-col gap-3">
          <TasksItem />
        </ul>

        <TasksForm />
      </div>
    </div>
  );
}

export default App;
