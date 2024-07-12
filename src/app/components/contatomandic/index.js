'use client'
import React, {forwardRef} from "react"
import styles from './contato.module.css'
import FormMandic from "../formmandic"

const Contato = forwardRef((props, ref) => {


    return(<>
        <div className={styles.cctt} ref={ref}>
            <div className={styles.dctr}>
                <p className="titlebluepage mxwdt">Faça a sua inscrição e alavanque sua carreira:</p>
                <div className={styles.dhf}>
                    <FormMandic withTitle={false}/>
                </div>
            </div>
        </div>
    </>
    )
})

Contato.displayName = 'Contato'
export default Contato