import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { Hardware } from './hardware-model';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HardwareService {
  private hardwaresUrl = 'http://localhost:8080/hardware';

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }

  constructor(
    private http: HttpClient
  ) { }

  getHardwares(): Observable<Hardware[]>{
    return this.http.get<Hardware[]>(this.hardwaresUrl)
    .pipe(
      tap(_ => console.log('fetched hardware')),
      catchError(this.handleError<Hardware[]>('getHardwares', []))
    );
  }

  getTypes(): Observable<String[]>{
    const url = `${this.hardwaresUrl}/types`;
    return this.http.get<String[]>(url)
    .pipe(
      tap(_ => console.log('fetched types')),
      catchError(this.handleError<String[]>('getHardwares', []))
    );
  }

  getHardwareByCode(code: String): Observable<Hardware> {
    const url = `${this.hardwaresUrl}/${code}`;
    return this.http.get<Hardware>(url)
    .pipe(
      tap(_ => console.log('fetched hardware')),
      catchError(this.handleError<Hardware>('getHardwaresByCode'))
    );
  }

  addHardware(hardware: Hardware): Observable<Hardware> {
    return this.http.post<Hardware>(this.hardwaresUrl, hardware, this.httpOptions).pipe(
    tap((newHardware: Hardware) => console.log(`added hardware w/ code=${newHardware.code}`)),
    catchError(this.handleError<Hardware>('addHardware'))
    );
  }

  upadateHardware(hardware: Hardware): Observable<any> {
    const url = `${this.hardwaresUrl}/${hardware.code}`;
    return this.http.put(url, hardware, this.httpOptions).pipe(
    tap(_ => console.log(`updated hardware code=${hardware.code}`)),
    catchError(this.handleError<any>('updateHardware'))
    );
  }

  deleteHardware(hardware: Hardware | string): Observable<Hardware> {
    const code = typeof hardware === 'string' ? hardware : hardware.code;
    const url = `${this.hardwaresUrl}/${code}`;
    return this.http.delete<Hardware>(url, this.httpOptions).pipe(
    tap(_ => console.log(`deleted hardware CODE=${code}`)),
    catchError(this.handleError<Hardware>('deleteHardware'))
    );
    }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(operation);
      console.error(error);
      return of(result as T);
    };
  }
}
