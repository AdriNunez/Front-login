import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  isLogged: boolean = false

  titleNav:string=""
  boton:string=""
  showButton:boolean=true
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.titleNav ="Expertos"
    this.boton = "+ Nuevo experto"
/*    if(localStorage.getItem('Token')){
      this.isLogged=true;
    }
 */

  }
  changeTitle(title:string){
    this.showButton =true
    this.isLogged = true
    this.titleNav= title =="experts" ? "Expertos" : "Etiquetas"
    this.boton = this.titleNav == "Expertos" ? "+ Nuevo experto" : "+ Añadir etiqueta"
  }
  logout(){

    this.authService.setLoggedIn(false)
    localStorage.removeItem('Token')
    this.isLogged= false
    this.router.navigate(['/login'])

  }
}
