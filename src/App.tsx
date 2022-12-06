import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import TaskForm from "./components/Forms/TaskForm";
import TaksItems from "./components/Forms/TaksItems";
import { ITask } from "./interface/Task";

function App() {
  return (
    <div>
      <NavBar />
      <div className="h-[75vh] flex flex-col items-center justify-center">
        <div className="space-y-8">
          <div>
            <h1 className="font-bold text-lg">O que você vai fazer?</h1>
            <TaskForm btnText={"Criar Tarefa"} />
          </div>

          <div>
            <h2 className="font-bold text-lg">Suas tarefas:</h2>

            <TaksItems />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
