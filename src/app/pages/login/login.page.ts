import { Component, Renderer2 } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { AppDataService } from '../../services/app-data/app-data.service';
import { ToastController } from 'ionic-angular';
import { PrincipalPage } from '../principal/principal.page';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
	selector: 'page-login',
	templateUrl: 'login.html',
})
export class LoginPage {
	public login: { user: string, password: string } = { user: '30DST0003', password: '6588327' };
	public connecting: boolean;

	public constructor(
		public navCtrl: NavController,
		private renderer: Renderer2,
		public navParams: NavParams, 
		public viewCtrl: ViewController,
		public data: AppDataProvider,
		private toastCtrl: ToastController
	) {
		this.renderer.addClass(this.viewCtrl.pageRef().nativeElement, "login-modal-view");

	}

	public ionViewDidLoad() {
	}

	public dismiss() {
		this.viewCtrl.dismiss({ Autenticado: false });
	}

	public mensaje(msg) {
		let toast = this.toastCtrl.create({
			message: msg,
			duration: 3000,
			position: 'top',
			cssClass:'error'
		});
		toast.present();
	}
	public toUpperCase(e) {
		e.value = e.value.toUpperCase();
	}

	public Credenciales() {
		//this.connecting = false;
		this.data.Login(this.login).subscribe(
			(res: LoginResponseElement) => {
				if (res.autenticado.valido) {
					//this.data.AsignarPlantel(res);
					this.viewCtrl.dismiss({Autenticado:true});
					this.navCtrl.push(PrincipalPage,{login:this.login,ct:res});
				} else {
					this.mensaje("El usuario/contraseña no es válido")
				}
				this.connecting=false;
			});
		//CentroTrabajo : DatosCentroTrabajoResponse
		//this.navCtrl.push(PrincipalPage,{Centro : CentroTrabajo});

/*		this.data.Login(this.login)
			.subscribe((res: LoginResponse) => {
				if (res.autenticado.valido) {
					//this.data.AsignarPlantel(res);
					this.viewCtrl.dismiss({Autenticado:true});
				} else {
					this.mensaje("El usuario/contraseña no es válido")
				}
				this.connecting=false;
			});*/
	}
	public isSendDisabled() {
		return (!(this.login.user.length > 0 && this.login.password.length > 0)) || this.connecting;
	}
 //

	public onEnterValidate(event) {
		if (event.code === 'Enter') {
			if (this.login.user.length > 0 && this.login.password.length > 0) {
				this.Credenciales();
			} else {
				this.mensaje("Falta información para solicitár el acceso");
			}
		}
	}
}
