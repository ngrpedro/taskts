import {
  ChangeEvent,
  Dispatch,
  FormEvent,
  SetStateAction,
  useState,
} from "react";
import { ITask } from "./../../interface/Task";

type Props = {
  btnText: string;
  taskList: ITask[];
  setTaskList?: Dispatch<SetStateAction<ITask[]>>;
};

const TaskForm = ({ btnText, taskList, setTaskList }: Props) => {
  const [id, setId] = useState<number>(0);
  const [title, setTitle] = useState<string>("");
  const [asHard, setAsHard] = useState<number>(0);

  const addTaskHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const id = Math.floor(Math.random() * 1000);

    const newTask: ITask = { id, title, asHard };

    setTaskList!([...taskList, newTask]);

    setTitle("");
    setAsHard(0);
  };

  const hadleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "title") {
      setTitle(e.target.value);
    } else {
      setAsHard(parseInt(e.target.value));
    }
  };

  return (
    <div>
      <form
        onSubmit={addTaskHandler}
        className="flex flex-col items-start justify-center gap-3"
      >
        <label className="py-3">
          <span>Tarefa:</span>
          <input
            type="text"
            name="title"
            onChange={hadleChange}
            value={title}
            className="border border-gray-600 rounded-md ml-5 p-2"
          />
        </label>

        <label className="py-3">
          <span>Dificuldade:</span>
          <input
            type="number"
            name="asHard"
            value={asHard}
            onChange={hadleChange}
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
