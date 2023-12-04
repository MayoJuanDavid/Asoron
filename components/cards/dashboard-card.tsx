interface DashboardCardProps {
  icon: React.ReactNode;
  title: string;
  value: number;
}

const DashboardCard = ({ icon, title, value }: DashboardCardProps) => {
  return (
    <article className="bg-white p-4 rounded-md">
      <div className="flex items-center mb-2">
        {icon}
        <h2 className="text-xl font-bold">{title}</h2>
      </div>
      <p className="text-4xl font-bold text-[#3498db]">{value}</p>
    </article>
  );
};

export default DashboardCard;
