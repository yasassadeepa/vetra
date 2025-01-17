import { Companies, Container, Wrapper } from "@/components";
import { Button } from "@/components/ui/button";
import { INDUSTRIES } from "@/constants";
import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const PaintersPage = () => {
    return (
        <>
            <Wrapper>
                <Container delay={0.1} className="w-full">
                    <div className="flex flex-col items-center justify-center py-10 max-w-4xl mx-auto">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl text-center font-heading font-semibold !leading-tight mt-6">
                            Painting project management made simple
                        </h1>
                        <p className="paragraph mt-6 max-w-2xl mx-auto">
                            Streamline your painting project workflows with powerful tools that help you plan, track, and deliver projects on time and within budget.
                        </p>
                        <div className="flex items-center justify-center gap-x-4 mt-8">
                            <Button asChild>
                                <Link href="#">
                                    Get started
                                </Link>
                            </Button>
                            <Button variant="outline" asChild>
                                <Link href="#">
                                    Learn more
                                </Link>
                            </Button>
                        </div>
                    </div>
                </Container>
                <Container delay={0.2} className="w-full">
                    <div className="w-full flex max-w-4xl py-10 mx-auto">
                        <Image
                            src="/images/dashboards/dashboard2.png"
                            alt="Dashboard"
                            width={1024}
                            height={1024}
                            className="w-full h-auto rounded-lg lg:rounded-2xl"
                        />
                    </div>
                </Container>
                <Companies />
            </Wrapper>

            <Wrapper className="py-10">
                <Container delay={0.3} className="w-full">
                    <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-semibold !leading-snug mt-6">
                            Industry Solutions
                        </h2>
                        <p className="paragraph mt-6">
                            Discover how our platform helps different trades streamline their operations and boost productivity.
                        </p>
                    </div>
                </Container>
                
                {[INDUSTRIES[1], INDUSTRIES[2], INDUSTRIES[3]].map((industry, index) => (
                    <Container key={industry.slug} delay={0.4 + (index * 0.1)} className="w-full mt-16">
                        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-start ${index % 2 === 0 ? '' : 'lg:flex-row-reverse'}`}>
                            <div className={`w-full h-60 lg:h-96 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                                <Image
                                    src={industry.image}
                                    alt={industry.name}
                                    width={1024}
                                    height={1024}
                                    className="size-full object-cover rounded-lg lg:rounded-2xl"
                                />
                            </div>
                            <div className={`flex flex-col items-start ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                                <h3 className="text-2xl md:text-3xl lg:text-4xl font-heading font-semibold">
                                    {industry.name}
                                </h3>
                                <p className="text-sm lg:text-base text-muted-foreground mt-2">
                                    {industry.description}
                                </p>
                                <Button asChild variant="outline" className="mt-6">
                                    <Link href={industry.href}>
                                        Learn more
                                        <ArrowRightIcon className="w-4 h-4 ml-2" />
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </Container>
                ))}
            </Wrapper>

            <Wrapper className="py-20">
                <Container delay={0.4} className="w-full">
                    <div className="flex flex-col items-center justify-center relative w-full max-w-3xl mx-auto text-center">
                        <h2 className="bg-gradient-to-b from-gray-700 to-gray-500 dark:from-gray-300 dark:to-gray-500 py-4 bg-clip-text text-center text-4xl font-semibold font-heading tracking-tight !leading-tight text-transparent md:text-7xl mt-8">
                            Take control of your projects
                        </h2>
                        <p className="paragraph mt-6">
                            Empower your team with advanced project management tools. Simplify collaboration and achieve better results.
                        </p>
                        <div className="mt-6">
                            <Button asChild>
                                <Link href="/#" className="flex items-center">
                                    Get started for free
                                    <ArrowRightIcon className="w-4 h-4 ml-2" />
                                </Link>
                            </Button>
                        </div>
                    </div>
                </Container>
            </Wrapper>
        </>
    )
};

export default PaintersPage
