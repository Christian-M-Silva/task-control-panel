import { useState } from "react"
import { Modal } from "./components/ModalComponent"

function App() {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false)

  return (
    <>
      {/* <Modal task={{descriptions: 'DESCRIÇÃO', id: 'ID', priority: 'alta', status: 'andamento', title: 'Alta'}}/> */}
      <Modal isOpen={isOpenModal} onClose={() => setIsOpenModal((prevValue) => !prevValue)} />

      <button
        onClick={() => setIsOpenModal((prevValue) => !prevValue)}
      >
        Add Task
      </button>
    </>


  )
}

export default App
