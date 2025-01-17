import React from 'react'
import Container from "../global/container";
import { TrendingUpIcon, FilterIcon, DownloadIcon } from "lucide-react";

const Analysis = () => {
    return (
        <div className="relative flex flex-col items-center justify-center w-full py-20">
            <Container>
                <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-medium !leading-snug">
                        Intelligent marketing  <br /><span className="font-subheading italic">dashboard</span> 
                    </h2>
                    <p className="text-base md:text-lg text-accent-foreground/80 mt-4">
                        Gain detailed insights into your marketing performance and campaign metrics with our advanced analytics tools.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
                    <div className="absolute top-1/2 -translate-y-1/2 right-1/4 w-3/5 h-14 lg:h-20 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full -rotate-12 blur-[6.5rem] -z-10"></div>

                    <div className="rounded-2xl bg-background/40 relative border border-border/50">
                        <div className="bg-gradient-to-t from-background/60 to-transparent w-full h-3/5 absolute bottom-0 rounded-b-2xl"></div>
                        <div className="space-y-6 p-4 lg:p-6">
                            <h3 className="text-xl font-semibold">Campaign Insights</h3>
                            <p className="text-sm text-muted-foreground">
                                Track your campaign performance with data-driven insights.
                            </p>

                            <div className="space-y-4">
                                <div className="flex justify-between items-baseline">
                                    <div>
                                        <div className="text-3xl font-semibold">$12,834</div>
                                        <div className="text-sm text-success flex items-center gap-1">
                                            <TrendingUpIcon className="w-4 h-4" />
                                            +25% from last month
                                        </div>
                                    </div>
                                    <div className="flex gap-2">
                                        <button className="p-2 rounded-lg hover:bg-accent">
                                            <FilterIcon className="w-5 h-5" />
                                        </button>
                                        <button className="p-2 rounded-lg hover:bg-accent">
                                            <DownloadIcon className="w-5 h-5" />
                                        </button>
                                    </div>
                                </div>

                                {/* Campaign Table */}
                                <div className="space-y-2">
                                    <div className="grid grid-cols-4 text-sm text-muted-foreground py-2">
                                        <div>Campaign</div>
                                        <div>Status</div>
                                        <div>Reach</div>
                                        <div>ROI</div>
                                    </div>
                                    {[
                                        { name: "Summer Sale", status: "Active", reach: "45K", roi: "+32%" },
                                        { name: "Email Blast", status: "Completed", reach: "28K", roi: "+18%" },
                                        { name: "Social Ads", status: "Active", reach: "62K", roi: "+45%" },
                                    ].map((campaign) => (
                                        <div key={campaign.name} className="grid grid-cols-4 text-sm py-2 border-t border-border/50">
                                            <div>{campaign.name}</div>
                                            <div>{campaign.status}</div>
                                            <div>{campaign.reach}</div>
                                            <div className="text-success">{campaign.roi}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-2xl bg-background/40 relative border border-border/50">
                        <div className="bg-gradient-to-t from-background/60 to-transparent w-full h-3/5 absolute bottom-0 rounded-b-2xl"></div>
                        <div className="space-y-6 p-4 lg:p-6">
                            <h3 className="text-xl font-semibold">Audience Metrics</h3>
                            <p className="text-sm text-muted-foreground">
                                Understand your audience behavior and engagement patterns.
                            </p>

                            <div className="space-y-4">
                                <div className="flex justify-between items-baseline">
                                    <div>
                                        <div className="text-3xl font-semibold">84,392</div>
                                        <div className="text-sm text-success flex items-center gap-1">
                                            <TrendingUpIcon className="w-4 h-4" />
                                            +12% engagement rate
                                        </div>
                                    </div>
                                    <div className="flex gap-2">
                                        <button className="p-2 rounded-lg hover:bg-accent">
                                            <FilterIcon className="w-5 h-5" />
                                        </button>
                                        <button className="p-2 rounded-lg hover:bg-accent">
                                            <DownloadIcon className="w-5 h-5" />
                                        </button>
                                    </div>
                                </div>

                                {/* Audience Table */}
                                <div className="space-y-2">
                                    <div className="grid grid-cols-4 text-sm text-muted-foreground py-2">
                                        <div>Channel</div>
                                        <div>Users</div>
                                        <div>Sessions</div>
                                        <div>Conv. Rate</div>
                                    </div>
                                    {[
                                        { channel: "Social", users: "32K", sessions: "45K", rate: "3.2%" },
                                        { channel: "Email", users: "28K", sessions: "36K", rate: "4.5%" },
                                        { channel: "Direct", users: "15K", sessions: "22K", rate: "5.1%" },
                                    ].map((metric) => (
                                        <div key={metric.channel} className="grid grid-cols-4 text-sm py-2 border-t border-border/50">
                                            <div>{metric.channel}</div>
                                            <div>{metric.users}</div>
                                            <div>{metric.sessions}</div>
                                            <div className="text-success">{metric.rate}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
};

export default Analysis;
