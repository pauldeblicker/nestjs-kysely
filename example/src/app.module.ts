import { Module } from '@nestjs/common';
import { MysqlDialect } from 'kysely';
import { createPool } from 'mysql2';
import { KyselyModule } from 'nestjs-kysely';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    KyselyModule.forRoot({
      dialect: new MysqlDialect({
        pool: createPool({
          host: '127.0.0.1',
          user: 'root',
          password: 'password',
          database: 'kysely_test',
        }),
      }),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
