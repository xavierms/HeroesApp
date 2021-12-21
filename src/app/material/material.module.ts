import { NgModule } from '@angular/core';

import { MatButtonModule }  from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  exports: [
    MatButtonModule,
    MatListModule, 
    MatIconModule,
    MatSidenavModule, 
    MatToolbarModule
  ],
})
export class MaterialModule {}
