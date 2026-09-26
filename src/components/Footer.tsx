type FooterProps = {
  copyrightText: string;
};

export const Footer = ({ copyrightText }: FooterProps) => {
  return (
    <footer className="w-full text-center py-4 text-xs text-gray-500">
      <p>{copyrightText}</p>
    </footer>
  );
};