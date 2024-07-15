'use client'
import { useState } from 'react'
import axios from 'axios'
import styles from './formandic.module.css'

const FormMandic = ( {withTitle} ) => {
  const [nome, setNome] = useState('')
  const [telefone, setTelefone] = useState('')
  const [email, setEmail] = useState('')
  const [formacaoMedica, setFormacaoMedica] = useState('')
  const [loading, setLoading] = useState(false)

  
  const handleSubmit = async (event) => {
    event.preventDefault()

    const apiKey = `${process.env.NEXT_PUBLIC_API_KEY}`

    const url = `${process.env.NEXT_PUBLIC_URL_API}`

    const data = {
      nome: nome,
      telefone: telefone,
      email: email
    }
    
    if (formacaoMedica) {
      data.formacaoMedica = formacaoMedica
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
      setFormacaoMedica('')
    } catch (error) {
      alert(error.message)
    } finally {
      setLoading(false)
    }
  }


  return (<>
    <form onSubmit={handleSubmit} className="frg">
        {withTitle && <h2>Faça a sua inscrição e alavanque sua carreira</h2>}
        <input className='lblwbb' type="text" value={nome} onChange={(e) => setNome(e.target.value)} placeholder='Nome:' required />
        <input className='lblwbb' type="tel" value={telefone} onChange={(e) => setTelefone(e.target.value)} placeholder='Telefone:' required />
        <input className='lblwbb' type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='E-mail:' required />
        <fieldset className={"fmflds"}>
            <div className='fontwei600'>Formação Médica:</div>
            <label>
                <input type="radio" value="médico(a) formado(a)" checked={formacaoMedica === 'médico(a) formado(a)'} onChange={() => setFormacaoMedica('médico(a) formado(a)')} />
                <p>Sou médico(a) formado(a)</p>
            </label>
            <label>
                <input type="radio" value="estudante de medicina entre o 1º e 5º ano" checked={formacaoMedica === 'estudante de medicina entre o 1º e 5º ano'} onChange={() => setFormacaoMedica('estudante de medicina entre o 1º e 5º ano')} />
                Sou estudante de medicina entre o 1º e 5º ano
            </label>
            <label>
            <input type="radio" value="estudante de medicina do 6º ano" checked={formacaoMedica === 'estudante de medicina do 6º ano'} onChange={() => setFormacaoMedica('estudante de medicina do 6º ano')} />
                Sou estudante de medicina do 6º ano
            </label>
            <label>
                <input type="radio" value="médico(a) ginecologista ou urologista" checked={formacaoMedica === 'médico(a) ginecologista ou urologista'} onChange={() => setFormacaoMedica('médico(a) ginecologista ou urologista')} />
                Sou médico(a) ginecologista ou urologista
            </label>
        </fieldset>
      <button disabled={loading} type="submit" className={loading ? 'buttonLoading': 'buttonP'}>INSCREVA-SE AGORA</button>
    </form>
  </>
  )
}

export default FormMandic
