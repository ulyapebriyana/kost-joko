import Navbar from "@/components/navbar";
import { cn } from "@/lib/utils";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section className="p-10">{children}</section>;
}
