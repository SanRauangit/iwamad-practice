type HeaderProps = {
  title: string;
};

export const Header = ({ title }: HeaderProps) => {
  return (
    <header className="w-full text-center py-4">
      <h1 className="text-2xl font-bold text-gray-800">{title}</h1>
    </header>
  );
};