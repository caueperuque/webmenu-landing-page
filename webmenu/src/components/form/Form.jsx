import emailjs from "emailjs-com";
import React from 'react';
import './Form.css'

export default function Form() {


    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('gmailServiceID', 'template_jvppfaa', e.target, 'K8H0wY8gXsGIcNukV')

            .then((result) => {
                alert("Mensagem enviada com sucesso! 👍");

            }, (error) => {
                alert(error.message)

            });
        e.target.reset()


    }
    return (
        <div className="contact__container">
            <h2>Contato</h2>
            <form onSubmit={sendEmail}>
                <div className="form__container">

                    <div className="">
                        <label htmlFor="name">Nome:</label>
                        <input type="text" autoFocus className="form__input" id="name" required placeholder="Nome" name="name" />
                    </div>
                    <div className="">
                        <label>Email:</label>
                        <input type="email" className="form__input" required placeholder="Seu email" name="email" />
                    </div>

                    <div className="form__label-textarea">
                        <label>Mensagem:</label>
                        <textarea className="form__textarea" id="" cols="30" rows="8" required placeholder="Sua mensagem" name="message"></textarea>
                    </div>
                    <div className="">
                        <input type="submit" className="form__btn" value="Enviar mensagem"></input>
                    </div>
                </div>
            </form>
        </div>
    )
}