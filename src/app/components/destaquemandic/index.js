import React, { forwardRef } from "react"
import styles from './destaque.module.css'

const Destaques = forwardRef(({ scrollToRef, contatoRef }) => {

    const content = [
        {
            title: 'Ginecologistas e Urologistas',
            content: <>Profissionais que desejam se especializar em reprodução assistida, aprimorando suas <b>habilidades clínicas e diagnósticas</b> para melhor atender seus pacientes.</>
        },
        {
            title: 'Médicos que buscam crescimento profissional',
            content:<>Aqueles que buscam se destacar em um <b>mercado em expansão</b>, aproveitando a demanda crescente por tratamentos de fertilidade no Brasil.</>
        },
        {
            title: 'Profissionais em busca de formação prática',
            content:<>Médicos que valorizam a prática clínica supervisionada e desejam <b>adquirir experiência real</b> no atendimento de pacientes em um centro de referência.</>
        },
        {
            title: 'Especialistas em busca de atualização',
            content:<>Médicos que querem estar cientes das inovações tecnológicas e das <b>melhores práticas em reprodução assistida</b>, garantindo um atendimento excepcional.</>
        }
    ]

    return(<>
        <div className={styles.bdd}>
            <picture>
                <source srcSet="/img/mobile/img4.jpg" media="(max-width: 1000px)" />
                <source srcSet="/img/mobile/imgcttmob.png" media="(max-width: 500px)" />
                <img src="/img/mobile/img4.jpg" alt="Imagem profissionais da saúde" className={styles.imgcttmb} />
            </picture>
            <div className={styles.pcdp}>
                <img src={'/img/im3.png'} alt={'Imagem profissionais da saúde'} className={styles.imgctt} />
                <div className={styles.divctt}>
                    <p className="detailtitle titlebluepage ">O curso ideal para médicos que buscam mais destaque!</p>
                    {content.map((item, index) => (
                        <div key={index}>
                            <div className={styles.pcttdv}>
                                <img src='/icons/arrow.png' alt='Seta >' className='iconlittle'/>
                                <p className={styles.cfgt}>{item.title}</p>
                            </div>
                            <p className={styles.plft}>{item.content}</p>
                        </div>
                    ))}
                    <div onClick={() => scrollToRef(contatoRef)}>
                        <button className="buttonP">INSCREVA-SE AGORA</button>
                    </div>
                </div>
                
            </div>
        </div>
    </>)
})

export default Destaques