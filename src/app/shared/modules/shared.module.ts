import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from './material.module';
import { NavBarComponent } from 'src/app/shared/components/nav-bar/nav-bar.component';
import { FooterComponent } from 'src/app/shared/components/footer/footer.component';
import { HeadingComponent } from 'src/app/shared/components/heading/heading.component';
import { LoadingComponent } from 'src/app/shared/components/loading/loading.component';
import { EmptyComponent } from 'src/app/shared/components/empty/empty.component';
import { TextModalComponent } from 'src/app/shared/components/text-modal/text-modal.component';

@NgModule({
  declarations: [
    NavBarComponent,
    FooterComponent,
    HeadingComponent,
    LoadingComponent,
    EmptyComponent,
    TextModalComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    NavBarComponent,
    FooterComponent,
    HeadingComponent,
    LoadingComponent,
    EmptyComponent,
    TextModalComponent,
  ]
})
export class SharedModule {}
