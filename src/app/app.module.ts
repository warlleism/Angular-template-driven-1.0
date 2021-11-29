import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CampoControlErroComponent } from './campo-control-erro/campo-control-erro.component';
import { TemplateFormComponent } from './template-form/template-form.component';
@NgModule({
  declarations: [
    AppComponent,
    TemplateFormComponent,
    CampoControlErroComponent,
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
