import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import PageTitle from "./PageTitle";
import prisma from "@/lib/db";

const formatPriceToRupiah = (price: any): string => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(price);
};

const Room = async () => {
  const rooms = await prisma.room.findMany({
    orderBy: {
      id: "asc",
    },
  });

  return (
    <div className="flex gap-10 flex-col">
      <PageTitle title="Ketersediaan Kamar" className="text-4xl text-center" />
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
        {rooms.map((room) => (
          <Card key={room.id} className="w-full">
            <CardHeader>
              <CardTitle>{room.name}</CardTitle>
              <CardDescription>
                {formatPriceToRupiah(room.price)}
              </CardDescription>
            </CardHeader>
            <CardContent>{room.description}</CardContent>
            <CardFooter>
              <Button disabled={!room.available}>
                {room.available ? "Pesan" : "Terisi"}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Room;
