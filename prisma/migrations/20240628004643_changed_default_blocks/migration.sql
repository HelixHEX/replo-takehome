-- AlterTable
ALTER TABLE "Document" ALTER COLUMN "blocks" DROP NOT NULL,
ALTER COLUMN "blocks" SET DEFAULT '';
