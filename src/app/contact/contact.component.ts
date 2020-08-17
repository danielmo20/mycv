import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ContactService } from './contact.component.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
	
	contactForm: FormGroup;
	emailRegx = /^(([^<>+()\[\]\\.,;:\s@"-#$%&=]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/;

  //private contactService: ContactService
	constructor(private formBuilder: FormBuilder,private contactService: ContactService) { }

	ngOnInit(): void {
		this.contactForm = this.formBuilder.group({
			email: [null, [Validators.required, Validators.pattern(this.emailRegx)]],
			name: [null, Validators.required],
			text: [null]
		});

	}

	submit() {
		if (!this.contactForm.valid) {
			return;
		}
		
		console.log(this.contactForm.value);
		this.contactService.addComment(this.contactForm.value);
		this.contactForm.reset();
	}
  
}
