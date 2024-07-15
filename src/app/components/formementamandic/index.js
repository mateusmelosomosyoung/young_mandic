'use client'
import { useState } from 'react'
import axios from 'axios'
import styles from './formementa.module.css'

const FormEmenta = () => {
  const [nome, setNome] = useState('')
  const [telefone, setTelefone] = useState('')
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)

  const downloadFile = () => {
    const downloadUrl = "/docs/Pos_Medica_Mandic_Reproducao_Assistida_PDF_v2.pdf"
    const anchor = document.createElement("a")
    anchor.href = downloadUrl
    anchor.download = "PosMedicaMandic_ReproducaoAssistida.pdf"
    anchor.click()
  }
  
  const handleSubmit = async (event) => {
    event.preventDefault()

    const apiKey = `${process.env.NEXT_PUBLIC_API_KEY}`

    const url = `${process.env.NEXT_PUBLIC_URL_API}`

    const data = {
      nome: nome,
      telefone: telefone,
      email: email
    }

    setLoading(true)
    try {
      const result = await axios.post(url, data,{
        headers: {
          'apikey': apiKey
        }
      })
      alert('Dados recebidos com sucesso!')
      setNome('')
      setTelefone('')
      setEmail('')
      downloadFile()
    } catch (error) {
      alert(error.message)
    } finally {
      setLoading(false)
    }
  }

  return (<>
    <form onSubmit={handleSubmit} className={"frg"}>
        <input className='lblwbb' type="text" value={nome} onChange={(e) => setNome(e.target.value)} placeholder='Nome:' required />
        <input className='lblwbb' type="tel" value={telefone} onChange={(e) => setTelefone(e.target.value)} placeholder='Telefone:' required />
        <input className='lblwbb' type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='E-mail:' required />
        <div className={styles.dfbttal}>
            <div className={styles.mxwfb}>
                <button type="submit" className={loading ? 'buttonLoading': 'buttonP'} disabled={loading}>BAIXAR AGORA</button>
            </div>
        </div>
    </form>
  </>
  )
}

export default FormEmenta
