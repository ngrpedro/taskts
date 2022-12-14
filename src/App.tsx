import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import TaskForm from "./components/Forms/TaskForm";
import TaksItems from "./components/Forms/TaksItems";
import { ITask } from "./interface/Task";
import { useState } from "react";
import EditModal from "./components/Forms/EditModal";

function App() {
  const [taskList, setTaskList] = useState<ITask[]>([]);
  const [taskToUpdate, setTaskToUpdate] = useState<ITask | null>(null);

  const deleteTask = (id: number) => {
    setTaskList(
      taskList.filter((task) => {
        return task.id !== id;
      })
    );
  };

  const hideShoweModal = (display: boolean): void => {
    const modal = document.querySelector("#modal");

    if (display) {
      modal!.classList.remove("hidden");
    } else {
      modal!.classList.add("hidden");
    }
  };

  const editTask = (task: ITask): void => {
    hideShoweModal(true);
    setTaskToUpdate(task);
  };

  const updateTask = (id: number, title: string, asHard: number) => {
    const updatedTask: ITask = { id, title, asHard };

    const updatedItems = taskList.map((task) => {
      return task.id === updatedTask.id ? updatedTask : task;
    });

    setTaskList(updatedItems);

    hideShoweModal(false);
  };

  return (
    <div>
      <EditModal
        children={
          <TaskForm
            btnText={"Alterar"}
            taskList={taskList}
            task={taskToUpdate}
            handleUpdate={updateTask}
          />
        }
      />
      <NavBar />
      <div className="h-[75vh] flex flex-col items-center justify-center">
        <div className="space-y-8">
          <div>
            <h1 className="font-bold text-lg">O que você vai fazer?</h1>
            <TaskForm
              btnText={"Criar Tarefa"}
              taskList={taskList}
              setTaskList={setTaskList}
            />
          </div>

          <div>
            <h2 className="font-bold text-lg">Suas tarefas:</h2>

            <TaksItems
              taskList={taskList}
              handleDelete={deleteTask}
              handleEdit={editTask}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
