
import Image from 'next/image'
import featurecss from './featurecss.module.css'
import ServicesBox from './ServicesBox'
export default function Features() {

    return (<main className={featurecss.main}>
        <div className={featurecss.text}>
            <p>Dienstleistungen, die wir anbieten</p>
            <h1>WIR ENTWICKELN DIGITALE PRODUKTE, DIE
                HELFEN SIE UNTERNEHMEN WACHSTUM.</h1>
        </div>
        <ServicesBox />
        
    </main>)
}
