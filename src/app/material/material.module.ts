import { NgModule } from '@angular/core';

import { MatButtonModule }  from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule }  from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  exports: [
    MatButtonModule,
    MatCardModule,
    MatListModule, 
    MatIconModule,
    MatSidenavModule, 
    MatToolbarModule,
    MatGridListModule,
    MatProgressSpinnerModule
  ],
})
export class MaterialModule {}
