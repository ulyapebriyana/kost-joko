import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

import PageTitle from "@/components/PageTitle";
import Image from "next/image";
import { DollarSign, Users, CreditCard, Activity } from "lucide-react";
import Card, { CardContent, CardProps } from "@/components/Card";
import BarChart from "@/components/BarChart";
import SalesCard, { SalesProps } from "@/components/SalesCard";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

const cardData: CardProps[] = [
  {
    label: "Total Pendapatan",
    amount: "Rp 5.500.000,00",
    discription: "+20% dari bulan lalu",
    icon: DollarSign
  },
  {
    label: "Kamar Kosong",
    amount: "0",
    discription: "Kamar terisi semua",
    icon: Users
  },
  {
    label: "Sewa Kamar",
    amount: "+3",
    discription: "+3 kamar sejak bulan lalu",
    icon: CreditCard
  },
  {
    label: "User Aktif",
    amount: "+13",
    discription: "+7 sejak sebulan yang lalu",
    icon: Activity
  }
];

const uesrSalesData: SalesProps[] = [
  {
    name: "Olivia Martin",
    email: "olivia.martin@email.com",
    saleAmount: 550000
  },
  {
    name: "Jackson Lee",
    email: "isabella.nguyen@email.com",
    saleAmount: 550000
  },
  {
    name: "Isabella Nguyen",
    email: "isabella.nguyen@email.com",
    saleAmount: 550000
  },
  {
    name: "William Kim",
    email: "will@email.com",
    saleAmount: 550000
  },
  {
    name: "Sofia Davis",
    email: "sofia.davis@email.com",
    saleAmount: 550000
  }
];

export default function AdminDashboard() {
  const { userId } = auth();

  if (userId !== process.env.ADMIN_ID) {
    return redirect("/")
  }
  return (
    <div className="flex flex-col gap-5  w-full">
      <PageTitle title="Dashboard" />
      <section className="grid w-full grid-cols-1 gap-4 gap-x-8 transition-all sm:grid-cols-2 xl:grid-cols-4">
        {cardData.map((d, i) => (
          <Card
            key={i}
            amount={d.amount}
            discription={d.discription}
            icon={d.icon}
            label={d.label}
          />
        ))}
      </section>
      <section className="grid grid-cols-1  gap-4 transition-all lg:grid-cols-2">
        <CardContent>
          <p className="p-4 font-semibold">Ringkasan(juta)</p>

          <BarChart />
        </CardContent>
        <CardContent className="flex justify-between gap-4">
          <section>
            <p>Pemesanan Terbaru</p>
            <p className="text-sm text-gray-400">
              Kamu menerima 6 transaksi sebulan terahir
            </p>
          </section>
          {uesrSalesData.map((d, i) => (
            <SalesCard
              key={i}
              email={d.email}
              name={d.name}
              saleAmount={d.saleAmount}
            />
          ))}
        </CardContent>

        {/*  */}
      </section>
    </div>
  );
}

