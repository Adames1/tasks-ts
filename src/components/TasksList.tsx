import { Check, Pencil, Trash2 } from "lucide-react";
import { useTasksStore } from "../store/store";
import { PRIORITY } from "../data/priority";

function TasksList() {
  const tasks = useTasksStore((state) => state.tasks);

  return (
    <ul className="flex flex-col gap-3">
      {tasks.map((task) => {
        const p = PRIORITY[task.priority];

        return (
          <li
            key={task.id}
            className="group relative flex items-start bg-white rounded-lg overflow-hidden transition-transform hover:rotate-0! shadow"
          >
            <div
              className="flex flex-col items-center justify-center w-11.5 shrink-0 py-3"
              style={{ backgroundColor: p.bg }}
            >
              <span
                className="w-2.25 h-2.25 rounded-full mb-1"
                style={{ backgroundColor: p.color }}
              />
              <span
                className="font-mono text-[10px] font-medium uppercase"
                style={{ color: p.color }}
              >
                {p.label}
              </span>
            </div>

            <div
              className="w-0 border-l border-dashed shrink-0 my-2"
              style={{ borderColor: "#D8D7CE" }}
            />

            <button
              type="button"
              className="mt-3.5 ml-3 shrink-0 w-4.5 h-4.5 rounded-full border flex items-center justify-center"
            >
              <Check className="w-3 h-3 text-white" strokeWidth={3} />
            </button>

            <div className="flex-1 min-w-0 py-3 px-3">
              <p className={`text-[14px] leading-snug`}>{task.title}</p>
              <span className="inline-block font-mono text-[11px] px-1.5 py-0.5 rounded mt-1.5">
                {task.dueDate.toString()}
              </span>
            </div>

            <div className="flex items-start gap-0.5 py-3 pr-2 opacity-0 group-hover:opacity-100 focus-within:opacity-100 transition-opacity shrink-0">
              <button
                aria-label="Editar tarea"
                className="w-7 h-7 rounded-md flex items-center justify-center text-[#75746D] hover:bg-[#F1F0EB] hover:text-[#1B1B18] transition-colors"
              >
                <Pencil className="w-3.5 h-3.5" />
              </button>
              <button
                aria-label="Eliminar tarea"
                className="w-7 h-7 rounded-md flex items-center justify-center text-[#75746D] hover:bg-[#F8E9E7] hover:text-[#B8433A] transition-colors"
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default TasksList;
