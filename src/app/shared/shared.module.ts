import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './components/alert/alert.component';
import { HeaderComponent } from './theme/header/header.component';
import { FooterComponent } from './theme/footer/footer.component';
import { AlertPopupComponent } from './components/alert-popup/alert-popup.component';
import { PlaceholderDirective } from './directives/placeholder.directive';



@NgModule({
  declarations: [
    AlertComponent,
    HeaderComponent,
    FooterComponent,
    AlertPopupComponent,
    PlaceholderDirective

  ],
  imports: [
    CommonModule
  ],
  exports:[
    AlertComponent,
    HeaderComponent,
    FooterComponent,
    AlertPopupComponent,
    PlaceholderDirective
  ]
})
export class SharedModule { }
