import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css']
})
export class SocialComponent implements OnInit {

	pages = [];

  constructor() {
	this.pages = [
		{
			"icon": "assets/facebook.png",
			"url": "https://www.facebook.com/danielmoscarella/",
			"alt": "Facebook"
		},
		{
			"icon": "assets/instagram.png",
			"url": "https://www.instagram.com/danielmoscarella/",
			"alt": "Instagram"
		},
		{
			"icon": "assets/linkedin.png",
			"url": "https://co.linkedin.com/in/daniel-moscarella-40780834",
			"alt": "LinkedIn"
		},
		{
			"icon": "assets/youtube.png",
			"url": "https://www.youtube.com/channel/UCkvBvlo_vTtchazaiisvSKA",
			"alt": "YouTube"
		},
		{
			"icon": "assets/astrophotos.png",
			"url": "https://www.facebook.com/astrophotos.dm",
			"alt": "AstroPhotos"
		}
	];

  }

  ngOnInit(): void {
  }

}
