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
        cookies.set('apellido_paterno', respuesta.apellido_paterno, {path: '/'});
        cookies.set('apellido_materno', respuesta.apellido_materno, {path: '/'});
        cookies.set('nombre', respuesta.nombre, {path: '/'});
        cookies.set('correo', respuesta.correo, {path: '/'});
        cookies.set('traba_nr_doc', respuesta.traba_nr_doc, {path: '/'});
        cookies.set('password', respuesta.password, {path: '/'});
        alert("Bienvenido: "+respuesta.nombre+" "+respuesta.apellido_paterno);
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
            <label>Documento de identidad </label>
            <br />
            <input
              type="text"
              className="form-control"
              name="traba_nr_doc"
              onChange={handleChange}
            />
            <br />
            <label>Contraseña </label>
            <br />
            <input
              type="password"
              className="form-control"
              name="password"
              onChange={handleChange}
            />
            <br />
            <button className="btn btn-primary" onClick={()=>iniciarSesion()}>Iniciar Sesión</button>
          </div>
        </div>
      </div>
    );
}

export default Login;