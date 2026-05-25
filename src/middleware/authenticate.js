import createHttpError from 'http-errors';
import { Session } from '../models/session.js';

export const authenticate = async (req, res) => {
  const { sessionId, accessToken } = req.cookies;

  if (!sessionId || !accessToken) {
    throw createHttpError(401, 'Missing token');
  }

  const session = await Session.findOne({
    _id: sessionId,
    accessToken,
  });

  if (!session) {
    throw createHttpError(401, 'No session');
  }

  const isAccessTokenExpired = session.accessTokenValidUntill < new Date();

  if (isAccessTokenExpired) {
    throw createHttpError(401, 'Acceess token expired');
  }
};
