import { useEffect } from "react";
import { X } from "lucide-react";
import { PRIORITY } from "../data/priority";
import { useTasksStore } from "../store/store";
import { useForm } from "react-hook-form";
import type { DraftTask, PriorityLabel } from "../types";

function TasksForm() {
  const addTask = useTasksStore((state) => state.addTask);
  const closeModal = useTasksStore((state) => state.closeModal);
  const activeId = useTasksStore((state) => state.activeId);
  const tasks = useTasksStore((state) => state.tasks);
  const updateTask = useTasksStore((state) => state.updateTask);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    reset,
  } = useForm<DraftTask>({
    defaultValues: { priority: "media" },
  });

  const watchPriority = watch("priority");

  useEffect(() => {
    if (activeId) {
      const activeTask = tasks.filter((task) => task.id === activeId)[0];

      setValue("title", activeTask.title);
      setValue("dueDate", activeTask.dueDate);
      setValue("priority", activeTask.priority);
    } else {
      reset();
    }
  }, [activeId]);

  const registerTask = (data: DraftTask) => {
    if (activeId) {
      updateTask(data);
    } else {
      addTask(data);
    }

    reset();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center p-4 z-50 bg-[#14161270]">
      <form
        className="bg-white rounded-lg w-full max-w-105 overflow-hidden"
        onSubmit={handleSubmit(registerTask)}
      >
        <div style={{ height: "6px", backgroundColor: "#D98A3D" }} />

        <div className="p-5">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-display text-[16px] font-semibold text-[#1B1B18]">
              {activeId ? "Editar tarea" : "Nueva tarea"}
            </h2>

            <button
              type="button"
              className="w-7 h-7 rounded-md flex items-center justify-center text-[#75746D] hover:bg-[#F1F0EB] transition-colors"
              onClick={closeModal}
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
                {...register("title", {
                  required: "Titulo de tarea obligatorio.",
                })}
              />
              {errors.title && (
                <p className="text-[13px] text-red-400">
                  {errors.title?.message}
                </p>
              )}
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
                {...register("dueDate", {
                  required: "Fecha vencimiento obligatoria.",
                })}
              />
              {errors.dueDate && (
                <p className="text-[13px] text-red-400">
                  {errors.dueDate?.message}
                </p>
              )}
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
                    onClick={() => setValue("priority", key as PriorityLabel)}
                    className={`flex items-center gap-1.5 px-2.5 py-2 rounded-md text-[12px] font-medium border transition-colors ${watchPriority === key ? "border-transparent" : "border-[#E3E2DD] text-[#75746D] hover:border-[#C7C6BF]"}`}
                    style={
                      watchPriority === key
                        ? { backgroundColor: p.bg, color: p.color }
                        : undefined
                    }
                    {...register("priority")}
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
              onClick={closeModal}
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-3.5 py-2 rounded-md text-[13px] font-semibold text-white transition-all active:translate-y-0.5 bg-[#D98A3D]"
            >
              {activeId ? "Editar tarea" : "Agregar tarea"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default TasksForm;
