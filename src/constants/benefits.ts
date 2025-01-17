import {
    FolderIcon,
    FileTextIcon,
    CalculatorIcon,
    RulerIcon,
    DatabaseIcon,
    ClipboardListIcon,
    KanbanSquareIcon,
    FileIcon,
    ClockIcon,
    MessageSquareIcon,
    BarChartIcon,
} from "lucide-react";

export const BENEFITS_DATA = {
    'Project documents': [
        {
            title: "Project folder",
            subtitle: "Central project organization",
            info: "Keep all project files organized",
            description: "The central location for all project-related elements. With the project folder, you always stay organized and keep everything in view.",
            icon: FolderIcon,
            image: "/images/benefits/benefit.jpg"
        },
        {
            title: "Offer & invoice creation",
            subtitle: "Streamlined documentation",
            info: "Create professional documents easily",
            description: "Generate professional offers and invoices with our intuitive tools. Customize templates and maintain consistency across all your business documents.",
            icon: FileTextIcon,
            image: "/images/benefits/benefit2.jpg"
        },
        {
            title: "In-depth calculation",
            subtitle: "Detailed cost analysis",
            info: "Precise project calculations",
            description: "Perform detailed cost calculations and analysis for your projects. Account for materials, labor, and overhead with our comprehensive calculation tools.",
            icon: CalculatorIcon,
            image: "/images/benefits/benefit3.jpg"
        },
    ],
    'Planning board': [
        {
            title: "Visual Planning",
            subtitle: "Interactive planning tools",
            info: "Visualize project timelines",
            description: "Plan and visualize your projects with our interactive planning board. Drag and drop tasks, set dependencies, and manage resources effectively.",
            icon: KanbanSquareIcon,
            image: "/images/benefits/benefit2.jpg"
        },
        {
            title: "Measurements",
            subtitle: "Accurate project dimensions",
            info: "Track project measurements",
            description: "Record and manage all project measurements in one place. Ensure accuracy and consistency across your construction plans and execution.",
            icon: RulerIcon,
            image: "/images/benefits/benefit3.jpg"
        },
        {
            title: "Master data",
            subtitle: "Centralized information",
            info: "Manage core project data",
            description: "Store and manage all your master data in one central location. From client information to material specifications, keep everything accessible.",
            icon: DatabaseIcon,
            image: "/images/benefits/benefit4.jpg"
        },
    ],
    'Documentation': [
        {
            title: "Project Documentation",
            subtitle: "Comprehensive record keeping",
            info: "Maintain detailed records",
            description: "Keep detailed records of all project-related documentation. From permits to contracts, store and access important documents easily.",
            icon: FileIcon,
            image: "/images/benefits/benefit5.jpg"
        },
        {
            title: "Financial Calculations",
            subtitle: "Advanced cost management",
            info: "Track project finances",
            description: "Perform detailed financial calculations for your projects. Monitor budgets, track expenses, and analyze project profitability.",
            icon: BarChartIcon,
            image: "/images/benefits/benefit2.jpg"
        }
    ],
    'Time Management': [
        {
            title: "Time Tracking",
            subtitle: "Efficient time tracking",
            info: "Track work hours and progress",
            description: "Monitor working hours, track project progress, and manage team productivity with our comprehensive time tracking tools.",
            icon: ClockIcon,
            image: "/images/benefits/benefit3.jpg"
        },
        {
            title: "Automated work orders",
            subtitle: "Streamlined workflows",
            info: "Automate work management",
            description: "Create and manage work orders automatically. Streamline your workflow and ensure proper task distribution among team members.",
            icon: ClipboardListIcon,
            image: "/images/benefits/benefit2.jpg"
        }
    ],
    'Communication': [
        {
            title: "Team Communication",
            subtitle: "Seamless collaboration",
            info: "Connect team members",
            description: "Foster effective team communication with integrated messaging and collaboration tools. Keep everyone informed and aligned on project goals.",
            icon: MessageSquareIcon,
            image: "/images/benefits/benefit.jpg"
        },
        {
            title: "Flat rate & cumulative discounts",
            subtitle: "Flexible pricing options",
            info: "Manage pricing and discounts",
            description: "Set up flexible pricing structures with flat rates and cumulative discounts. Perfect for managing long-term client relationships and bulk projects.",
            icon: CalculatorIcon,
            image: "/images/benefits/benefit4.jpg"
        },
    ],
} as const;

// Type for accessing the data
export type BenefitCategory = keyof typeof BENEFITS_DATA;
export type Benefit = (typeof BENEFITS_DATA)[BenefitCategory][number];
