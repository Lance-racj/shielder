import { NestApplication, NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestApplication>(AppModule);
  /*
   * 配置swagger接口可视化文档
   */
  const options = new DocumentBuilder()
    .setTitle('weitang blog api')
    .setDescription('The API description')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);
  /*
   * 服务启动于3000端口
   */
  await app.listen(3000);
}
bootstrap();
