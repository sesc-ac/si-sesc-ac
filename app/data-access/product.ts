import { Prisma, Product } from "@prisma/client";
import prisma from "../db";

export async function createProduct(product: Prisma.ProductCreateInput): Promise<Product>{
    return await prisma.product.create({ data: product });
}

export async function getProductByLegacyId(legacyId: number, legacyOriginDatabase: string): Promise<Product | null>{
    return await prisma.product.findFirst({
        where: {
            legacyId: legacyId,
            legacyOriginDatabase: legacyOriginDatabase
        }
    });
}