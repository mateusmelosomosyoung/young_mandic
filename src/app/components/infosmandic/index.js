import styles from './infosmandic.module.css'
import Image from 'next/image'

const InfosMandic = () => {

    const content = [
        {
            url: "/icons/ampulhetaicon.png",
            alt: "Ícone ampulheta",
            title: "DURAÇÃO",
            content: "6 meses",
            content2: ""
        },
        {
            url: "/icons/relogioicon.png",
            alt: "Ícone relógio",
            title: "CARGA HORÁRIA",
            content: "390 horas",
            content2: ""
        },
        {
            url: "/icons/localicon.png",
            alt: "Ícone localização",
            title: "LOCAL",
            content: "Clínica Fertilidade e Vida",
            content2: "Campinas/SP"
        },
        {
            url: "/icons/setasicon.png",
            alt: "Ícone setas para direita",
            title: "FORMATO",
            content: "Hibrido",
            content2: ""
        },
        {
            url: "/icons/calendarioicon.png",
            alt: "Ícone calendário",
            title: "AULAS",
            content: "(em semanas pré-determinadas)",
            content2: "Das 7h às 17h"
        }
    ]
    


    return (<>
        <div className={styles.dvimd}>
            <div className={styles.dmdctt}>
                {content.map((item, index) => (
                    <div key={index} className={styles.dvmdctt}>
                        <Image src={item.url} alt={item.title} className={'icon'} width={26} height={26}/>
                        <br/>
                        <b>{item.title}</b>
                        <p>{item.content}</p>
                        {item.content2 && <p>{item.content2}</p>}
                    </div>
                ))}
            </div>
        </div>
    </>
    )
}

export default InfosMandic
