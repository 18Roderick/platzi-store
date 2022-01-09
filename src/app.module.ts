import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsController } from './models/products/products.controller';
import { CategoriesController } from './models/categories/categories.controller';
import { OrdersController } from './models/orders/orders.controller';
import { CustomersController } from './models/customers/customers.controller';
import { UsersController } from './models/users/users.controller';
import { BrandsController } from './models/brands/brands.controller';
import { ProductsService } from './services/products.service';

@Module({
  imports: [],
  controllers: [
    AppController,
    ProductsController,
    CategoriesController,
    BrandsController,
    UsersController,
    CustomersController,
    OrdersController,
  ],
  providers: [AppService, ProductsService],
})
export class AppModule {}
