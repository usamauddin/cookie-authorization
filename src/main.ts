import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import cookieParser from 'cookie-parser';
import cors from "cors";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cookieParser())
  // app.enableCors({
  //   origin: "http://localhost:3000",
  //   methods: "GET,PUT,PATCH,POST,DELETE",
  //   credentials: true,
  //   allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'Origin']
  // })
  const corsOrigin = {
    origin: 'http://localhost:3000', //or whatever port your frontend is using
    credentials: true,
    optionSuccessStatus: 200
  }
  app.use(cors(corsOrigin));
  await app.listen(3000);
  console.log('server running at 3000');

}
bootstrap();
