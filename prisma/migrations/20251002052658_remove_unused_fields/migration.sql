/*
  Warnings:

  - You are about to drop the column `competencies` on the `JobApplication` table. All the data in the column will be lost.
  - You are about to drop the column `educationHistory` on the `JobApplication` table. All the data in the column will be lost.
  - You are about to drop the column `volunteerHistory` on the `JobApplication` table. All the data in the column will be lost.
  - You are about to drop the column `workHistory` on the `JobApplication` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "JobApplication" DROP COLUMN "competencies",
DROP COLUMN "educationHistory",
DROP COLUMN "volunteerHistory",
DROP COLUMN "workHistory";
