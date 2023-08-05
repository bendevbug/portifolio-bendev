import { Navbar } from "@/components/navbar/Navbar";
import { Container } from "../../styles/Projectstyles";
import Image from "next/image";

import gitIcon from '../../assets/github.svg'
import Link from "next/link";

export default function Projects() {

    return (
        <>
            <Navbar />
            <Container>
                <div>
                    <div>
                        <h2><Link href="https://github.com/bendevbug/api-books">Spring boot</Link></h2>
                        <h3>bendevbug</h3>
                        <Image src={gitIcon} width={30} height={30} alt="ícone do github"></Image>
                    </div>
                    <div>
                        <h2><Link href="https://github.com/bendevbug/web-weather">Web weather</Link></h2>
                        <h3>bendevbug</h3>
                        <Image src={gitIcon} width={30} height={30} alt="ícone do github"></Image>
                    </div>
                    <div>
                        <h2><Link href="https://github.com/bendevbug/tasklist">TaskList</Link></h2>
                        <h3>bendevbug</h3>
                        <Image src={gitIcon} width={30} height={30} alt="ícone do github"></Image>
                    </div>
                </div>
            </Container>
        </>
    );
}