
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent} from './components/navbar/navbar.component';
import { ContentComponent} from './components/content/content.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [NavBarComponent, ContentComponent, HeaderComponent],
  imports: [ CommonModule, RouterModule ],
  exports: [NavBarComponent, ContentComponent, HeaderComponent]
})
export class LayoutModule {}
