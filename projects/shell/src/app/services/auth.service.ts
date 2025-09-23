import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private tokenUrl = 'http://10.36.126.106:30099/realms/dev/protocol/openid-connect/token';
  private clientId = 'notification-admin';
  private clientSecret = 'CbZcdvcNM1iuy19v8yZbYiDogoGGLXIC';

  private accessToken: string | null = null;

  constructor(private http: HttpClient) {}

  async login(username: string, password: string): Promise<boolean> {
    try {
      const body = new HttpParams()
        .set('grant_type', 'password')
        .set('client_id', this.clientId)
        .set('client_secret', this.clientSecret)
        .set('scope', 'openid')
        .set('username', username)
        .set('password', password);

      const headers = new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      });

      const res: any = await firstValueFrom(
        this.http.post(this.tokenUrl, body, { headers })
      );

      this.accessToken = res.access_token;
      localStorage.setItem('access_token', this.accessToken as string);

      return true;
    } catch (err) {
      console.error('Login failed', err);
      return false;
    }
  }

  getToken(): string | null {
    return this.accessToken || localStorage.getItem('access_token');
  }

  logout() {
    this.accessToken = null;
    localStorage.removeItem('access_token');
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }
}
