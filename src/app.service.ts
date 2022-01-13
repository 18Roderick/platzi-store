import { Injectable, Inject } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';

import { Db } from 'mongodb';

import { HttpAxiosService } from './http-axios/http-axios.service';

import config from './config';

@Injectable()
export class AppService {
  constructor(
    private http: HttpAxiosService,
    @Inject('MONGO') private database: Db,
    @Inject(config.KEY) private configService: ConfigType<typeof config>,
  ) {}
  async getHello() {
    console.log(this.configService.apiKey);
    //return this.http.findAll();
    const name = this.configService.database.name;
    return `Hello World! $ ${name}`;
  }

  getTasks() {
    const tasksCollection = this.database.collection('tasks');
    return tasksCollection.find().toArray();
  }
}
