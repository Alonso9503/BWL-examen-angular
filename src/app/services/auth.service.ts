import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioModel } from '../models/usuario.model';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty';
  private apikey = 'AIzaSyCENcWI1tjkRG3XDGvJgAZXRSwmyL4ZYiA';

  userToken: string;

  // Crear nuevo usuario
  //https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=[API_KEY]

  //Login
  //https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=[API_KEY]


  constructor(private http: HttpClient ) {
    this.readToken();
  }

  logout() {
    localStorage.removeItem('token');
  }

  login(usuario: UsuarioModel) {
    const authData = {
      ...usuario,
      returnSecureToken: true
    };

    return  this.http.post(
      `${ this.url }/verifyPassword?key=${ this.apikey}`,
      authData
      ).pipe(
        map(resp => {
          this.saveToken( resp['idToken'] );
          return resp;
        })
     );
  }

  newUser( usuario: UsuarioModel) {
    const authData = {
      ...usuario,
      returnSecureToken: true
    };

    return  this.http.post(
    `${ this.url }/signupNewUser?key=${ this.apikey}`,
    authData
    ).pipe(
       map(resp => {
         this.saveToken( resp['idToken'] );
         return resp;
       })
    );

  }

  private saveToken(idToken: string ) {
    this.userToken = idToken;
    localStorage.setItem('token', idToken);
    
    let day = new Date();
    day.setSeconds( 3600 );

    localStorage.setItem('expira', day.getTime().toString());

  }

  readToken() {
    if (localStorage.getItem('token')) {

      this.userToken = localStorage.getItem('token');
    } else {
      this.userToken = '';
    }

    return this.userToken;
  }

  Autenti(): boolean {
    if ( this.userToken.length < 2 ) {
      return false;
    }

    const expira = Number(localStorage.getItem('expira'));
    const expiraDate = new Date();
    expiraDate.setTime(expira);
    
    if ( expiraDate > new Date() ) {
      return true;
    } else {
      return false;
    }
  }
}
