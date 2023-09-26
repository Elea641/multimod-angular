import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';
import { minDateValidator } from '../validators/minDateValidator';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent {

    // Declare all controls with validation rules
    orderForm = this.fb.group({
      title: ['', Validators.required],
      quantity: ['', [Validators.required, Validators.max(5)]],
      date: ['', Validators.required],
      contact: ['', [Validators.required, Validators.email]],
      payments: this.fb.array([]) // FormArray control
    });
  
    constructor(private fb: FormBuilder) { }

    ngOnInit() {
      // get Observable from FormGroup
      this.orderForm.valueChanges
        // listen to value change
        .subscribe(value => {
          console.log('orderForm value changes : ', value);
        });
    }

    get payments(): FormArray {
      // convert abstract control to FormArray
      return this.orderForm.get('payments') as FormArray;
    }
  
    onSubmit() {
      // Get form value as JSON object
      console.log('oderForm submitted : ', this.orderForm.value);
    }

    addPayments() {
      // create FormGroup with two FormControl
      const paymentForm = this.fb.group({
        // add min date validator
        date: ['', [Validators.required, minDateValidator(new Date())]],
        amount: ['', Validators.required]
      });
      // convert abstract control to FormArray
      const payments = this.orderForm.get('payments') as FormArray;
      // add new FormGroup to control payments
      payments.push(paymentForm);
    }

// constructor(private formBuilder: FormBuilder){}

// // Root FormGroup
// signInForm = this.formBuilder.group({
//   user: ['', Validators.required],
//   email: ['', Validators.required, Validators.email],
//   // Nested FormGroup
//   address: this.formBuilder.group({
//     street: [''],
//     city: [''],
//     zipCode: [''],
//     // Nested FormArray
//     details:this.formBuilder.array([])
//   }),
// });

// // Append address details
// addAddressDetails() {
//   // Get 'address' FormGroup then 'details' FormArray
//   const address = this.signInForm.get('address');
//   if (address) {
//     const details = address.get('details') as FormArray; 
//     if (details) {
//       // Add new FormControl to 'details' FormArray
//       details.push(new FormControl(''));
//     } else {
//       console.error("La FormArray 'details' n'a pas été trouvée.");
//     }
//   } else {
//     console.error("Le FormGroup 'address' n'a pas été trouvé.");
//   }
// }

// onSubmit() {
//   // Get form value as JSON object
//   const user: UserForm = this.signInForm.value as UserForm;
//   console.log(user)
// }

// randomUsername() {
//   // Update FormGroup
//   this.signInForm.patchValue({
//     user: Math.random().toString(36) // Can set specific or all properties
//   })
// }

// update(user: UserForm) {
//     // Update FormGroup
//     this.signInForm.setValue({ // all properties need to be set
//       user: user.user as string,
//       email: user.email as string,
//       address: {
//         street : user.address?.street as string,
//         city : user.address?.city as string,
//         zipCode : user.address?.zipCode as string,
//         details: []
//       }
//     })
// }

}
