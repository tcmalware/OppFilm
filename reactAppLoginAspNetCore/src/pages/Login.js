import React, { useState, useEffect, Component, Fragment } from 'react';
import md5 from 'md5';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cookies from 'universal-cookie';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import '../css/Login.css';
import Images from '../img/index.js'

function Login(props) {
  const baseUrl = "https://localhost:44322/api/usuarios";
  const cookies = new Cookies();

  const [form, setForm] = useState({
    traba_nr_doc: '',
    password: ''
  });
  const handleChange = e => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    });
  }

  const iniciarSesion = async () => {
    await axios.get(baseUrl + `/${form.traba_nr_doc}/${md5(form.password)}`)
      .then(response => {
        return response.data;
      }).then(response => {
        if (response.length > 0) {
          var respuesta = response[0];
          cookies.set('id', respuesta.id, { path: '/' });
          cookies.set('traba_nr_doc', respuesta.traba_nr_doc, { path: '/' });
          cookies.set('password', respuesta.password, { path: '/' });
          //alert("Bienvenido: "+respuesta.nombre+" "+respuesta.apellido_paterno);
          props.history.push('/menu');
        } else {
          alert('El usuario o la contraseña no son correctos');
        }
      })

      .catch(error => {
        console.log(error);
      })
  }

  useEffect(() => {
    if (cookies.get('id')) {
      props.history.push('/menu');
    }
  }, []);

  return (
    <div className="grid-container">
      <Fragment>
        <Helmet>
          <style>{`
                  body {
                    background-image: url(${Images.planta});
                    background-repeat: no-repeat;
                    background-position: top;
                    background-attachment: fixed;
                    padding-top: 4.2rem;
                    padding-bottom: 4.2rem;  
                    background-size: cover;
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%; /* change this value to adjust the width of the overlay */
                    height: 100%;
                    box-shadow: inset 0 0 0 1000px rgba(238,124,58,.6);
                    z-index: -1; 
                  }
                                      
                  `}
          </style>
        </Helmet>
      </Fragment>
      <div class="rectangle">
      <div className="grid-item form-container">
        <div className="form-wrapper">
          <div className="myform form ">
            <div className="logo mb-3">
              
            </div>
            <form>
              <div className="form-group">
              <img className='acad' src={require('../img/logo.png')} alt="logo" />
                <input
                  type="text"
                  className="form-control"
                  placeholder='Ingrese su Documento de identidad'
                  name="traba_nr_doc"
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  placeholder='Ingrese su contraseña'
                  name="password"
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
              <p className="text-left">¿Olvidaste tu contraseña?</p>
              </div>
              <div className="col-md-12 text-center ">
                <button className="btn btn-block mybtn btn-success tx-tfm" onClick={() => iniciarSesion()}>Iniciar sesión</button>
              </div>
              <div className="col-md-12 ">
                <div className="login-or">
                  <hr className="hr-or"></hr>
                  <span className="span-or">O</span>
                </div>
              </div>
              <div className="col-md-12 mb-3">
                
                <p className="text-center">¿No tienes una cuenta?<a href="" id="signup"><Link to={"/register"}>  Registrate aqui!</Link></a></p>
              </div>
            </form>            
          </div>          
        </div>
        <div className="image-wrapper">
          <img className='logo' src={require('../img/logo_multic.png')} alt="logo" />
        </div>
        </div>
          
      </div>      
    </div>
  );
}

export default Login;