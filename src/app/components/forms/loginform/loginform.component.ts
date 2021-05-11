import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth/auth.service';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.scss']
})
export class LoginformComponent implements OnInit, OnDestroy {
  formulario: FormGroup = new FormGroup({})
  authSubscription: Subscription = new Subscription()
  constructor(private formBuilder: FormBuilder, private authService: AuthService,private router: Router) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      email: new FormControl('',[
        Validators.required,
        Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
      password:''

    })
  }
  login() {
    this.authService.login(this.formulario.value.email, this.formulario.value.password)
      .subscribe((response) => {

        if (response.token) {
          localStorage.setItem('Token', response.token)
          this.authService.setLoggedIn(true)
          this.router.navigate(['/experts'])
        } else {
          this.authService.setLoggedIn(false)
          localStorage.removeItem('Token')

        }
        },
        err =>{

          this.authService.setLoggedIn(false)
          localStorage.removeItem('Token')

        }
    )
  }
  ngOnDestroy(): void {
    this.authSubscription.unsubscribe()
  }
 /**logout(){
    this.authService.setLoggedIn(false)
    localStorage.removeItem('Token')
  }
*/
}
