import { Injectable, NotFoundException } from '@nestjs/common';
import {
  CreateProductDto,
  UpdateProductDto,
} from 'src/products/dtos/products.dto';

import { Product } from '../entities/product.entity';

@Injectable()
export class ProductsService {
  private idIndex: number = 0;
  private products: Product[] = [
    {
      id: 2,
      name: 'Product',
      description: 'Product description',
      price: 29.3,
      stock: 12,
      image: 'http://',
    },
  ];

  findAll(): Product[] {
    return this.products;
  }

  findOne(id: number) {
    const product = this.products.find((p) => p.id === id);
    if (!product) {
      throw new NotFoundException(`Product ${id} not found`);
    }

    return product;
  }

  create(product: CreateProductDto) {
    this.idIndex++;
    const newProduct = {
      id: this.idIndex,
      ...product,
    };

    this.products.push(newProduct);

    return newProduct;
  }

  update(id: number, product: UpdateProductDto) {
    try {
      const prod = this.findOne(id);
      const updatedProduct = {
        ...prod,
        ...product,
      };
      this.products.map((p) => {
        if (prod.id !== p.id) return prod;
        else return updatedProduct;
      });

      return updatedProduct;
    } catch (error) {
      throw error;
    }
  }

  delete(id: number) {
    const product = this.findOne(id);

    this.products = this.products.filter((p) => p.id === id);

    return product;
  }
}
