import Container from "../global/container";
import Images from "../global/images";

const Companies = () => {
    return (
        <div className="relative flex flex-col items-center justify-center w-full py-20 mt-16 companies overflow-hidden">
            <Container>
                <div className="flex flex-col items-center justify-center">
                    <h4 className="text-2xl lg:text-4xl font-medium">
                        We're Officially <span className="font-subheading italic">Partner</span> with
                    </h4>
                </div>
            </Container>

            <Container delay={0.1}>
                <div className="flex items-center justify-center pt-16">
                    <img
                        src="/images/nordfxlogo.svg"
                        alt="Company Logo"
                        className="h-12 w-auto transition-all duration-300 grayscale brightness-0 invert hover:grayscale-0 hover:invert-0 hover:brightness-100 hover:saturate-150"
                    />
                </div>
            </Container>
        </div>
    )
};

export default Companies
