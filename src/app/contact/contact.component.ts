import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
	
	contactForm: FormGroup;
	emailRegx = /^(([^<>+()\[\]\\.,;:\s@"-#$%&=]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/;

  
	constructor(private formBuilder: FormBuilder) { }

	ngOnInit(): void {
		this.contactForm = this.formBuilder.group({
			email: [null, [Validators.required, Validators.pattern(this.emailRegx)]],
			name: [null, Validators.required],
			comments: [null]
		});

	}

	submit() {
		if (!this.contactForm.valid) {
			return;
		}
		console.log(this.contactForm.value);
	}
  
}
