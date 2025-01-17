import React from 'react';
import { generateMetadata } from '@/utils';
import { Container, Wrapper } from "@/components";

export const metadata = generateMetadata({
    title: "Privacy Policy",
});

const PrivacyPolicyPage = () => {
    return (
        <div className="max-w-4xl mx-auto pt-20 pb-32 px-4 sm:px-6 lg:px-8">
            <Wrapper>
                <Container delay={0.1} className="w-full pt-20">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl text-center font-heading font-semibold !leading-tight mt-6">
                        Privacy Policy
                    </h1>
                </Container>

                <Container delay={0.2} className="w-full">
                    <div className="space-y-6 text-muted-foreground mt-10">
                        <p className="mb-6">
                            At <strong>Craftly</strong>, we prioritize the privacy and security of your construction project data. This Privacy Policy outlines how we collect, use, and protect your information when you use our construction project management platform. By using Craftly, you agree to the terms described herein.
                        </p>

                        <section>
                            <h2 className="text-xl font-semibold mb-4 text-foreground">1. Information We Collect</h2>
                            <p>
                                We collect information necessary for construction project management, including project details, team member information, material tracking data, and user credentials. This includes contact information, project schedules, resource allocation data, and usage analytics to improve our platform's performance.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold mb-4 text-foreground">2. How We Use Your Information</h2>
                            <p>
                                Your information is used to:
                            </p>
                            <ul className="list-disc ml-6 mt-2 space-y-2">
                                <li>Facilitate project management and team collaboration</li>
                                <li>Track construction materials and resources</li>
                                <li>Generate project reports and analytics</li>
                                <li>Ensure platform security and performance</li>
                                <li>Send important project updates and notifications</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold mb-4 text-foreground">3. Data Security</h2>
                            <p>
                                We implement industry-standard security measures to protect your construction project data. This includes encryption, secure data storage, and regular security audits. While we maintain high security standards, no system is entirely immune to unauthorized access.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold mb-4 text-foreground">4. Project Data Storage</h2>
                            <p>
                                Your project data is stored securely on our servers and backed up regularly. We retain project information for the duration of your subscription and a reasonable period afterward for compliance and backup purposes. You can request data export or deletion at any time.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold mb-4 text-foreground">5. Third-Party Services</h2>
                            <p>
                                We may integrate with third-party services to enhance our construction management platform. These services are carefully selected and bound by confidentiality agreements. We only share necessary data to facilitate specific features like payment processing or analytics.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold mb-4 text-foreground">6. Your Rights</h2>
                            <p>
                                You have the right to access, update, or delete your project data and personal information. For any privacy-related requests, please contact us at <a href="mailto:support@craftly.com" className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-500 underline">support@craftly.com</a>.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold mb-4 text-foreground">7. Updates to This Policy</h2>
                            <p>
                                We may update this Privacy Policy to reflect changes in our practices or legal requirements. Any significant changes will be communicated through our platform and via email to our subscribers.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold mb-4 text-foreground">8. Contact Us</h2>
                            <p>
                                If you have questions about our privacy practices or need assistance, please contact our privacy team at <a href="mailto:support@craftly.com" className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-500 underline">support@craftly.com</a>.
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

export default PrivacyPolicyPage;
