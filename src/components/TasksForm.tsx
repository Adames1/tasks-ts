import { X } from "lucide-react";
import { PRIORITY } from "../data/priority";

function TasksForm() {
  return (
    <div className="fixed inset-0 flex items-center justify-center p-4 z-50 bg-[#14161270]">
      <form className="bg-white rounded-lg w-full max-w-105 overflow-hidden">
        <div style={{ height: "6px", backgroundColor: "#D98A3D" }} />

        <div className="p-5">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-display text-[16px] font-semibold text-[#1B1B18]">
              Nueva tarea
            </h2>

            <button
              type="button"
              className="w-7 h-7 rounded-md flex items-center justify-center text-[#75746D] hover:bg-[#F1F0EB] transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="flex flex-col gap-3">
            <div>
              <label
                htmlFor="title"
                className="block text-[12px] font-medium text-[#75746D] mb-1.5"
              >
                Título
              </label>
              <input
                type="text"
                id="title"
                placeholder="¿Qué hay que hacer?"
                className="w-full bg-[#FAFAF8] border border-[#E3E2DD] rounded-md px-3 py-2.5 text-[14px] text-[#1B1B18] placeholder:text-[#A8A79F] focus:outline-none focus:ring-2 focus:ring-[#24352C]/20 focus:border-[#24352C]"
              />
            </div>

            <div>
              <label
                htmlFor="dueDate"
                className="block text-[12px] font-medium text-[#75746D] mb-1.5"
              >
                Fecha de vencimiento
              </label>
              <input
                type="date"
                id="dueDate"
                className="font-mono w-full bg-[#FAFAF8] border border-[#E3E2DD] rounded-md px-3 py-2 text-[13px] text-[#1B1B18] focus:outline-none focus:ring-2 focus:ring-[#24352C]/20 focus:border-[#24352C]"
              />
            </div>

            <div>
              <label
                htmlFor="priority"
                className="block text-[12px] font-medium text-[#75746D] mb-1.5"
              >
                Prioridad
              </label>
              <div className="flex items-center gap-1.5">
                {Object.entries(PRIORITY).map(([key, p]) => (
                  <button
                    type="button"
                    key={key}
                    className="flex items-center gap-1.5 px-2.5 py-2 rounded-md text-[12px] font-medium border transition-colors"
                  >
                    <span
                      className="w-1.75 h-1.75 rounded-full"
                      style={{ backgroundColor: p.color }}
                    />
                    {p.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="flex justify-end gap-2 mt-5">
            <button
              type="button"
              className="px-3.5 py-2 rounded-md text-[13px] font-medium text-[#75746D] hover:bg-[#F1F0EB] transition-colors"
            >
              Cancelar
            </button>
            <button
              type="button"
              className="px-3.5 py-2 rounded-md text-[13px] font-semibold text-white transition-all active:translate-y-0.5 bg-[#D98A3D]"
            >
              Agregar tarea
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default TasksForm;
