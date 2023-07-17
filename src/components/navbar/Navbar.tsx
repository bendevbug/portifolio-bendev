import { Container, Navigation } from "./styles";

import HomeIcon from '../../assets/home.svg';
import gitHubIcon from '../../assets/github.svg';
import projects from '../../assets/projects.svg';
import langs from '../../assets/langs.svg';

import Link from "next/link";
import Image from "next/image";

export function Navbar() {
    return(
        <Container>
            <Navigation>
            <Link href="/">
                <Image src={HomeIcon.src} alt="Home" width={40} height={40}></Image>
            </Link>
            <Link href="/projects">
                <Image src={projects.src} alt="Home" width={40} height={40}></Image>
            </Link>
            <Link href="/langs">
                <Image src={langs.src} alt="Home" width={40} height={40}></Image>
            </Link>
            <Link href="/socialMedia">
                <Image src={gitHubIcon.src} alt="Home" width={40} height={40}></Image>
            </Link>
        </Navigation>
        </Container>
    );
}