'use client'
import React, {useState} from 'react'
import styles from './headermandic.module.css'
import FormMandic from '../formmandic'

const HeaderMandic = () => {

  const [showFormMb, setShowFormMb] = useState(true)

  return (
    <>
      <header className={styles.hdrmdg}>
        <div className={styles.hdrmw}>
          <div className={styles.hdmfcp}>
              <div className={styles.hdmfcp2}>
                  <b className='letspc3'>PÓS-GRADUAÇÃO</b>
                  <h1>Reprodução Assistida</h1>
                  <i className='sizetxtmedium'>Com a Clínica Fertilidade e Vida</i>
              </div>
              <p className={styles.txtfweb}>
                  Aprimore suas habilidades com uma <b>prática supervisionada</b> na clínica referência no assunto. 
                  <br/>
                  A única que garante a comprovação do atendimento de <b>mais de 60 pacientes</b> ao final do curso.
              </p>
              <div className={styles.hdlac}>
                  <img src={'/img/logobmandic.png'} alt={'Logo Mandic'} />
                  <img src={'/img/maisimg.png'} alt={'Ícone mais'} />
                  <img src={'/img/logofer.png'} alt={'Logo Fertilidade e Vida'} />
              </div>
          </div>
          <div className={styles.hmfrmdc}>
              <FormMandic withTitle='true'/>
          </div>
        </div>
      </header>
      <div className={styles.divfmob}>
        <p className={styles.txtfmob}>
            <br/>
            Aprimore suas habilidades com uma <b>prática supervisionada</b> na clínica referência no assunto. 
            <br/>
            A única que garante a comprovação do atendimento de <b>mais de 60 pacientes</b> ao final do curso. <br/>
        </p>
      </div>
      {showFormMb && <>
        <div className={styles.frmtmb}>
          <img src="/icons/close.png" alt="Botão de fechar" onClick={() => setShowFormMb(false)} className={"iconpage"}/>
          <FormMandic withTitle='true'/>
        </div>
      </>}
    </>
  )
}

export default HeaderMandic
