"use client";

import { PLANS } from '@/constants';
import { cn } from '@/lib';
import { CheckIcon, CircleArrowUp, CreditCard, Gem, Headset, Zap } from 'lucide-react';
import { useState } from 'react';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import Container from "../global/container";
import { PLAN } from "@/constants/plans";
import NumberFlow from '@number-flow/react';

type Plan = "monthly" | "annually";

const Pricing = () => {

    const [billPlan, setBillPlan] = useState<Plan>("monthly");

    const handleSwitch = () => {
        setBillPlan((prev) => (prev === "monthly" ? "annually" : "monthly"));
    };

    return (
        <div className="relative flex flex-col items-center justify-center max-w-5xl py-20 mx-auto">

            {/* <div className="hidden lg:block absolute -bottom-1/4 -right-1/4 bg-primary w-72 h-72 rounded-full -z-10 blur-[14rem]"></div> */}

            <div className="flex flex-col items-center justify-center max-w-2xl mx-auto">
                <Container>
                    <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
                        <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-medium !leading-snug mt-6">
                            Find the right plan that suits <br className="hidden lg:block" /> <span className="font-subheading italic">your needs</span>
                        </h2>
                        <p className="text-base md:text-lg text-center text-accent-foreground/80 mt-6">
                            Transform your marketing with AI-powered automation. Create campaigns faster, generate better content, and make smarter decisions in minutes.
                        </p>
                    </div>
                </Container>

                <Container delay={0.2}>
                    <div className="flex items-center justify-center space-x-4 mt-6">
                        <span className="text-base font-medium">Monthly</span>
                        <button onClick={handleSwitch} className="relative rounded-full focus:outline-none">
                            <div className="w-12 h-6 transition rounded-full shadow-md outline-none bg-blue-500"></div>
                            <div
                                className={cn(
                                    "absolute inline-flex items-center justify-center w-4 h-4 transition-all duration-500 ease-in-out top-1 left-1 rounded-full bg-white",
                                    billPlan === "annually" ? "translate-x-6" : "translate-x-0"
                                )}
                            />
                        </button>
                        <span className="text-base font-medium">Annually</span>
                    </div>
                </Container>
            </div>

            <div className="grid w-full grid-cols-1 lg:grid-cols-2 pt-8 lg:pt-12 gap-4 lg:gap-6 max-w-4xl mx-auto">
                {PLANS.map((plan, idx) => (
                    <Container key={idx} delay={0.1 * idx + 0.1}>
                        <Plan key={plan.id} plan={plan} billPlan={billPlan} />
                    </Container>
                ))}
            </div>
        </div>
    );
};

const Plan = ({ plan, billPlan }: { plan: PLAN, billPlan: Plan }) => {
    return (
        <div
            className={cn(
                "flex flex-col rounded-2xl lg:rounded-3xl transition-all bg-background items-start w-full border border-foreground/10",
                // plan.title === "Mastermind" ? "border-blue-500/60 hover:border-blue-500" : "border-border/60 hover:border-muted-foreground/50"
            )}
        >
            <div
                className={cn(
                    "p-4 md:p-8 flex rounded-t-2xl lg:rounded-t-3xl flex-col items-start w-full relative",
                    // plan.title === "Mastermind" ? "bg-blue-500/10" : "bg-neutral-500/10"
                )}
            >
                <h2 className="font-medium text-xl text-foreground pt-5">
                    {plan.title}
                </h2>
                <h3 className="mt-3 text-3xl font-medium md:text-5xl">
                    <NumberFlow
                        value={billPlan === "monthly" ? plan.monthlyPrice : plan.annuallyPrice}
                        suffix={billPlan === "monthly" ? "/mo" : "/yr"}
                        format={{
                            currency: "USD",
                            style: "currency",
                            currencySign: "standard",
                            minimumFractionDigits: 0,
                            maximumFractionDigits: 0,
                            currencyDisplay: "narrowSymbol"
                        }}
                    />
                </h3>
                <p className="text-sm md:text-base text-muted-foreground mt-2">
                    {plan.desc}
                </p>
            </div>
            <div className="flex flex-col items-start w-full px-4 py-2 md:px-8">
                <Button size="lg" variant={plan.title === "Mastermind" ? "blue" : "white"} className="w-full">
                    {plan.buttonText}
                </Button>
                <span className="text-sm text-center text-muted-foreground mt-3 mx-auto">
                    {billPlan === "monthly" ? (
                        "Billed monthly"
                    ) : (
                        "Billed in one annual payment"
                    )}
                </span>
            </div>
            <div className="flex flex-col items-start w-full p-5 mb-4 ml-1 gap-y-2">
                <span className="text-base text-left mb-2">
                    {plan.title === "Mastermind" ? "Including: " : "Standard plus: "}
                </span>
                {plan.features.map((feature, index) => (
                    <div key={index} className="flex items-center justify-start gap-2">
                        <div className="flex items-center justify-center">
                            <CheckIcon className="size-5" />
                        </div>
                        <span>{feature}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Pricing;
