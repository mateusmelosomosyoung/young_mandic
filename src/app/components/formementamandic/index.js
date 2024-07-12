'use client'
import { useState } from 'react'
import styles from './formementa.module.css'

const FormEmenta = () => {
  const [nome, setNome] = useState('')
  const [telefone, setTelefone] = useState('')
  const [email, setEmail] = useState('')

  const handleDownload = () => {
    const downloadUrl = "/docs/Pos_Medica_Mandic_Reproducao_Assistida_PDF_v2.pdf"
    window.open(downloadUrl) // Abre uma nova janela para o download
  }
  const downloadFile = () => {
    const downloadUrl = "/docs/Pos_Medica_Mandic_Reproducao_Assistida_PDF_v2.pdf"
    const anchor = document.createElement("a")
    anchor.href = downloadUrl
    anchor.download = "PosMedicaMandic_ReproducaoAssistida.pdf"
    anchor.click()
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    downloadFile()
    // Aqui você pode adicionar a lógica para enviar os dados do formulário
    console.log({
      nome,
      telefone,
      email
    })
    // Resetar os campos após enviar o formulário, se necessário
    setNome('')
    setTelefone('')
    setEmail('')
  }

  return (<>
    <form onSubmit={handleSubmit} className={"frg"}>
        <input className='lblwbb' type="text" value={nome} onChange={(e) => setNome(e.target.value)} placeholder='Nome:' required />
        <input className='lblwbb' type="tel" value={telefone} onChange={(e) => setTelefone(e.target.value)} placeholder='Telefone:' required />
        <input className='lblwbb' type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='E-mail:' required />
        <div className={styles.dfbttal}>
            <div className={styles.mxwfb}>
                <button type="submit" className='buttonP'>BAIXAR AGORA</button>
            </div>
        </div>
    </form>
  </>
  )
}

export default FormEmenta
