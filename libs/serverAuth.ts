import prisma from '@/libs/prismadb';
import { NextApiRequest } from 'next';
import { getSession } from 'next-auth/react';

const serverAuth = async (req: NextApiRequest) => {
  const session = await getSession({ req });
  const notSignedInMessage = 'Not signed in';

  if (!session?.user?.email) {
    throw new Error(notSignedInMessage);
  }

  const currentUser = await prisma.user.findUnique({
    where: { email: session.user.email },
  });

  if (!currentUser) {
    throw new Error(notSignedInMessage);
  }

  return { currentUser };
};

export default serverAuth;
