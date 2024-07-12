import React, { forwardRef } from "react"
import styles from './investimento.module.css'

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
                            <img src={'/icons/maisicon.png'} alt={'Ícone de soma +'} />
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

export default Investimento
