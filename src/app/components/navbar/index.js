'use client'
import { useState } from 'react'
import { Modal } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import styles from './navbar.module.css'
import FormEmenta from '../formementamandic'

const Navbar = ({ scrollToRef, sobreRef, investimentoRef, profsRef, contatoRef }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [showModal, setShowModal] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  const handleModalOpen = () => {
    setShowModal(true)
  }

  const handleModalClose = () => {
    setShowModal(false)
  }

  const itemList = [
    { text: "SOBRE", action: () => scrollToRef(sobreRef) },
    { text: "INVESTIMENTO", action: () => scrollToRef(investimentoRef) },
    { text: "CORPO DOCENTE", action: () => scrollToRef(profsRef) },
    { text: "BAIXAR EMENTA", action: handleModalOpen }
  ]

  return (
    <>
      <nav className={styles.customnavbar}>
        <div className={styles.cstnvbitem}>
          <div className={styles.cstimgbtfmb}>
            <img src={'/img/mandiclogo.png'} alt="Mandic Logo" className={styles.cstimg}/>
            {isOpen ? <img src={'/icons/menucl.png'} alt={'Ícone x para fechar'} className={styles.imgocmnclose} onClick={toggle}/> : <img src={'/icons/menuop.png'} alt={'Ícone x para abrir'} className={styles.imgocmnopen} onClick={toggle}/>}
          </div>
          <div className={styles.mtrcstnv}>
            <ul className={styles.cstnvbir}>
              {itemList.map((item, index) => (
                <li key={index}>
                  <a onClick={item.action} className="nav-link crspt"><b>{item.text}</b></a>
                </li>
              ))}
            </ul>
            <button onClick={() => scrollToRef(contatoRef)} className='buttonP'>INSCREVA-SE AGORA</button>
          </div>

          {isOpen && <>
            <div className={styles.mtrcstmb}>
              <ul className={styles.cstnvhmb}>
                {itemList.map((item, index) => (
                  <li key={index}>
                    <a onClick={item.action} className="nav-link"><b>{item.text}</b></a>
                  </li>
                ))}
              </ul>
              <button onClick={() => scrollToRef(contatoRef)} className='buttonP'>INSCREVA-SE AGORA</button>
            </div>
          </>}
        </div>
      </nav>

      <Modal show={showModal} onHide={handleModalClose} dialogClassName="modal-70w">
        <Modal.Body className="modal-body-custom">
            <div className={"mdctt"}>
                <div className={"dvimgcmd"}>
                  <img src="/icons/close.png" alt="Botão de fechar" onClick={handleModalClose} className={"iconpage"}/>
                </div>
                <div className='dv100'>
                  <div className={styles.nvbfrm}>
                    <br/>
                    <br/>
                    <p className={styles.ttlfrm}>
                      Preencha e baixe a ementa completa do curso
                    </p>
                    <FormEmenta />
                    <br/>
                    <br/>
                  </div>
                </div>
            </div>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default Navbar
