import { Body, Controller, HttpStatus, Post, Req, Res } from '@nestjs/common';
import { Response } from 'express';

@Controller('/user')
class UserController {
  @Post()
  public createUser(@Req() req: Request, @Res() res: Response): Response {
    console.log(req.body);

    return res.status(HttpStatus.OK).json({
      ok: 'userId',
    });
  }
}

export default UserController;
