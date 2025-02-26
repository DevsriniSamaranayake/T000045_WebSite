import React from "react";

interface BuyCardProps {
    title: string;
    description: string;
 }

const BuyCard: React.FC<BuyCardProps> = ({ title,description}) =>{
    return (
       
        <div className="font-shojumaru max-w-sm p-6 bg-[#340301] mt-9">
             <h3 className="text-lg font-bold bg-gradient-to-r from-[#F6951D] to-[#FDE63B] bg-clip-text text-transparent">{title}</h3>
                <p className="text-white font-medium">{description}</p>
        </div>
    );
};

export default BuyCard;