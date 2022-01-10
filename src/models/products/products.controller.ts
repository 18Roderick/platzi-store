import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  Put,
  Delete,
} from '@nestjs/common';

import { ProductsService } from '../../services/products/products.service';
import { ParseIntPipe } from '../../common/parse-int.pipe';
import { CreateProductDto, UpdateProductDto } from '../../dtos/products.dto';
@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get('filter')
  getProductFilter() {
    return {};
  }

  @Get(':productId')
  getProduct(@Param('productId', ParseIntPipe) productId: number) {
    return this.productsService.findOne(productId);
  }

  @Get()
  getProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return this.productsService.findAll();
  }

  @Post()
  create(@Body() payload: CreateProductDto) {
    return this.productsService.create(payload);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdateProductDto,
  ) {
    return this.productsService.update(id, payload);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.productsService.delete(id);
  }
}
