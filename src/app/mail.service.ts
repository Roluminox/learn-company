import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MailService {
  private apiUrl = 'http://localhost:5000/send-mail';

  constructor(private http: HttpClient) {}

  sendMail(emailData: { email: string; subject: string; message: string }): Observable<any> {
    return this.http.post<any>(this.apiUrl, emailData);
  }
}
