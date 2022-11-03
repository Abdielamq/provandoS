import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/service/admin.service';
declare var iziToast:any;

@Component({
  selector: 'app-registro-cliente',
  templateUrl: './registro-cliente.component.html',
  styleUrls: ['./registro-cliente.component.css']
})
export class RegistroClienteComponent implements OnInit {

  public user : any = {};
  public usuario : any = {};
  public token = localStorage.getItem('token');

  public new_user : any = {};
  public op = 1;
  public carrito_logout :Array<any> = [];

  constructor(
    private _adminService:AdminService,
    private _router:Router
  ) { }

  ngOnInit(): void {
   
  }

  registro(registroForm:any){
    if(registroForm.valid){
     
        console.log(this.new_user);
        
        this._adminService.crear_cliente(this.new_user).subscribe(
          response=>{
            console.log(response);
            
            if(response.data != undefined){
              iziToast.show({
                  title: 'SUCCESS',
                  titleColor: '#1DC74C',
                  color: '#FFF',
                  class: 'text-success',
                  position: 'topRight',
                  message: 'Se registro correctamente.'
              });
              this.user.email = this.new_user.email;
              this.user.password = this.new_user.password;
              this._router.navigate(['/ventas/create']);
              
            }else{
              iziToast.show({
                title: 'ERROR',
                titleColor: '#FF0000',
                color: '#FFF',
                class: 'text-danger',
                position: 'topRight',
                message: response.message
            });
            }
          }
        );
            
    }else{
      iziToast.show({
          title: 'ERROR',
          titleColor: '#FF0000',
          color: '#FFF',
          class: 'text-danger',
          position: 'topRight',
          message: 'Los datos del formulario no son validos'
      });
    }
  }

}
