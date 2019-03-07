import { Component, OnInit } from '@angular/core';
import { PJService } from 'src/app/shared/pj.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-pj',
  templateUrl: './pj.component.html',
  styleUrls: ['./pj.component.css']
})
export class PJComponent implements OnInit {

  constructor(private service: PJService,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();
    this.service.formData = {
      PJID: null,
      NomeFantasia: '',
      CNPJ: '',
      Endereco: '',
      IE: '',
      RazaoSocial: '',
      Responsavel: '',
      Telefone: ''
    }
  }


  onSubmit(form: NgForm) {
    if (form.value.EmployeeID == null)
      this.insertRecord(form);
    else
      this.updateRecord(form);
  }

  insertRecord(form: NgForm) {
    this.service.postPJ(form.value).subscribe(res => {
      this.toastr.success('Inserted successfully', 'PJ. Register');
      this.resetForm(form);
      this.service.refreshList();
    });
  }

  updateRecord(form: NgForm) {
    this.service.putPJ(form.value).subscribe(res => {
      this.toastr.info('Updated successfully', 'PJ. Register');
      this.resetForm(form);
      this.service.refreshList();
    });

  }

}
