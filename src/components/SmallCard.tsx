interface SmallCardProps {
    title: string;
    description: string;
    className?: string;
  }
  
  const SmallCard: React.FC<SmallCardProps> = ({ title, description, className }) => {
    return (
      <div className={`flex flex-col items-center transform ${className}`}>
        <div className="p-6 bg-[#350301] rounded-lg  md:w-72 md:h-64 sm:w-[400px] sm:h-auto flex flex-col justify-between">
          <div className="p-4 mb-3 bg-[#FFFBDE] rounded-md text-left w-full h-40 flex items-center">
            <p className="text-black font-medium">{description}</p>
          </div>
          <h3 className="text-lg font-bold text-[#FDE63B]">{title}</h3>
        </div>
      </div>
    );
  };
  
  export default SmallCard;
  