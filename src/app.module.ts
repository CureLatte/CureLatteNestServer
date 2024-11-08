import { Module } from '@nestjs/common';
import { DataBaseProviders } from './common/config/DataBase.provider';
import { UserModule } from './user/user.module';

@Module({
	imports: [UserModule],
	controllers: [],
	providers: [...DataBaseProviders],
	exports: [...DataBaseProviders],
})
export class AppModule {}
