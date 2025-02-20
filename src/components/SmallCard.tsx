interface SmallCardProps {
    title: string;
    description: string;
    className?: string;
  }
  
  const SmallCard: React.FC<SmallCardProps> = ({ title, description, className }) => {
    return (
      <div className={`flex flex-col items-center transform ${className}`}>
        <div className="p-6 bg-amber-950 rounded-lg shadow-md w-72 h-64 flex flex-col justify-between">
          <div className="p-4 bg-amber-200 rounded-md shadow-md text-left w-full h-40 flex items-center">
            <p className="text-black font-medium">{description}</p>
          </div>
          <h3 className="text-lg font-bold text-amber-400">{title}</h3>
        </div>
      </div>
    );
  };
  
  export default SmallCard;
  