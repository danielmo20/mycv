import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.css']
})
export class AchievementsComponent implements OnInit {

	achievements = [];

  constructor() { 
  
	this.achievements = [
		{
			"text": "Application Manager BBVA móvil",
			"when": "2020 - present",
			"where": "BBVA"
		},
		{
			"text": "Lider de equipo con diversos proyectos instalados en producción",
			"when": "2016 - 2019",
			"where": "BBVA"
		},
		{
			"text": "Mantenimiento evolutivo sobre la plataforma bancaria Axon para Neurona",
			"when": "2015-2016",
			"where": "KOGHI"
		},
		{
			"text": "Desarrollador del Portal institucional AMR",
			"when": "2016",
			"where": "KOGHI"
		},
		{
			"text": "Desarrollador plataforma de académica para Weisheit basado en MEAN.",
			"when": "2015",
			"where": "KOGHI"
		},
		{
			"text": "Arquitecto y desarrollador del portal transaccional de Coopcentral \"Multiportal\"",
			"when": "2014",
			"where": "KOGHI"
		},
		{
			"text": "Arquitecto y desarrollador del sistema de Normalización de Auditoría del SIIDJ (NAS) para Deceval SA.",
			"when": "2013",
			"where": "KOGHI"
		},
		{
			"text": "Arquitecto y desarrollador portal web de ventas y portal de administración de MovilRed",
			"when": "2009-2012",
			"where": "KOGHI"
		},
		{
			"text": "Desarrollador Plataforma transaccional de Solidda Group y Technologistics.",
			"when": "2013",
			"where": "KOGHI"
		},
		{
			"text": "Implentación sistema de integración continua con Jenkins, Koghi SAS",
			"when": "2013",
			"where": "KOGHI"
		},
	];
  }  
  
  ngOnInit(): void {
  }

}
