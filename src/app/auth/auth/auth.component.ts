import { Component, ComponentFactoryResolver, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { AuthResponseData, AuthService } from 'src/app/services/auth.service';
import { AlertComponet } from 'src/app/shared/alert/alert.component';
import { PlaceholderDirective } from 'src/app/shared/placeholder/placeholder.directive';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit,OnDestroy {
  isLoginMode = true;
  isLoading = false;
  error: string = null;
  @ViewChild(PlaceholderDirective,{static:false}) alertHost: PlaceholderDirective;

  private closesub: Subscription;

  constructor(private authService: AuthService,
              private router: Router,
              private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit(): void {
  }

  onSwitchMode(){
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(form: NgForm){
    if(!form.valid){
      return;
    }
    const email = form.value.email;
    const password = form.value.password;

    let authObs: Observable<AuthResponseData>

    this.isLoading = true;
    if(this.isLoginMode){
      authObs = this.authService.login(email,password)
    }else{
      authObs = this.authService.signUp(email, password);
    }

    authObs.subscribe(
      resData => {
        console.log(resData);
        this.isLoading = false;
        this.router.navigate(['./recipes']);
      },
      errorMessage =>{
        console.log(errorMessage);
        this.error = errorMessage;
        this.showErrorAlert(errorMessage);
        this.isLoading = false;
      }
    );
    

    form.reset();
  }

  onHandleError(){
    this.error = null;
  }

  ngOnDestroy(): void {
    if(this.closesub){
      this.closesub.unsubscribe();
    }
  }

  private showErrorAlert(message: string){
    // const alertCmp = new AlertComponet(); -- it doesn't work 
    const alertCmpFactory = this.componentFactoryResolver.resolveComponentFactory(AlertComponet);
    const hostViewContainerRef = this.alertHost.viewContainerRef;
    hostViewContainerRef.clear();

    const componentRef = hostViewContainerRef.createComponent(alertCmpFactory);

    componentRef.instance.message = message;
    this.closesub = componentRef.instance.close.subscribe(() =>{
      this.closesub.unsubscribe();
      hostViewContainerRef.clear();
    });
  }
}
