import { Controller, Get, Res, flatten } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';
import * as CryptoJS from 'crypto-js'


@Controller('/')
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get('/')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/set-cookie')
  async setCookie(@Res() res: Response) {
    try {
      const token = 'tezeract'
      // var encrypted = CryptoJS.AES.encrypt(token, 'abc');
      const encrypted =   CryptoJS.AES.encrypt(JSON.stringify(token), 'secret key 123').toString();

      res.cookie('cookie', encrypted, {
        expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
        sameSite: 'lax',
        secure: false,
        httpOnly : false
      })
      res.send({ message: 'cookie sent'})
    } catch (error) {
      throw error
    }
  }
}
