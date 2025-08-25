import Link from "next/link";
import Container from "../global/container";
import Icons from "../global/icons";

const Footer = () => {
    return (
        <footer className="flex flex-col items-center justify-center border-t border-foreground/5 pt-8 pb-4 px-6 lg:px-8 w-full max-w-6xl mx-auto">
            <Container delay={0.5} className="w-full">
            <div className="md:flex md:items-center justify-center w-full">
                <p className="text-sm text-muted-foreground">
                &copy; {new Date().getFullYear()} Mr RD. All rights reserved.
                </p>
            </div>
            </Container>
        </footer>
    )
};

export default Footer
