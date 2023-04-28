import React, { useState, useEffect, Component, Fragment } from 'react';
import md5 from 'md5';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cookies from 'universal-cookie';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import '../css/Styles.css';
import Images from '../img/index.js'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
function Login(props) {
  // el localhost del API varia dependiendo del dispositivo en uso
  const baseUrl = "https://localhost:44322/api/usuarios";
  const cookies = new Cookies();

  const [showForgotPasswordPopup, setShowForgotPasswordPopup] = useState(false);

  const handleForgotPasswordClick = () => {
    setShowForgotPasswordPopup(true);
  };

  const handleForgotPasswordClose = () => {
    setShowForgotPasswordPopup(false);
  };

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

  function imposeMinMax(el){
    if(el.value != ""){
      if(parseInt(el.value) < parseInt(el.min)){
        el.value = el.min;
      }
      if(parseInt(el.value) > parseInt(el.max)){
        el.value = el.max;
      }
    }
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
                    width: 100%;
                    height: 100%;
                    z-index: -1;
                  } 

                    .popup-content {
                      background-color: #fff;
                      border-radius: 10px;
                      box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
                      padding: 20px;
                      max-width: 500px;
                      margin: 0 auto;
                      text-align: center;
                      width: 95%;
                    }
                    
                    .popup-header {
                      font-size: 24px;
                      font-weight: bold;
                      margin-bottom: 10px;
                    }
                    
                    .popup-input {
                      display: block;
                      width: 100%;
                      padding: 10px;
                      margin-bottom: 20px;
                      border-radius: 5px;
                      border: 1px solid #ccc;
                    }
                    
                    .popup-button {
                      display: block;
                      width: 100%;
                      padding: 10px;
                      background-color: #f60;
                      color: #fff;
                      border-radius: 5px;
                      border: none;
                      cursor: pointer;
                    }
                    
                    .popup-button:hover {
                      background-color: #e50;
                    }

                    @media (max-width: 768px) {
                      .popup-content {
                        width: 90%;
                      }
                    }
                    
                    /* styles for screens with a width of 576px or less */
                    @media (max-width: 576px) {
                      .popup-content {
                        width: 95%;
                      }
                    }
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
              </div>
              <div className="form-group">
                <input
                  type="text" 
                  maxLength="10"
                  className="form-control"
                  placeholder='Ingresa tu documento de identidad'
                  name="traba_nr_doc"
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  placeholder='Ingresa tu contraseña'
                  name="password"
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
              <a className="text-right" href="#clave-olvidada" onClick={handleForgotPasswordClick}>¿Olvidaste tu contraseña?</a>
                <Popup open={showForgotPasswordPopup} closeOnDocumentClick onClose={handleForgotPasswordClose}>
                  <div className="popup-content">
                    <div className="popup-header">¿Olvidaste tu contraseña?</div>
                    <div className="popup-message">Porfavor ingrese su DNI, para enviarle un correo en donde se rastaurará su contraseña:</div>
                    <form>                      
                      <input type="number" id="dni" name="dni" className="popup-input" />
                      <label htmlFor="Resultado_dni">Se envió su nueva contraseña al siguiente correo:</label>
                      <label htmlFor="Resultado_dni">##########@gmail.com</label>
                      <button type="submit" className="popup-button">Enviar</button>                      
                    </form>
                  </div>
                </Popup>
              </div>
              <div className="col-md-12 text-center ">
                <button className="naranjabtn btn btn-block mybtn btn-success tx-tfm" onClick={() => iniciarSesion()}>Iniciar sesión</button>
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
              <div className="col-md-12 mb-3">                
                <a href="" id="signup"><Link to={"/menu"}>  Menú!</Link></a>
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