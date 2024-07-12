'use client'
import React, {forwardRef} from "react"
import styles from './coordenacao.module.css'
import Image from "next/image"

const Coordenacao = forwardRef((props, ref) => {


    return(
        <> 
            <div className={styles.bgrd} ref={ref}>
                <div className={styles.cttcol}>
                    <div className={styles.cttxt}>
                        <p className="titlebluepage">
                            Aprenda com os Melhores
                        </p>
                        <p className="fz20">
                            Estude com os líderes em Reprodução Assistida e adquira uma formação exclusiva para se destacar.
                        </p>
                    </div>
                    <div className={styles.rowctt}>
                        <Image src={"/img/imgcoord.png"} alt="Foto Dr. Carlos Alberto Petta" width={550} height={500}  className={styles.crnimg} />
                        <div className={styles.clicr}>
                            <div className={styles.dpctt}>
                                <p className={styles.txttt}>COORDENAÇÃO</p>
                                <p className={styles.txttt2}>Dr. Carlos Alberto Petta</p>
                            </div>
                            <p className="fz20">Com mais de 30 anos de experiência, <b>Dr. Carlos Alberto Petta</b> é uma <b>referência nacional</b> em Reprodução Humana e Endometriose. Diretor da Clínica Fertilidade e Vida, é reconhecido pela sua trajetória notável, incluindo graduação e doutorado pela Unicamp e a ideação do serviço de Reprodução Assistida no Hospital Sírio Libanês, em São Paulo. Dr. Petta coordena o curso, garantindo uma formação completa e de <b>alta qualidade</b>, alinhada com as <b>melhores práticas e inovações tecnológicas.</b></p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    )
})

Coordenacao.displayName = 'Coordenacao'
export default Coordenacao