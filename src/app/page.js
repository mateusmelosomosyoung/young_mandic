'use client'
import React, {useRef} from "react"
import styles from "./page.module.css"
import Navbar from "./components/navbar"
import HeaderMandic from "./components/headermandic"
import InfosMandic from "./components/infosmandic"
import DemandaMandic from "./components/demandamandic"
import FooterMandic from "./components/footermandic"
import Contato from "./components/contatomandic"
import Investimento from "./components/investimentomandic"
import Sobre from "./components/sobremandic"
import Parceria from "./components/parceriamandic"
import Destaques from "./components/destaquemandic"
import Coordenacao from "./components/coordenacaomandic"
import Professores from "./components/professoresmandic"
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Home() {



  const sobreRef = useRef(null)
  const investimentoRef = useRef(null)
  const profsRef = useRef(null)
  const contatoRef = useRef(null)

  const scrollToRef = (ref) => {
    if (ref?.current) {
        ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  }
  return (
    <>
      <main className={styles.main}>
        <Navbar 
        scrollToRef={scrollToRef}
        sobreRef={sobreRef}
        investimentoRef={investimentoRef}
        profsRef={profsRef}
        contatoRef={contatoRef}
        />
        <HeaderMandic
        scrollToRef={scrollToRef}
        contatoRef={contatoRef}
        />
        <InfosMandic />
        <Sobre 
        ref={sobreRef} 
        scrollToRef={scrollToRef}
        contatoRef={contatoRef}
        />
        <Parceria 
        scrollToRef={scrollToRef}
        contatoRef={contatoRef}
        />
        <DemandaMandic />
        <Destaques 
        scrollToRef={scrollToRef}
        contatoRef={contatoRef}
        />
        <Investimento 
        ref={investimentoRef}
        scrollToRef={scrollToRef}
        contatoRef={contatoRef}
         />
        <Coordenacao ref={profsRef}/>
        <Professores />
        <Contato ref={contatoRef}/>
        <FooterMandic />
      </main>
    </>
  )
}
