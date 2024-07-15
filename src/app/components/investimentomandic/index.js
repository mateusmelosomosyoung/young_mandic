import React, { forwardRef } from "react"
import styles from './investimento.module.css'
import Image from "next/image"

const Investimento = forwardRef(({ scrollToRef, contatoRef }, ref) => {

    return(
        <>
            <div className={styles.ivtb} ref={ref}>
                <div className={styles.divr}>
                    <div className={styles.ivlft}>
                        <p className="titlepage">Investimento</p>
                        <p>
                            Alcance patamares mais elevados em sua carreira.
                            <br/>
                            Experiência e imersão abrangente em Reprodução Assistida.
                        </p>
                        <p><b>
                            Início das aulas: Fevereiro/2025
                        </b></p>
                    </div>
                    <div className={styles.ivrgt}>
                        <div className={styles.divp}>
                            <Image  src={'/icons/maisicon.png'} alt={'Ícone de soma +'} height={63} width={63} className={styles.icmgfmb}/>
                            
                            <div className={styles.dvpst}>
                                <p>3x de R$3.990</p>
                                <p>9x de R$7.590</p>
                            </div>
                        </div>
                        <button className="buttonS" onClick={() => scrollToRef(contatoRef)}>INSCREVA-SE AGORA</button>
                    </div>
                </div>
            </div>
        </>
    )
})

Investimento.displayName = 'Investimento'
export default Investimento
