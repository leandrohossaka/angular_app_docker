import { Component, OnInit } from '@angular/core';
import { PJService } from 'src/app/shared/pj.service';
import { PJ } from 'src/app/shared/pj.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-pj-list',
  templateUrl: './pj-list.component.html',
  styleUrls: ['./pj-list.component.css']
})
export class PJListComponent implements OnInit {

  constructor(private service: PJService,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.service.refreshList();
  }

  populateForm(emp: PJ) {
    this.service.formData = Object.assign({}, emp);
  }

  onDelete(id: number) {
    if (confirm('Are you sure to delete this record?')) {
      this.service.deletePJ(id).subscribe(res => {
        this.service.refreshList();
        this.toastr.warning('Deleted successfully', 'EMP. Register');
      });
    }
  }

}
