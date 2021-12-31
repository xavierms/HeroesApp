import { NgModule } from '@angular/core';

import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule }  from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule }  from '@angular/material/grid-list';
import { MatFormFieldModule }  from '@angular/material/form-field';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from "@angular/material/input";
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  exports: [
    MatAutocompleteModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatFormFieldModule,
    MatListModule, 
    MatInputModule,
    MatIconModule,
    MatSidenavModule, 
    MatProgressSpinnerModule,
    MatToolbarModule
  ],
})
export class MaterialModule {}
