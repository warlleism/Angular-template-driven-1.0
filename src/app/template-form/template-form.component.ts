import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css'],
})
export class TemplateFormComponent implements OnInit {
  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  onSubmit(form: any) {
    console.log(form);
  }

  verificaValidTouched(campo: any) {
    return campo.invalid && campo.touched;
  }

  aplicaCssErro(campo: any) {
    return {
      'has-error': this.verificaValidTouched(campo),
      'has-feedback': this.verificaValidTouched(campo),
    };
  }

  consultaCEP(cep: any, form: any) {
    cep = cep.replace(/\D/g, '');

    if (cep != '') {
      var validacep = /^[0-9]{8}$/;

      if (validacep.test(cep)) {
        this.http
          .get(`https://viacep.com.br/ws/${cep}/json`)
          .subscribe((data) => {
            this.populaDadosForm(data, form);
          });
      }
    }
  }

  populaDadosForm(dados: any, form: any) {
    form.form.patchValue({
      endereco: {
        rua: dados.logradouro,
        cep: dados.cep,
        complemento: dados.complemento,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf,
      },
    });
  }

  resetaDadosForm(form: any) {
    form.form.patchValue({
      nome: null,
      email: null,
      endereco: {
        rua: null,
        cep: null,
        numero: null,
        complemento: null,
        bairro: null,
        cidade: null,
        estado: null,
      },
    });
  }
}
