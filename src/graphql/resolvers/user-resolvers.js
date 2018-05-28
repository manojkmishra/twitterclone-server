import User from '../../models/User';
import { userInfo } from 'os';

export default 
{  signup: (_, { fullName, ...rest }) => 
  {   const [firstName, ...lastName] = fullName.split(' ');
      return User.create({firstName, lastName, ...rest});
  }
};
