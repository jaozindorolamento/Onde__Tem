import crypto from 'node:crypto';
export function hashPassword(p){const s=crypto.randomBytes(16).toString('hex');return `${s}:${crypto.scryptSync(p,s,64).toString('hex')}`;}
export function verifyPassword(p,v){try{const [s,h]=String(v).split(':');const a=Buffer.from(h,'hex'),b=crypto.scryptSync(p,s,64);return a.length===b.length&&crypto.timingSafeEqual(a,b)}catch{return false}}
export const tokenHash=t=>crypto.createHash('sha256').update(t).digest('hex');
export const newToken=()=>crypto.randomBytes(32).toString('hex');
