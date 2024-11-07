import { config } from 'dotenv';
import { DataSource } from 'typeorm';
import * as path from 'node:path';

config();

export const DataBaseProviders = [
	{
		provide: 'DATA_SOURCE',
		useFactory: async () => {
			const dataSource = new DataSource({
				type: 'mysql',
				host: process.env.DEV_MYSQL_HOST,
				port: +process.env.DEV_MYSQL_PORT,
				username: process.env.DEV_MYSQL_USER,
				password: process.env.DEV_MYSQL_PASSWORD,
				database: process.env.DEV_MYSQL_DATABASE,
				entities: [
					__dirname + '/../**/*.entity{.ts,.js}',
					path.join(
						__dirname +
							'/../../**/infrastructure/entity/*.entity.{js,ts}',
					),
				],
				// 동기화 -> Production 일경우 사용 x
				synchronize: true,
			});

			return dataSource.initialize();
		},
	},
];
