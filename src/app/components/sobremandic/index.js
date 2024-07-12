'use client'
import React, {forwardRef} from "react"
import styles from './sobre.module.css'

const Sobre = forwardRef((props, ref) => {

    const content = [
        {content: '1. Anatomia, Fisiologia, Epidemiologia e Diagnóstico dos principais fatores de infertilidade'},
        {content: '2. Indução da ovulação e fator masculino'},
        {content: '3. O preparo da paciente para Reprodução Assistida'},
        {content: '4. Laboratório de Reprodução Humana e Preservação da Fertilidade Módulos'}
    ]

    return(
        <>
            <div className={styles.scp} ref={ref}>
                <div className={styles.cppa}>
                    <p className="detailtitle titlebluepage">Sobre o curso</p>
                    <p className='fz20'>A Pós-Graduação em Reprodução Assistida da São Leopoldo Mandic, em parceria com a Clínica Fertilidade e Vida, prepara ginecologistas, urologistas e médicos com CRM para o <b>mercado de reprodução assistida</b>. O curso combina aulas <b>teóricas online</b> e <b>práticas presenciais</b>, atendendo <b>mais de 60 pacientes.</b></p>
                    <div className={styles.dvmdl}>
                        <p className={styles.ctm}>CONHEÇA OS MÓDULOS DO CURSO</p>
                        <div>
                            {content.map((item, index)=> (
                                <p key={item.content} className={'fz20'}>{item.content}</p>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
})

export default Sobre