import React, { forwardRef } from "react"
import styles from './parceria.module.css'
import Image from "next/image"

const Parceria = forwardRef(({ scrollToRef, contatoRef }) => {

    const contentproduct = [
        "Fertilização In Vitro",
        "Criopreservação de Embriões",
        "Análise Genética Pré-Implantacional",
        "Doação Compartilhada de Óvulos",
        "Congelamento de Óvulos",
        "Barriga Solidária",
        "Banco de Sêmen",
        "Inseminação Intrauterina",
        "Espermograma com Processamento Seminal",
        "Fragmentação do DNA Espermático",
        "Congelamento de Sêmen",
        "Ejaculação Retrógrada",
        "TESA",
        "PESA"
    ]

    return(<>
        <div className={styles.pcp}>
            <div className={styles.cpifv}>
                <div className={styles.cttpg}>
                    <p className="detailtitle titlebluepage ">Parceria com o Instituto<br/>Fertilidade e Vida</p>
                    <p className={'fz20'}>
                        Com os equipamentos de referência da clínica e no laboratório de reprodução assistida, a Fertilidade & Vida fornece uma <b>infraestrutura completa</b> para realização de todas as etapas dos tratamentos de reprodução assistida, fertilidade masculina e feminina e preservação da fertilidade. A clínica recebe pacientes de todo país, fruto de seu renome nacional, do grupo de médicos e embriologistas <b>altamente qualificados e experientes</b>,  e da direção do Dr. Carlos Alberto Petta.
                    </p>
                </div>
                <div>
                    <Image src={'/img/img1.png'} alt={'Imagem quarto'} className={styles.img1} width={600} height={400}/>
                </div>

            </div>
            <br/>
            <br/>
            <br/>
            <div className={styles.bpctt}>
                <div>
                    <Image src={'/img/img2.png'} alt={'Imagem profissionais da saúde'} className={styles.img2} width={700} height={400}/>
                </div>
                <div className={styles.ctbp}>
                    <p className={'fz20'}>
                        Estes são os tratamentos que a clínica oferece e que você, como aluno da Pós-graduação em Medicina Reprodutiva, poderá acompanhar e aprender:
                    </p>
                    <ul>
                        {contentproduct.map((product, index) => (
                            <li key={index} className={'fz20'}>{product}</li>
                        ))}
                    </ul>
                </div>
            </div>
            <br/>
            <br/>
            <br/>
            <div className={styles.cttbtpg}  onClick={() => scrollToRef(contatoRef)}>
                <button className="buttonPbig">INSCREVA-SE AGORA</button>
            </div>
            <br/>
            <br/>
        </div>
    </>)
})

Parceria.displayName = 'Parceria'
export default Parceria