'use client'
import React, {useState, forwardRef} from 'react'
import styles from './headermandic.module.css'
import FormMandic from '../formmandic'
import Image from 'next/image'

const HeaderMandic =  forwardRef(({ scrollToRef, contatoRef }) => {

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
                  <Image src={'/img/logobmandic.png'} alt={'Logo Mandic'} width={191} height={68} className={styles.lgbh1} />
                  <Image src={'/img/maisimg.png'} alt={'Logo Mandic'} width={33} height={32}  className={styles.lgbh2}/>
                  <Image src={'/img/logofer.png'} alt={'Logo Mandic'} width={234} height={57}  className={styles.lgbh3}/>
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
        <div onClick={() => scrollToRef(contatoRef)} >
          <button className='buttonP'>
            INSCREVA-SE
          </button>
        </div>
      </div>
      {showFormMb && <>
        <div className={styles.overlay}>
          <div className={styles.frmtmb}>
            <Image src={"/icons/close.png"} alt="Botão de fechar" onClick={() => setShowFormMb(false)} className={"iconpage"} width={30} height={30} />
            <FormMandic withTitle='true'/>
          </div>
        </div>
      </>}
    </>
  )
})

HeaderMandic.displayName = 'HeaderMandic'
export default HeaderMandic
