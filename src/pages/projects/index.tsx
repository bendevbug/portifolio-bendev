import { Navbar } from "@/components/navbar/Navbar";
import { Container } from "./styles";
import Image from "next/image";

import gitIcon from '../../assets/github.svg'

export default function Projects() {

    return (
        <>
            <Navbar />
            <Container>
                <div>
                    <div>
                        <h2>Spring boot</h2>
                        <h3>bendevbug</h3>
                        <Image src={gitIcon} width={30} height={30} alt="ícone do github"></Image>
                    </div>
                    <div>
                        <h2>Web weather</h2>
                        <h3>bendevbug</h3>
                        <Image src={gitIcon} width={30} height={30} alt="ícone do github"></Image>
                    </div>
                    <div>
                        <h2>Title</h2>
                        <h3>Nome</h3>
                        <Image src={gitIcon} width={30} height={30} alt="ícone do github"></Image>
                    </div>
                    <div>
                        <h2>Title</h2>
                        <h3>Nome</h3>
                        <Image src={gitIcon} width={30} height={30} alt="ícone do github"></Image>
                    </div>
                </div>
            </Container>
        </>
    );
}