import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

type Payload = {
  sub: string;
}

export function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
  const authToken = request.headers.authorization;

  if (!authToken) {
    return response.status(401).end();
  }

  const [,token] = authToken.split(' ')

  try { 
    const { sub } = verify(token,'7c6df2e38194ec7c64ac56152d961939') as Payload;

    request.user_id = sub;
    return next();
  } catch (err) {
    return response.status(401).end();
  }


  return next();
}