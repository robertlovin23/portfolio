import React, { useState,useEffect } from 'react'
import { useForm }from 'react-hook-form'
import Recaptcha from 'react-recaptcha'
import './robert.css'

const Form = () => {
    const { register,handleSubmit,reset,errors,setError, setValue, formState: { isSubmitting } } = useForm();

    const [submitted,setSubmit] = useState(false);

    const url = "https://77ycdhkvpg.execute-api.us-west-2.amazonaws.com/prod/contact"

    const onSubmit = async data => {
        console.log(data)
        try {
          await fetch(url, {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            body: JSON.stringify(data),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          });
            reset();
            setSubmit(true);
            alert("Message Sent")
        } catch (error) {
          // handle server errors
          setError('submit', 'submitError', `Doh! ${error.message}`);
        }
    };

    let recaptchaInst;

    const executeCaptcha = () => {
        recaptchaInst.execute();
    }

    const verifyCallback = (res) => {
        console.log(res);
        setValue('captchaToken', res)
    }

    useEffect(() => {
        register({
            name: 'captchaToken'
        }, {required: true})
    })

    return(
    <div className="flex mb-4">
        <form className="w-full md:w-1/2 h-12 form"  method="post" onSubmit={handleSubmit(onSubmit)}>
        <h2 className="title">Contact Me</h2>
            <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="name">
                            Full Name
                        </label>
                        <input id="name" 
                                disabled={isSubmitting}
                                ref={register({required: 'Name is required',})} 
                                name="name" 
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                                type="text" 
                                placeholder="Full Name"/>
                               {
                                errors.name && (
                                    <div className="msg-error">{errors.name.message}</div>
                                )}
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="email">
                            E-mail
                        </label>
                        <input disabled={isSubmitting} 
                                id="email" 
                                ref={register({required: 'E-Mail is required',})} 
                                name="email" 
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                                type="email" 
                                placeholder="E-Mail"/>
                            {
                                errors.email && (
                                    <div className="msg-error">{errors.email.message}</div>
                            )}
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="budget">
                            Budget
                        </label>
                        <input disabled={isSubmitting} 
                                id="budget" 
                                ref={register({ min: 0, max: 50000 })}
                                name="budget" 
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"  
                                type="number" 
                                placeholder="Project Quote"/>
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="message">
                            Message
                        </label>
                        <textarea disabled={isSubmitting}
                            id="message"
                            ref={register({required: 'Message is required'})}
                            name="message"
                            className="border rounded text-xs font-bold mb-2 block uppercase tracking-wide text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            type="text"
                    
                            style={{width:"100%", height:"100px"}}
                        />
                        {
                                errors.messages && (
                                    <div className="msg-error">{errors.messages.message}</div>
                        )}
                    </div>
                </div>
                <Recaptcha 
                    sitekey="6LehOtYoAAAAANmdQrumINrNtqECdIT3sdHzDDRh"
                    size="invisible"
                    ref={e => recaptchaInst = e}
                    verifyCallback={verifyCallback}/>
                <button disabled={isSubmitting} 
                        onClick={executeCaptcha}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" 
                        type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Form;