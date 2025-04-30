// import { useState } from "react"
// import { Modal } from "./components/ModalComponent"

import { Card } from "./components/CardComponent"

function App() {
  // const [isOpenModal, setIsOpenModal] = useState<boolean>(false)

  return (
    <>
      {/* <Modal task={{descriptions: 'DESCRIÇÃO', id: 'ID', priority: 'alta', status: 'andamento', title: 'Alta'}}/> */}
      {/* <Modal isOpen={isOpenModal} onClose={() => setIsOpenModal((prevValue) => !prevValue)} />

      <button
        onClick={() => setIsOpenModal((prevValue) => !prevValue)}
      >
        Add Task
      </button> */}

      <Card/>
    </>


  )
}

export default App
