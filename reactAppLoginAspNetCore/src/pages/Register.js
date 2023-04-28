import React, { useState, useEffect, Fragment } from 'react';
import md5 from 'md5';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cookies from 'universal-cookie';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Images from '../img/index.js'

function Register(props) {
    // el localhost del API varia dependiendo del dispositivo en uso
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
                            width: 100%;
                            height: 100%;
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
                                </div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder='Ingresa tus nombres'
                                        name="#"
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder='Ingresa tus apellidos'
                                        name="#"
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label className='elpais' for="pais">Elija un Pais:  </label>
                                        <select className='paises' id="pais" name="pais">
                                            <option value="salvador">El Salvador</option>
                                            <option value="colombia">Colombia</option>
                                            <option value="ecuador">Ecuador</option>
                                            <option value="peru">Perú</option>
                                            <option value="chile">Chile</option>
                                            <option value="argentina">Argentina</option>
                                            <option value="portugal">Portugal</option>
                                            <option value="polonia">Poland</option>
                                        </select>
                                </div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder='Ingresa tu correo corporativo o personal.'
                                        name="#"
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="text"
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
                                <div className="form-group"> {/* Confirmar la contraseña */}
                                    <input
                                        type="password"
                                        className="form-control"
                                        placeholder='Confirma tu contraseña'
                                        name="password"
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="col-md-12 text-center ">
                                    <button className="naranjabtn btn btn-block mybtn btn-success tx-tfm" onClick={() => iniciarSesion()}>Registrarse</button>
                                </div>
                                <div className="col-md-12 ">
                                    <div className="login-or">
                                        <hr className="hr-or"></hr>
                                        <span className="span-or">O</span>
                                    </div>
                                </div>
                                <div className="col-md-12 mb-3">
                                    <p class="text-center">¿Ya tienes una cuenta? <a href="" id="login"><Link to={"/"}>Inicia sesión aqui</Link></a></p>
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

export default Register;