import React from "react";

type Props = {
  btnText: string;
};

const TaskForm = ({ btnText }: Props) => {
  return (
    <div>
      <form className="flex flex-col items-start justify-center gap-3">
        <label className="py-3">
          <span>Tarefa:</span>
          <input
            type="text"
            name="task"
            className="border border-gray-600 rounded-md ml-5 p-2"
          />
        </label>

        <label className="py-3">
          <span>Dificuldade:</span>
          <input
            type="text"
            name="asHard"
            className="border border-gray-600 rounded-md ml-5 p-2"
          />
        </label>

        <input
          type="submit"
          value={btnText}
          className="bg-gray-600 p-3 rounded-md w-full text-white font-semibold"
        />
      </form>
    </div>
  );
};

export default TaskForm;
