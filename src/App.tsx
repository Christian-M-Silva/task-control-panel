import { useState } from "react"
import { Modal } from "./components/ModalComponent"
import { TaskDashboard } from "./components/TaskDashboardComponent"


function App() {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false)

  return (
    <div className="flex flex-col justify-center">
      <button
        className="mt-4 bg-green-700 text-white p-4 rounded-lg hover:bg-green-950 transition cursor-pointer"
        onClick={() => setIsOpenModal((prevValue) => !prevValue)}
      >
        Adicionar tarefas
      </button>
      <Modal isOpen={isOpenModal} onClose={() => setIsOpenModal((prevValue) => !prevValue)}  />
      <TaskDashboard />
    </div>


  )
}

export default App
