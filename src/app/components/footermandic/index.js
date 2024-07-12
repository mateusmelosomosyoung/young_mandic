import styles from './footermandic.module.css'
import Link from 'next/link'


const FooterMandic = () => {

    const content = [
        {
            title: "ENTRE EM CONTATO",
            content: "0800 941 7 941"},
        {
            title: "WHATSAPP",
            content: "+55 (19) 99228-8781"},
        {
            title: "E-MAIL",
            content: "cursos@slmandic.edu.br"}
    ]

    const contentlocal = [
        {
            local: "Campinas"
        },
        {
            local: "São Paulo"
        }
    ]
    

    const contentsocial = [
        {
            src: "/icons/facebook.png",
            href: "https://www.facebook.com/saoleopoldomandic/",
            alt: "Ícone facebook"
        },   
        {
            src: "/icons/instagram.png",
            href: "https://www.instagram.com/saoleopoldomandic/",
            alt: "Ícone instagram"
        }
    ]

    return (<>
        <div className={styles.fmbce}>
            <div className={styles.cfpb}>
                <div className={styles.lfpc}>
                    <img className={styles.ftrmg} src={'/img/logopostmandic.png'} alt={'Logo Mandic'}/>
                    <br/>
                    <img className={styles.ftrmg} src={'/img/logobmandic.png'} alt={'Logo Mandic'}/>
                </div>
                <div className={styles.cfpb2}>
                    <div className={styles.fcc}>
                        {content.map((item, index) => (
                            <div key={index} className={styles.wdc}>
                                <p className={styles.ftitle}>{item.title.toUpperCase()}</p>
                                <p className={styles.ftctt}>{item.content}</p>
                            </div>
                        ))}
                    </div>
                    <div className={styles.fcc}>
                        <div className={styles.wdc}>
                            <p className={styles.ftitle}>UNIDADES</p>
                            <div>
                                {contentlocal.map((item, index) => (
                                    <p key={index} className={styles.ftctt}>{item.local}</p>
                                ))}
                            </div>
                        </div>
                        <div className={styles.wdc}>
                            <p className={styles.ftitle}>ACESSE NOSSAS<br/>REDES SOCIAIS</p>
                            <div className={styles.rcs}>
                                {contentsocial.map((item, index) => (
                                    <Link href={item.href} target='__blank' key={index}>
                                        <img src={item.src} alt={item.alt} className={'icon'} />
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}

export default FooterMandic
