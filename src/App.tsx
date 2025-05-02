import { useState } from "react"
import { Modal } from "./components/ModalComponent"

// import { Card } from "./components/CardComponent"

function App() {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false)

  return (
    <div className="flex justify-center">
      <button
        className="mt-4 bg-green-700 text-white p-4 rounded-lg hover:bg-green-950 transition cursor-pointer"
        onClick={() => setIsOpenModal((prevValue) => !prevValue)}
      >
        Adicionar tarefas
      </button>
      <Modal isOpen={isOpenModal} onClose={() => setIsOpenModal((prevValue) => !prevValue)} />

      {/* <Card/> */}
    </div>


  )
}

export default App
