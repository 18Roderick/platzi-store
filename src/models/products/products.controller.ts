import { Body, Controller, Get, Param, Post, Query, Put } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Get('filter')
  getProductFilter() {
    return `yo soy un filter`;
  }

  @Get(':productId')
  getProduct(@Param('productId') productId: string) {
    return `prdocuto ${productId}`;
  }

  @Get()
  getProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return { limit, offset, brand };
  }

  @Post()
  get(@Body() payload: any) {
    return {
      msg: 'Create Product',
      payload,
    };
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() payload: any) {
    return {
      msg: 'Create Product',
      id,
      payload,
    };
  }
}
