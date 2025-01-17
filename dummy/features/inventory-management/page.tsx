import { Companies, Container, Wrapper } from "@/components";
import { Button } from "@/components/ui/button";
import { MagicCard } from "@/components/ui/magic-card";
import { SectionBadge } from "@/components/ui/section-bade";
import { FEATURES } from "@/constants";
import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const InventoryManagementPage = () => {
    return (
        <>
            <Wrapper>
                <Container delay={0.1} className="w-full">
                    <div className="flex flex-col items-center justify-center py-10 max-w-3xl mx-auto">
                        <SectionBadge title="Inventory" />
                        <h1 className="text-4xl md:text-5xl lg:text-6xl text-center font-heading font-semibold !leading-tight mt-6">
                            Inventory management made simple
                        </h1>
                        <p className="paragraph mt-6 max-w-2xl mx-auto">
                            Streamline your inventory workflows with powerful tools that help you plan, track, and deliver projects on time and within budget.
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
                        <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-medium !leading-snug mt-6">
                            Explore our features
                        </h2>
                        <p className="paragraph mt-6">
                            Streamline your construction projects with powerful tools that optimize workflows, enhance collaboration, and ensure timely delivery.
                        </p>
                    </div>
                </Container>
                <Container delay={0.4} className="w-full mt-12">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {[FEATURES[0], FEATURES[2], FEATURES[3]].map((feature, index) => (
                            <MagicCard key={index} className="border-none p-0">
                                <div className="flex flex-col items-start p-4 md:p-6 bg-card rounded-lg lg:rounded-2xl w-full border border-border/50 hover:shadow-[inset_0_0_0_4px_rgba(67,73,239,0.8)] transition-all duration300 text-start">
                                    <div className="w-full flex items-center relative">
                                        <feature.icon strokeWidth={1.6} className="size-12 text-primary" />
                                    </div>
                                    <h3 className="text-lg lg:text-xl font-heading font-medium mt-6">
                                        {feature.title}
                                    </h3>
                                    <p className="text-sm lg:text-base text-muted-foreground mt-2">
                                        {feature.description}
                                    </p>
                                    <Button variant="link" asChild className="mt-2 px-0">
                                        <Link href={feature.link} className="flex items-center">
                                            Learn more <ArrowRightIcon className="w-4 h-4 ml-2" />
                                        </Link>
                                    </Button>
                                </div>
                            </MagicCard>
                        ))}
                    </div>
                </Container>
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

export default InventoryManagementPage
