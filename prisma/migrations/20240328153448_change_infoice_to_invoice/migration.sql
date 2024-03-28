/*
  Warnings:

  - You are about to drop the column `infoice` on the `Transaction` table. All the data in the column will be lost.
  - Added the required column `invoice` to the `Transaction` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Transaction" DROP COLUMN "infoice",
ADD COLUMN     "invoice" TEXT NOT NULL;
