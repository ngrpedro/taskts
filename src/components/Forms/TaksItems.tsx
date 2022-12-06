import React from "react";
import { ITask } from "../../interface/Task";
import { Trash, Pen } from "phosphor-react";

type Props = {
  taskList: ITask[];
  handleDelete(id: number): void;
};

const TaksItems = ({ taskList, handleDelete }: Props) => {
  return (
    <>
      {taskList.length > 0 ? (
        taskList.map((task) => (
          <div
            key={task.id}
            className="flex items-center justify-between border-b border-gray-600 py-2"
          >
            <div>
              <h1 className="font-semibold">{task.title}</h1>
              <h2 className="font-semibold">{task.asHard}</h2>
            </div>

            <div>
              <Trash
                size={22}
                onClick={() => {
                  handleDelete(task.id);
                }}
              />
              <Pen size={22} />
            </div>
          </div>
        ))
      ) : (
        <p>Não há tarefas cadastradas</p>
      )}
    </>
  );
};

export default TaksItems;
