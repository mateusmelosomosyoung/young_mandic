'use client'
import React from "react"
import styles from './professores.module.css'
import { useState, useEffect } from "react"
import { Modal } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Image from "next/image"

const Professores = () => {
    const [selectedId, setSelectedId] = useState(null)
    const [showAll, setShowAll] = useState(false)
    const [selectedProfessor, setSelectedProfessor] = useState(null)
    const [showModal, setShowModal] = useState(false)
    // Array com conteúdo
    const professors = [
        {
          id: 1,
          name: "Dra. Márcia Pantoja",
          src: '/professores/marcia2.png',
          alt: 'Foto Dra Márcia Pantoja',
          resume: "Dra. Márcia Pantoja é especialista em Ginecologia e Obstetrícia, com doutorado em Tocoginecologia pela UNICAMP e vasta experiência em videoendoscopia ginecológica.",
          fullcontent: <>
            <ul>
              <li>Graduação em Medicina pela Universidade Federal do Pará, 2002</li>
              <li>Residência médica em Ginecologia e Obstetrícia pela Pontifícia Universidade Católica de Campinas, PUC Campinas, 2005</li>
              <li>Título de Especialista em Ginecologia e Obstetrícia (TEGO) pela Federação Brasileira das Associações de Ginecologia e Obstetrícia (FEBRASGO), 2005</li>
              <li>Título de Especialista em Videoendoscopia ginecológica pela Federação Brasileira das Sociedades de Ginecologia e Obstetrícia – SP, 2006</li>
              <li>Mestrado em Tocoginecologia pela Universidade Estadual de Campinas, 2009</li>
              <li>Doutorado em Tocoginecologia pela Universidade Estadual de Campinas, 2014</li>
            </ul>
          </>
        },
        {
          id: 2,
          name: "Raquel Cossiello",
          src: '/professores/raquel2.png',
          alt: 'Foto Raquel Cossiello',
          resume: "Especialista em Reprodução Humana Assistida e Criopreservação, com mestrado em Tocoginecologia pela UNICAMP e diretora do Laboratório de Reprodução Humana da Clínica Fertilidade & Vida em São Paulo.",
          fullcontent: <>
            <ul>
              <li>Graduação em Ciências Biológicas pela Pontifícia Universidade Católica de Campinas, PUC Campinas, 2003</li>
              <li>Especialista em Reprodução Humana Assistida, pela Associação Instituto Sapientiae, 2005</li>
              <li>Mestrado em Tocoginecologia pela Universidade Estadual de Campinas, 2009</li>
              <li>Especialista em Criopreservação/ Vitrificação de Oócitos e Embriões pelo Instituto Mexicano de Infertilidad, Guadalajara, México</li>
              <li>Diretor de Laboratório de Reprodução Assistida, Red Latiniamericana de Reproduccion Asistida, REDLARA, Chile, 2016</li>
              <li>Diretora do Laboratório de Reprodução Humana da Clinica Fertilidade & Vida - São Paulo</li>
            </ul>
          </>
        },
        {
          id: 3,
          name: "Dra. Bruna Begossi",
          src: '/professores/bruna2.png',
          alt: 'Foto Dra. Bruna Begossi',
          resume: "Ginecologista e obstetra, especialista em Reprodução Assistida e Nutrologia, com qualificações adicionais em ultrassonografia transvaginal e cursos internacionais pela Harvard Medical School e IVI Global Education.",
          fullcontent: <>
            <ul>
              <li>Graduação em Medicina pela Pontifícia Universidade Católica de Campinas, 2009</li>
              <li>Residência médica em Ginecologia e Obstetrícia pela Irmandade da Santa Casa de Misericórdia de São Paulo, 2018</li>
              <li>Registro de Qualificação de Especialista pelo Conselho Federal e Regional de Medicina em Ginecologia e Obstetrícia (RQE: 76866)</li>
              <li>Pós-Graduação em Nutrologia pela Associação Brasileira de Nutrologia (ABRAN), 2017</li>
              <li>Curso “Nutrition and the Metabolic Syndrome” pela Harvard Medical School, 2017</li>
              <li>Curso Master em Reprodução Assistida pela Sociedade Paulista de Medicina Reprodutiva, 2017</li>
              <li>Curso em Ultrassom Transvaginal pela Cetrus – Centro de Referência em Ensino no Diagnóstico por Imagem, 2017</li>
              <li>Curso Online de Atualização em Reprodução Humana – Instituto GERA de Ensino e Pesquisa, 2019</li>
              <li>Título de Capacitação em Reprodução Assistida pela Sociedade Brasileira de Reprodução Assistida (SBRA), 2021</li>
              <li>Curso IVI Fundamentos de la Reproducción Asistida – Genética, Legislación, Procedimientos – IVI Global Education, España – European Accreditation Council for Continuing Medical Education, 2022</li>
            </ul>
          </>
        },
        {
          id: 4,
          name: "Dr. Alan Chaves",
          src: '/professores/alan2.png',
          alt: 'Foto Dr. Alan Chaves',
          resume: "Especialista em Reprodução Humana Assistida, com residência em Ginecologia e Obstetrícia pelo IMIP e pós-graduação pelo Hospital Sírio-Libanês. Atualmente, é professor na Faculdade Pernambucana de Saúde-IMIP.",
          fullcontent: <>
            <ul>
              <li>Residência médica em Ginecologia e Obstetrícia-IMIP, estágio no setor de Reprodução Humana e Histeroscopia Cirúrgica na Universidade Federal de São Paulo</li>
              <li>Especialista em Reprodução Humana Assistida com pós-graduação pelo Hospital Sírio-Libanês Fellowship do Centro de Reprodução Humana do Hospital Sírio Libanês-Clínica Invida</li>
              <li>Professor da graduação Médica da Faculdade Pernambucana de Saúde-IMIP</li>
            </ul>
          </>
        },
        {
          id: 5,
          name: "Dra. Mariana Renna",
          src: '/professores/mariana2.png',
          alt: 'Foto Dra. Mariana Renna',
          resume: "Ginecologista e obstetra, especialista em Reprodução Humana, com graduação e residência pela Faculdade de Medicina de Jundiaí e certificação pela FEBRASGO. Ela é membro da Sociedade Brasileira de Reprodução Humana (SBRH).",
          fullcontent: <>
            <ul>
              <li>Graduação em Medicina pela Faculdade de Medicina de Jundiaí, 2013</li>
              <li>Residência médica em Ginecologia e Obstetrícia pela Faculdade de Medicina de Jundiaí 2014-2017</li>
              <li>Título de Especialista em Ginecologia e Obstetrícia (TEGO) pela Federação Brasileira das Associações de Ginecologia e Obstetrícia (FEBRASGO), 2017</li>
              <li>Especialização em Reprodução Humana pelo Instituto Sapientiae, 2018</li>
              <li>Certificação de Atuação em Reprodução Humana pela Federação Brasileira das Associações de Ginecologia e Obstetrícia (FEBRASGO), 2022</li>
              <li>Membro da Sociedade Brasileira de Reprodução Humana (SBRH)</li>
            </ul>
          </>
        },
        {
          id: 6,
          name: "Dra. Isadora Matias",
          src: '/professores/isadora2.png',
          alt: 'Foto Dra. Isadora Matias',
          resume: "Graduada em Medicina pela Universidade de Taubaté (2006), especializada em Reprodução Humana (2011) e com mestrado em Ginecologia e Saúde da Mulher pela Faculdade de Medicina de Jundiaí (2012). Possui residência médica (2010) e título de Especialista em Reprodução Assistida pelo Febrasgo (2019).",
          fullcontent: <>
            <ul>
              <li>Graduação em Medicina pela Universidade de Taubaté, 2006</li>
              <li>Especialização em Reprodução Humana pela Associação Instituto Sapientiae, 2011</li>
              <li>Residência médica pela Faculdade de Medicina de Jundiaí, 2010</li>
              <li>Mestrado em Ginecologia e Saúde da Mulher pela Faculdade de Medicina de Jundiaí, 2012</li>
              <li>Título de Especialista em Reprodução Assistida pelo Febrasgo, 2019</li>
            </ul>
          </>
        },
        {
          id: 7,
          name: "Paula Rodrigues",
          src: '/professores/paula2.png',
          alt: 'Foto Paula Rodrigues',
          resume: "Graduada em Ciências Biológicas pela Pontifícia Universidade Católica de Campinas, é especialista em Reprodução Humana Assistida pela Sociedade Paulista de Medicina Reprodutiva. Atua como embriologista na Clínica Fertilidade e Vida de Campinas.",
          fullcontent: <>
            <ul>
              <li>Graduação em Ciências Biológicas pela Pontifícia Universidade Católica de Campinas</li>
              <li>Especialista em Reprodução Humana Assistida pela Sociedade Paulista de Medicina Reprodutiva</li>
              <li>Embriologista na Clínica Fertilidade e Vida de Campinas</li>
            </ul>
          </>
        },
        {
          id: 8,
          name: "Camila Liupkevicius",
          src: '/professores/camila2.png',
          alt: 'Foto Camila Liupkevicius',
          resume: "Graduada em Biomedicina pela Universidade Metropolitana de Campinas (2018), habilitada em Reprodução Humana e Auditoria. Atua como embriologista na Clínica Fertilidade e Vida Campinas desde 2018.",
          fullcontent: <>
            <ul>
              <li>Graduação em Biomedicina pela Universidade Metropolitana de Campinas - 2018</li>
              <li>Habilitação em Reprodução Humana e Auditoria - 2018</li>
              <li>Embriologista na Clínica Fertilidade e Vida Campinas desde 2018</li>
            </ul>
          </>
        }
    ]
    // Seleciona o ID do professor e abre modal
    const handleDivClick = (id) => {
      setSelectedId(id)
      setShowModal(true)
  }

  const handleCloseModal = () => {
      setShowModal(false)
  }
    // Seleciona o objeto professor
    useEffect(() => {
      if (selectedId !== null) {
          const selected = professors.find(prof => prof.id === selectedId)
          setSelectedProfessor(selected)
      }
    }, [selectedId])

    return (
        <>
            <div className={styles.dpcg}>
                <div className={styles.dwtac}>
                    <p className={styles.txttl}>PROFESSORES</p>
                    <div className={styles.spfc}>
                        {professors.slice(0, showAll ? professors.length : 3).map((item) => (
                            <div key={item.id} className={styles.grdctt}>
                                <div className={styles.imgctt1}>
                                    <Image src={item.src} alt={item.alt}  className={styles.dpimg} width={400} height={395} />
                                    <span className={styles.txtovr} >{item.name.toUpperCase()}</span>
                                </div>
                                <p>{item.resume}</p>
                                <div className={styles.btsml} onClick={() => handleDivClick(item.id)} >
                                    <p className={styles.bttxt}>
                                        CURRICULO COMPLETO
                                    </p>
                                    <Image src={"/icons/seguir.png"} alt="Seta pra frente >" className="icon" width={26} height={26} />
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className={styles.dvfbtt}>
                        {showAll ? (
                            <button className="buttonP" onClick={() => setShowAll(false)}>Ocultar</button>
                        ) : (
                            <button className="buttonP" onClick={() => setShowAll(true)}>CONHEÇA TODOS PROFESSORES</button>
                        )}
                    </div>

                    <Modal show={showModal} onHide={handleCloseModal} dialogClassName="modal-70w">
                        <Modal.Body className="modal-body-custom">
                            {selectedProfessor && (
                                <div className={"mdctt"}>
                                  <div className={"dvimgcmd"}>
                                    <Image src={"/icons/close.png"} alt="Botão de fechar" className="icon" onClick={handleCloseModal}  width={26} height={26} />
                                  </div>
                                  <br/>
                                  <div className={"cttpmd"}>
                                    <div className={"cmppttxt"}>
                                      <Image src={selectedProfessor.src} alt={selectedProfessor.alt} className={styles.dpimgMdl} width={440} height={395} />
                                      <p className={styles.txttl}>{selectedProfessor.name.toUpperCase()}</p>
                                      <p className="textblue400">{selectedProfessor.resume}</p>
                                    </div>
                                    <div>
                                      <div className="textblue400">{selectedProfessor.fullcontent}</div>
                                    </div>
                                  </div>
                                </div>
                            )}
                        </Modal.Body>
                    </Modal>

                </div>
            </div>
        </>
    )
}

export default Professores