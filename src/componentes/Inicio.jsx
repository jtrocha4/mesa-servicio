import React from 'react'
import '../App.css';

function Inicio() {
    
    return (
        <div className='container mt-2'>
            <h1>Inicio</h1>
            <div className="row">
                <div className="col">
                    <img src="https://www.varadero.es/wp-content/uploads/2020/03/servcios-it-desarrollo-software.png" alt="" className='img-fluid' />
                </div>
                <div className="col">
                    <p>Somos una empresa formada por profesionales en el área de la información, con sólidos y amplios conocimientos en diseño, programación, soporte, mantención y seguridad. Nuestra misión es brindar soluciones integrales a nuestros clientes, brindándoles, un servicio de calidad y asesorándolos a lo largo del desarrollo de todos nuestros proyectos.</p>

                    <h2>Algunos de nuestros clientes</h2>
                    <div>
                        <img src="https://images.vexels.com/media/users/3/140714/isolated/lists/1e292500381db7819a5f04534d2152d5-logotipo-de-mac-os.png" alt="MacOS" className='img-fluid clientes-logo' />
                        <img src="https://www.logocrea.com/wp-content/uploads/2016/07/patito3.png" alt="Duck SAS" className='img-fluid clientes-logo' />
                        <img src="https://www.mozilla.org/media/img/structured-data/logo-firefox-focus.f5f0b924422f.png" alt="Mozilla" className='img-fluid clientes-logo' />
                        <img src="https://cdn.fing.io/images/isp/CO/logo/etb_logo.png" alt="ETB" className='img-fluid clientes-logo'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Inicio