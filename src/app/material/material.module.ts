import { NgModule } from '@angular/core';

import { MatButtonModule }  from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  exports: [
    MatButtonModule,
    MatCardModule,
    MatListModule, 
    MatIconModule,
    MatSidenavModule, 
    MatToolbarModule
  ],
})
export class MaterialModule {}
