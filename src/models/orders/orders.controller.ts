import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';

@Controller('orders')
export class OrdersController {
  @Get('filter')
  getOrderFilter() {
    return `yo soy un filter`;
  }

  @Get(':orderId')
  getOrder(@Param('orderId') orderId: string) {
    return { orderId: orderId };
  }

  @Get()
  getOrders(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return { limit, offset, brand };
  }

  @Post()
  get(@Body() payload: any) {
    return {
      msg: 'Create order',
      payload,
    };
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() payload: any) {
    return {
      msg: 'order Actualizado',
      id,
      payload,
    };
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return {
      msg: 'orden Borrado',
      id,
    };
  }
}
