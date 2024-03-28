-- CreateTable
CREATE TABLE "Room" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "available" BOOLEAN NOT NULL DEFAULT true,
    "description" TEXT NOT NULL,
    "price" BIGINT NOT NULL,

    CONSTRAINT "Room_pkey" PRIMARY KEY ("id")
);
