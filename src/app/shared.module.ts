import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatCardModule,
  MatFormFieldModule,
  MatButtonModule,
  MatInputModule,
  MatIconModule,
  MatChipsModule,
  MatGridListModule, MatMenuModule, MatCheckboxModule, MatToolbarModule, MatRippleModule, MatDividerModule, MatRadioModule
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatChipsModule,
    MatGridListModule,
    MatToolbarModule,
    MatRippleModule,
    MatMenuModule,
    MatDividerModule,
    MatMenuModule,
    MatRadioModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatChipsModule,
    MatToolbarModule,
    MatGridListModule,
    MatDividerModule,
    MatMenuModule,
    MatRippleModule,
    MatCheckboxModule,
    MatRadioModule
  ],
})
export class SharedModule {
}
