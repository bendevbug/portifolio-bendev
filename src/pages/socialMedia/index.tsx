import { Navbar } from "@/components/navbar/Navbar";
import { Container } from "../../styles/Socialstyles";
import Image from "next/image";
import Link from "next/link";

import twitter from '../../assets/twitter.svg'
import linkedin from '../../assets/linkedin.svg'
import github from '../../assets/githubMidia.svg'


export default function socialMedia() {
    return (
        <>
            <Navbar />
            <Container>
                
                <h2>Redes sociais para me acompanhar!</h2>

               <div>
                    <Link href="https://www.linkedin.com/in/benjamin-inacio/">
                        <Image src={linkedin} alt="Twitter icon" width={90}></Image>
                    </Link>
                    <Link href="https://www.github.com/bendevbug">
                        <Image src={github} alt="Twitter icon" width={90}></Image>
                    </Link>
                    <Link href="https://www.twitter.com/bendevfront">
                        <Image src={twitter} alt="Twitter icon" width={90}></Image>
                    </Link>

               </div>
            </Container> 
        </>
    );
}