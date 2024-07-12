import styles from './demandamandic.module.css'


const DemandaMandic = () => {

    const content = [
        {
            url: "/icons/fileicon.png",
            alt: "Ícone arquivo",
            title: "Centros de Excelência",
            content: <>Estude em uma instituição que investe continuamente em <b>tecnologia de ponta</b> e formação de profissionais. Garantimos que você receba uma educação de <b>alta qualidade</b>, alinhada com as melhores práticas e avanços mais recentes da área.</>
        },
        {
            url: "/icons/setaupicon.png",
            alt: "Ícone seta subindo",
            title: "Demanda Crescente",
            content: <>Com a queda nas taxas de fertilidade e o adiamento da maternidade, a procura por tratamentos de <b>reprodução assistida</b> está em alta. Prepare-se para se destacar neste mercado em expansão, com aprendizado prático e teórico.</>
        },
        {
            url: "/icons/estruturaicon.png",
            alt: "Ícone estrutura molecular",
            title: "Metodologia de Ensino Exclusiva",
            content: <>A metodologia AVIDA da São Leopoldo Mandic é revolucionária no ensino médico, focada em práticas clínicas intensivas e estudos de caso. Este método garante que <b>você esteja preparado</b> para os desafios reais da prática médica.</>
        }
    ]
    


    return (<>
        <div className={styles.dvdmg}>
            <div className={styles.dccgnr}>
                <p className='titlepage'>Cresça junto à alta demanda <br/>do mercado de medicina</p>
                <div className={styles.dvdmcontet}>
                    {content.map((item, index) => (
                        <div key={index} className={styles.dvcttit}>
                            <img src={item.url} alt={item.title} className={'icon'} />
                            <b className={styles.dvnyc}>{item.title.toUpperCase()}</b>
                            <p>{item.content}</p>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    </>
    )
}

export default DemandaMandic
