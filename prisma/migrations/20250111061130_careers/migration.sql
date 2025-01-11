/*
  Warnings:

  - You are about to drop the column `address` on the `JobApplication` table. All the data in the column will be lost.
  - You are about to drop the column `certificate` on the `JobApplication` table. All the data in the column will be lost.
  - You are about to drop the column `classGraduated` on the `JobApplication` table. All the data in the column will be lost.
  - You are about to drop the column `education` on the `JobApplication` table. All the data in the column will be lost.
  - You are about to drop the column `institution` on the `JobApplication` table. All the data in the column will be lost.
  - You are about to drop the column `selectedRoles` on the `JobApplication` table. All the data in the column will be lost.
  - You are about to drop the column `yearCompleted` on the `JobApplication` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "JobApplication" DROP COLUMN "address",
DROP COLUMN "certificate",
DROP COLUMN "classGraduated",
DROP COLUMN "education",
DROP COLUMN "institution",
DROP COLUMN "selectedRoles",
DROP COLUMN "yearCompleted",
ADD COLUMN     "educationHistory" JSONB[];
