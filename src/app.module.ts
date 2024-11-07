import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import UserController from './user/interface/UserController';
import UserServiceImpl from './user/domain/service/UserServiceImpl';
import UserFacade from './user/application/UserFacade';
import { DataBaseProviders } from './common/config/DataBase.provider';
import UserTypeOrmRepository from './user/infrastructure/UserTypeOrmRepository';

@Module({
	imports: [],
	controllers: [AppController, UserController],
	providers: [
		...DataBaseProviders,
		AppService,
		{
			provide: 'UserService',
			useClass: UserServiceImpl,
		},
		UserFacade,
		{
			provide: 'UserRepository',
			useClass: UserTypeOrmRepository,
		},
	],
	exports: [...DataBaseProviders],
})
export class AppModule {}
