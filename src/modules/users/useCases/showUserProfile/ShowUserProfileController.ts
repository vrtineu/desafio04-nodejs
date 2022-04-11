import { Request, Response } from 'express';

import { ShowUserProfileUseCase } from './ShowUserProfileUseCase';

class ShowUserProfileController {
  constructor(private showUserProfileUseCase: ShowUserProfileUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.params;

    try {
      const user = this.showUserProfileUseCase.execute({ user_id });

      return response.json({
        id: user.id,
        name: user.name,
        admin: user.admin,
        email: user.email,
        created_at: user.created_at,
        updated_at: user.updated_at,
      });
    } catch (err) {
      return response.status(404).json({ error: err.message });
    }
  }
}

export { ShowUserProfileController };
