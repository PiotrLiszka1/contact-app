import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Data } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class ContactsService {
  constructor(private httpClient: HttpClient) {}

  private baseApiUrl = 'https://oixstrony.pl';

  // rxjs = asynchroniczna komunnikacja/ kod sie wykonuje, my mozemy pracowac dalej
  //observable = strumien pobierania danych

  // void = metoda nic nie zwraca tylko wyknuje operacje

  getContacts(): Observable<any> {
    // osbervablle cos zraca
    // get -pobieramy wszystkie kontakty
    return this.httpClient.get(`${this.baseApiUrl}/contact`);
  }

  getOneContact(id: number): Observable<any> {
    return this.httpClient.get(`${this.baseApiUrl}/contact/${id}`);
  }

  addContact(data: {}): Observable<any> {
    return this.httpClient.post(`${this.baseApiUrl}/contact`, data);
  }
}
// rejestracja servisu w module glownym aplikacji
// w tablicy providers
