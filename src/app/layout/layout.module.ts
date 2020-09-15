import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent} from './components/navbar/navbar.component';
import { ContentComponent} from './components/content/content.component';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [NavBarComponent, ContentComponent],
  imports: [ CommonModule, RouterModule ],
  exports: [NavBarComponent, ContentComponent]
})
export class LayoutModule {}
