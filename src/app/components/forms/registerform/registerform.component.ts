import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth/auth.service';
import { FormControl, Validators } from '@angular/forms';
import { SnackbarService } from 'src/app/services/snackbar.service';
@Component({
  selector: 'app-registerform',
  templateUrl: './registerform.component.html',
  styleUrls: ['./registerform.component.scss']
})
export class RegisterformComponent implements OnInit {
  formulario: FormGroup = new FormGroup({})
  constructor(private formBuilder: FormBuilder, private authService: AuthService,private router: Router, private snackbarService: SnackbarService) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      userName:  ['' , Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(50)])],
      email: ['' , Validators.compose([Validators.required, Validators.email])],
      password:[  '' ,  Validators.compose([Validators.required, Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')])],

    })
  }

  register(): void {
    if(this.formulario.valid){
    this.authService.register(this.formulario.value.userName, this.formulario.value.email, this.formulario.value.password)
    .subscribe((response) => {

      this.snackbarService.openSnackBar(response.message);
      this.router.navigate(['/login']);

     })
   }
   else{
    this.snackbarService.openSnackBar("Los datos son incorrectos");
   }
  }
}
