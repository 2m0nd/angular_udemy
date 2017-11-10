import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  myGroup: FormGroup;
  statuses = ['Stable', 'Critical', 'Finished'];

  ngOnInit() {
    this.myGroup = new FormGroup({
      name: new FormControl(null, [Validators.required, this.testNameNotAllowed.bind(this)], this.test2NameNotAllowed),
      mail: new FormControl(null, [Validators.required, Validators.email]),
      status: new FormControl(null)
    });

    this.myGroup.statusChanges.subscribe(x => {
      console.log('Status: ' + x);
    });
  }

  onSubmit() {
    console.log(this.myGroup.value);
    this.myGroup.reset();
  }

  testNameNotAllowed(control: FormControl): {[s: string]: boolean} {
    if(control.value === 'Test') {
      return {'testNameNotAllowed': true};
    }else
    {
        return null;
    }
  }

  test2NameNotAllowed(control: FormControl): Promise<any> | Observable<any> {
      const prom = new Promise<any>((resolve, reject) => {
        setTimeout(() => {
          if(control.value === 'Test2') {
            resolve({'test2NameNotAllowed': true});
          }else
          {
            resolve(null);
          }
        }, 5000);
      });
      return prom;
  }
}
