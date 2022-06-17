import { Placeholder } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnDestroy, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AlertPopupComponent } from 'src/app/shared/components/alert-popup/alert-popup.component';
import { PlaceholderDirective } from 'src/app/shared/directives/placeholder.directive';

@Component({
  selector: 'app-signing',
  templateUrl: './signing.component.html',
  styleUrls: ['./signing.component.css']
})
export class SigningComponent implements OnInit, OnDestroy {

  userName !: string;
  password !: string;
  errorMessage!: any;
   private subcription!: Subscription;
  //private subcription: Subscription[]=[];

  @ViewChild(PlaceholderDirective,{static: false}) alertHost!: PlaceholderDirective;

  constructor(
    private router: Router,
    public viewContainerRef2: ViewContainerRef
  ) { }

  ngOnInit(): void {

  }

  login(): void {

    if (this.userName == 'supun' && this.password == '1234') {
      this.router.navigate(['home']);
    } else {
      // This is not nessessory if you are using dynamic component generation
     this.errorMessage ='Username or Password is incorrect!';

     this.showAlert('Username or Password is incorrect!');
    }

  }

  onPopupClose(): void{
    this.errorMessage = null;
  }

  showAlert(message: string): void{
     const hostViewContainerRef = this.alertHost.viewContainerRef;
     const componentRef = this.viewContainerRef2.createComponent(AlertPopupComponent);
     componentRef.instance.message = message;

      this.subcription = componentRef.instance.close.subscribe(()=>{
      //this.subcription.push(
        //componentRef.instance.close.subscribe(()=>{
          this.viewContainerRef2.clear();
       })
      //);

  }

  ngOnDestroy(): void {
    this.subcription.unsubscribe();
    //this.subcription.forEach(sub => sub.unsubscribe());
  }
}
