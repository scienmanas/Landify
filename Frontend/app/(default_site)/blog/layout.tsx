import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="page-contents relative w-full h-fit flex flex-col items-center justify-center">
      {children}
    </div>
  );
}
