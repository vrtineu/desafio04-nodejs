import { Response, Request } from 'express';

import { CreateUserUseCase } from './CreateUserUseCase';

class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  handle(request: Request, response: Response): Response {
    const { name, email } = request.body;

    try {
      const user = this.createUserUseCase.execute({ name, email });

      return response.status(201).json({
        name: user.name,
        email: user.email,
        admin: user.admin,
      });
    } catch (err) {
      return response
        .status(400)
        .json({ error: 'A user with this id does not exist!' });
    }
  }
}

export { CreateUserController };
