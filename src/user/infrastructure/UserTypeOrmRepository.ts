import { Injectable } from '@nestjs/common';
import UserRepository from '../domain/repository/UserRepository';
import { Repository } from 'typeorm';
import UserEntity from './entity/User.entity';

@Injectable()
export default class UserTypeOrmRepository
	extends Repository<UserEntity>
	implements UserRepository {}
