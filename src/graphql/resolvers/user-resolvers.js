import User from '../../models/User';
import { requireAuth } from '../../services/auth';

export default 
{ // signup: (_, { fullName, ...rest }) => 
  signup: async (_, { fullName, ...rest }) => 
  {   try { const [firstName, ...lastName] = fullName.split(' ');
            //return User.create({firstName, lastName, ...rest});
            const user=await User.create({firstName, lastName, ...rest});
            return { token: user.createToken(), }; //createtoken---coming from user model
          } catch (error) {   throw error;  }
  },
  login: async (_, { email, password }) => 
  {  try {  const user = await User.findOne({ email });
            if (!user) { throw new Error('User not exist!'); }
            if (!user.authenticateUser(password)) { throw new Error('Password not match!');   }
           return {token: user.createToken()}     // return user;
         } catch (error) {   throw error;  }
  },
  me: async (_, args, { user }) => 
  { try { //await requireAuth(user);
          // return User.findById(user._id);
          const me = await requireAuth(user);
          return me;
        } catch (error) {   throw error;  }
  },
};
