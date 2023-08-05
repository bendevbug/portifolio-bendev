import { Navbar } from "@/components/navbar/Navbar"
import { Container } from "../../styles/Langstyles";

import Image from "next/image";

import next from '../../assets/next.svg'
import java from '../../assets/java.svg'
import python from '../../assets/python.svg'
import react from '../../assets/react.svg'
import mongodb from '../../assets/mongodb.svg'
import Link from "next/link";
import Head from "next/head";

export default function Skills() {
    return(
        <>
            <Head>
                <title>BenDev Portifólio</title>
                <link rel="icon" href="/favicon.svg" />
            </Head>
            <Navbar />
            <Container>
                <h1>Desenvolvimento focado em:</h1>
                <div>
                    <Image src={react} alt="react icon" width={120} height={120}></Image>
                    <Image src={next} alt="nextjs icon" width={120} height={120}></Image>
                    <Image src={mongodb} alt="mongodb icon" width={120} height={120}></Image>
                    <Image src={java} alt="java icon" width={120} height={120}></Image>
                    <Image src={python} alt="python icon" width={120} height={120}></Image>
                </div>
                <h1>Cursos realizados:</h1>
                <div>
                   <button>
                        <Link href="https://cursos.alura.com.br/user/benjamin-ia/fullCertificate/0dc5ac2eec921ebe6576a64c31020115">
                            <h2>Alura</h2>
                        </Link>
                   </button>
                   <button>
                        <Link href="http://ude.my/UC-ed77b02a-7eb2-47cf-8a99-8db00d772067">
                            <h2>Udemy</h2>
                        </Link>
                   </button>
                </div>
            </Container>
        </>
    );
}