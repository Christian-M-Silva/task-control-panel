import { Modal } from "./components/ModalComponent"

function App() {

  return (
    <>
     <Modal task={{descriptions: 'DESCRIÇÃO', id: 'ID', priority: 'Alta', status: 'Em andamento', title: 'Alta'}}/>
     {/* <Modal/> */}
    </>
  )
}

export default App
