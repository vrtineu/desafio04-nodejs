import { User } from '../../model/User';
import { IUsersRepository } from '../../repositories/IUsersRepository';

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const user = this.usersRepository.findById(user_id);

    if (!user) {
      throw new Error('A user with this id does not exist!');
    }

    const userIsAdmin = user.admin;

    if (!userIsAdmin) {
      throw new Error('This user does not have admin permission');
    }

    return this.usersRepository.list();
  }
}

export { ListAllUsersUseCase };
