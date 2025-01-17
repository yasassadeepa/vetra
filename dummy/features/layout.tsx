import React from 'react';

interface Props {
    children: React.ReactNode
}

const FeaturesLayout = ({ children }: Props) => {
    return (
        <div className="mx-auto pt-36 pb-20 w-full z-40 relative">
            {children}
        </div>
    );
};

export default FeaturesLayout
