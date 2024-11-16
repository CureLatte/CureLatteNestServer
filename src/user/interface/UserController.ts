import {
	Body,
	Controller,
	Get,
	HttpStatus,
	Post,
	Query,
	Req,
	Res,
} from '@nestjs/common';
import { Response, Request } from 'express';
import UserFacade from '../application/UserFacade';

@Controller('/user')
class UserController {
	userFacade: UserFacade;

	constructor(userFacade: UserFacade) {
		this.userFacade = userFacade;
	}

	@Post()
	public async createUser(
		@Req() req: Request,
		@Res() res: Response,
	): Promise<Response> {
		console.log(req.body);

		return res.status(HttpStatus.OK).json({
			ok: 'userId',
		});
	}
}

export default UserController;
