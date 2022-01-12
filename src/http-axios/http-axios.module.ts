import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { HttpAxiosService } from './http-axios.service';

@Module({
  imports: [HttpModule],
  providers: [HttpAxiosService],
  exports: [HttpAxiosService],
})
export class HttpAxiosModule {}
