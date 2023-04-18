import React, {useState, useEffect} from 'react';
import md5 from 'md5';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cookies from 'universal-cookie';
import axios from 'axios';
import '../css/Login.css';

function Login(props) {

const baseUrl="https://localhost:44322/api/usuarios";
const cookies = new Cookies();

const [form, setForm]=useState({
  traba_nr_doc:'',
  password: ''
});
  const handleChange=e=>{
 const {name, value} = e.target;
 setForm({
   ...form,
   [name]: value
 });
  }

  const iniciarSesion=async()=>{
    await axios.get(baseUrl+`/${form.traba_nr_doc}/${md5(form.password)}`)
    .then(response=>{
      return response.data;
    }).then(response=>{
      if(response.length>0){
        var respuesta=response[0];
        cookies.set('id', respuesta.id, {path: '/'});
        cookies.set('traba_nr_doc', respuesta.traba_nr_doc, {path: '/'});
        cookies.set('password', respuesta.password, {path: '/'});
        //alert("Bienvenido: "+respuesta.nombre+" "+respuesta.apellido_paterno);
        props.history.push('/menu');
      }else{
        alert('El usuario o la contraseña no son correctos');
      }
    })
    
    .catch(error=>{
      console.log(error);
    })
  }

  useEffect(()=>{
if(cookies.get('id')){
  props.history.push('/menu');
}
  },[]);

    return (
      <div className="containerPrincipal">
        <div className="containerLogin">
          <div className="form-group">
            <div class="logo mb-3">
                <div class="col-md-12 text-center">
                    <h1>Oben Academy</h1>
                </div>
            </div>
            <br />
            <label><i class="fa-solid fa-id-card fa-lg"></i>Documento de identidad </label>

              <input
                type="text"
                className="form-control"
                name="traba_nr_doc"
                onChange={handleChange}
              />
            <br />

            <label><i class="fa-solid fa-key fa-lg"></i>Contraseña </label>

              <input
                type="password"
                className="form-control"
                name="password"
                onChange={handleChange}
              />

            <p class="text-center" >¿No tienes una cuenta? <a href="" id="signup">Registrate Aqui!</a></p>

            <button className="btn btn-primary" onClick={()=>iniciarSesion()}>Iniciar Sesión</button>
            
            <div class="col-md-12 ">
                <div class="login-or">
                    <hr class="hr-or"></hr>
                    <span class="span-or">O</span>
                </div>
            </div>
            <div class="col-md-12 mb-3">
                <p class="text-center">
                    <a href="javascript:void();" class="google btn btn-light mybtn">
                        <i class="fa fa-google-plus">
                        </i> Inicia Sesion con Google
                    </a>
                </p>
            </div>
          </div>
        </div>
      </div>

    );
}

export default Login;