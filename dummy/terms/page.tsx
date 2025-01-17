import React from 'react';
import { generateMetadata } from '@/utils';
import { Container, Wrapper } from "@/components";

export const metadata = generateMetadata({
    title: "Terms of Service",
});

const TermsPage = () => {
    return (
        <div className="max-w-4xl mx-auto pt-20 pb-32 px-4 sm:px-6 lg:px-8">
            <Wrapper>
                <Container delay={0.1} className="w-full pt-20">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl text-center font-heading font-semibold !leading-tight mt-6">
                        Terms of Service
                    </h1>
                </Container>

                <Container delay={0.2} className="w-full">
                    <div className="space-y-6 text-muted-foreground mt-10">
                        <p className="mb-6">
                            Welcome to Craftly. By accessing or using our construction project management platform, you agree to be bound by these Terms of Service. Please read them carefully before using our services.
                        </p>

                        <section>
                            <h2 className="text-xl font-semibold mb-4 text-foreground">1. Service Description</h2>
                            <p>
                                Craftly provides a cloud-based construction project management platform designed to help construction professionals manage projects, teams, and resources. Our services include project planning, resource allocation, material tracking, and team collaboration tools.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold mb-4 text-foreground">2. User Accounts</h2>
                            <p>
                                To use Craftly, you must create an account. You are responsible for maintaining the security of your account credentials and for all activities that occur under your account. You must immediately notify us of any unauthorized use of your account.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold mb-4 text-foreground">3. Subscription and Payments</h2>
                            <p>
                                Our services are provided on a subscription basis. You agree to pay all fees according to your selected plan. Fees are non-refundable except where required by law. We reserve the right to modify our pricing with reasonable notice.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold mb-4 text-foreground">4. Data Usage and Storage</h2>
                            <p>
                                You retain all rights to your construction project data. By using our services, you grant us the necessary permissions to host, store, and process your data to provide our services. We handle your data in accordance with our Privacy Policy.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold mb-4 text-foreground">5. User Responsibilities</h2>
                            <p>
                                You agree to use our platform responsibly and to:
                            </p>
                            <ul className="list-disc ml-6 mt-2 space-y-2">
                                <li>Provide accurate project and team information</li>
                                <li>Maintain appropriate security measures for your account</li>
                                <li>Comply with all applicable construction laws and regulations</li>
                                <li>Respect intellectual property rights</li>
                                <li>Not misuse or attempt to exploit our services</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold mb-4 text-foreground">6. Service Availability</h2>
                            <p>
                                While we strive for maximum uptime, we do not guarantee uninterrupted access to our services. We reserve the right to modify, suspend, or discontinue any part of our services with reasonable notice to users.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold mb-4 text-foreground">7. Limitation of Liability</h2>
                            <p>
                                Craftly is not liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services. Our liability is limited to the amount paid for our services in the preceding 12 months.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold mb-4 text-foreground">8. Termination</h2>
                            <p>
                                We may terminate or suspend your account for violations of these terms. Upon termination, you will have a reasonable time to export your project data. You may cancel your subscription at any time through your account settings.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold mb-4 text-foreground">9. Changes to Terms</h2>
                            <p>
                                We may update these terms to reflect changes in our services or legal requirements. We will notify users of significant changes via email or through our platform. Continued use of our services constitutes acceptance of updated terms.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold mb-4 text-foreground">10. Contact Information</h2>
                            <p>
                                For questions about these terms, please contact our legal team at <a href="mailto:legal@craftly.com" className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-500 underline">legal@craftly.com</a>.
                            </p>
                        </section>

                        <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-8">
                            Last updated: December 20, 2024
                        </p>
                    </div>
                </Container>
            </Wrapper>
        </div>
    );
};

export default TermsPage;