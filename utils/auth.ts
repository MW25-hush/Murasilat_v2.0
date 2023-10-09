'use client';
import decode from 'jwt-decode';

const TOKEN_KEY = 'TOKENS';

export type TOKENS_TYPE = { access: string; refresh: string };

export type SESSION_TYPE = {
  user_id: number;
};

type TOKEN_PAYLOAD = {
  token_type: string;
  exp: number;
  iat: number;
  jti: string;
  user_id: number;
};

function getTokens(): TOKENS_TYPE | null {
  if (typeof window !== 'undefined') {
    const tokens_unparsed = window.localStorage.getItem(TOKEN_KEY);
    return tokens_unparsed ? JSON.parse(tokens_unparsed) : null;
  }
  return null;
}

function getUser(): SESSION_TYPE | null {
  const tokens = getTokens();
  if (tokens && tokens.access) {
    const decoded = decode<TOKEN_PAYLOAD>(tokens?.access);
    return { user_id: decoded.user_id };
  }
  return null;
}

function setToken(tokens: TOKENS_TYPE): void {
  localStorage.setItem(TOKEN_KEY, JSON.stringify(tokens));
}

function clearSession(): void {
  localStorage.removeItem(TOKEN_KEY);
}

export { getTokens, getUser, setToken, clearSession };
