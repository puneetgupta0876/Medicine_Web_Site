import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  login(user: { mobile: number, password: string }) {
    console.log(typeof user.mobile);
    if (user.mobile === 7777777777 && user.password === 'test@api') {
      localStorage.setItem("authToken", 'wFIMP75eG1sQEh8vVAdXykgzF4mLhDw3') // Hard coded save authToken
      this.router.navigate(['/landingPage']);
    } else {
      alert('Invalid credentials');
    }
  }

  logout() {
    localStorage.clear(),
      this.router.navigateByUrl('/auth/login');
  }
}
