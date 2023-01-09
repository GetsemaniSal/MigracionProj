import { NgModule, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppDataService} from '../../services/app-data/app-data.service';
import { IonicModule, NavController, NavParams, ToastController } from '@ionic/angular';
import { LoginPageRoutingModule } from './login-routing.module';
// import { LoginPage } from './login.page';
import { PrincipalPage } from '../principal/principal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule,
    AppDataService
  ],
  // declarations: [LoginPage]
})
export class LoginPageModule {
  public login: {user:string, password: string} = {user: "30DST0003Z", password: '6588327' };
  public connecting: boolean;
  viewCtrl: any;

  public constructor(
    public navCtrl: NavController,
    private renderer: Renderer2,
    public navParams: NavParams, public NavCtrl: NavController,
    public data: AppDataService,
    private toastCtrl: ToastController
  ) { 
    this.renderer.addClass(this.viewCtrl.pageRef().nativeElement, "login-modal-view");

  }
  public ionViewDidLoad() {

  }
  public dismiss () {
    this.viewCtrl.dismiss({Autenticado: false});
  }
  public mensaje(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'top',
      cssClass: 'error'
    });
    toast.present();
  }
  public toUpperCase (e) {
    this.data.Login(this.login).suscribe(
      (res: LoginResponseElement) =>{
        if (res.autenticado.valido) {
          this.viewCtrl.dismiss({Autenticado:true});
          this.navCtrl.push(PrincipalPage,{login:this.login,ct:res})
        } else {
          this.mensaje("El usuario/contraseña no es válido")
        }
        this.connecting=false;

      }
    )
  }
  public isSendDisabled() {
		return (!(this.login.user.length > 0 && this.login.password.length > 0)) || this.connecting;
	}

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
