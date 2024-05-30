import React, { useState } from 'react'
import Container from '../layer/Container'
import Header from '../layer/Header'
import Title from '../layer/Title'
import Input from '../layer/Input'
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import { BiCheckboxSquare } from "react-icons/bi";
import Button from '../layer/Button'
import FromError from '../layer/FromError'

import { getAuth, signInWithEmailAndPassword,  } from "firebase/auth";
import { Triangle } from 'react-loader-spinner'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    let [email, setEmail] = useState("")
    let [emailerr, setEmailerr] = useState("")

    let [password, setPassword] = useState("")
    let [passworderr, setpassworderr] = useState("")

    let [triangle, setTriangle] = useState(true)

    const auth = getAuth();

    let navigate = useNavigate ()

    let changeEmail = (e) => {
        setEmail(e.target.value);
        setEmailerr("")
    }

    let changePassword = (e) => {
        setPassword(e.target.value);
        setpassworderr("")
    }

    let submit = () => {
        let valid = true;

        if (!email) {
            setEmailerr("Email is Required")
            valid = false;
        } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(email)) {
            setEmailerr("You have entered an invalid email address!")
            valid = false;
        }

        if (!password) {
            setpassworderr("Password is Required")
            valid = false;
        } 
        // else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/.test(password)) {
        //     setpassworderr("Invalid Password :)")
        //     valid = false;
        // }

        if (email && password && /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/ && /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/ ) {
          signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
              // Signed up 
              const user = userCredential.user;
               if (user) {
                setPassword("")
                setTriangle(false)
                toast.success('🦄 Log In Succesful!')
                setTimeout(()=>{
                navigate("/")
              }, 2000)
               }
              // ...
            })
            .catch((error) => {
              if (error.code.includes ("auth/email-already-in-use")) {
                setEmailerr("Email already in use")
                toast.error('🦄 Something Is Wrong')
              }
              // ..
            });
        }
    }

    return (
        <div>
            <ToastContainer
            className="w-48 md:w-auto"
                position="top-right"
                autoClose={1500}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                />

            <Container className="font-DM px-3 lg:px-0">
                <Header text="Login" />
                <div className='border-b border-[#F0F0F0]'>
                    <p className='lg:w-[644px] text-[#767676] lg:text-base text-sm font-normal lg:leading-7 lg:pb-16 pb-8'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.
                    </p>
                </div>

                <Title className="text-[#262626] lg:text-[39px] text-base fon font-bold lg:mt-[57px] mt-10 lg:mb-[42px] mb-6" text="Returning Customer"/>

                <div className='flex flex-wrap lg:gap-y-6 lg: gap-y-3 lg:gap-x-10 gap-x-5'>

           

                    <Input value={email} onChange={changeEmail} type="email" text="Email address" placeholder="company@domain.com" >
                        {emailerr && <FromError error={emailerr} />}
                    </Input>
               
                        <div className='lg:w-[508px] w-[250px] h-[68px] relative'>
                            <h3 className='lg:text-base text-sm font-bold leading-6 '>Password</h3>
                            <input value={password} onChange={changePassword} type="password" placeholder='password' className='w-full lg:pt-[10px] lg:pb-[17px] py-1 outline-none border-b border-[#F0F0F0] text-[#767676] lg:text-sm text-xs' />
                            {passworderr && <FromError error={passworderr} />}
             
                    </div>
                    </div>

                <div className='text-[#767676] text-base font-normal flex flex-col gap-y-6 mt-8'>

                    {
                        triangle ? <Button onClick={submit} className="lg:py-4 py-2 w-[200px] " text="Log In" />
                        : 
                        <Triangle
                        visible={true}
                        height="80"
                        width="80"
                        color="#4fa94d"
                        ariaLabel="triangle-loading"
                        wrapperStyle={{}}
                        wrapperClass=""/>
                    }

                </div>



                <div className='lg:pt-[58px]'>
            <Title className="text-[#262626] lg:text-[39px] text-base fon font-bold lg:mt-[57px] mt-10 lg:mb-[42px] mb-6" text="New Customer"/>

            <p className='lg:w-[644px] text-[#767676] lg:text-base text-sm font-normal lg:leading-7  pb-8 lg:pb-[51px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>

            <Button to={"/signup"} className="lg:py-4 py-2 w-[200px]" text="Continue"/>
          </div>
            </Container>
        </div>
    )
}

export default Login
