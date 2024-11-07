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
	public createUser(@Req() req: Request, @Res() res: Response): Response {
		console.log(req.body);

		return res.status(HttpStatus.OK).json({
			ok: 'userId',
		});
	}

	@Get()
	public getQueryTest(
		@Query('testQuery') testQuery: string,
		@Res() res: Response,
	) {
		return res.status(HttpStatus.OK).json({
			query: testQuery,
		});
	}
}

export default UserController;
