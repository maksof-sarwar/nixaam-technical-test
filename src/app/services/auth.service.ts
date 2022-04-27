import { Injectable } from '@angular/core';
import { Base64 } from 'base64-string';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}
  createToken(data) {
    return new Base64().encode(JSON.stringify(data))
  }
  verifyToken(token) {
    return new Base64().decode(token);
  }
  isAuthenticated() {
    return !!localStorage.getItem('token');
  }
}
