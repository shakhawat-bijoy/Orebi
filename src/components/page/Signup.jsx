import React, { useState } from 'react'
import Container from '../layer/Container'
import Header from '../layer/Header'
import Title from '../layer/Title'
import Input from '../layer/Input'
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import { BiCheckboxSquare } from "react-icons/bi";
import Button from '../layer/Button'
import FromError from '../layer/FromError'

const Signup = () => {
    
    let [name, setName] = useState("")
    let [nameerr, setNameerr] = useState("")

    let [email, setEmail] = useState("")
    let [emailerr, setEmailerr] = useState("")

    let [password, setPassword] = useState("")
    let [passworderr, setpassworderr] = useState("")

    let [repeatPassword, setRepeatPassword] = useState("")
    let [repeatPasswordErr, setRepeatPasswordErr] = useState("")

    let changeName = (e) => {
        setName(e.target.value);
        setNameerr("")
    }

    let changeEmail = (e) => {
        setEmail(e.target.value);
        setEmailerr("")
    }

    let changePassword = (e) => {
        setPassword(e.target.value);
        setpassworderr("")
    }

    let changeRepeatPassword = (e) => {
        setRepeatPassword(e.target.value);
        setRepeatPasswordErr("")
    }

    let submit = () => {
        let valid = true;

        if (!name) {
            setNameerr("Name is Required")
            valid = false;
        }

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
        } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/.test(password)) {
            setpassworderr("The Password must contain at least 1 lowercase, 1 uppercase, 1 numeric character, 1 special character and also must be 8 characters or longer :)")
            valid = false;
        }

        if (!repeatPassword) {
            setRepeatPasswordErr("Repeat Password is Required")
            valid = false;
        } else if (repeatPassword !== password) {
            setRepeatPasswordErr("Passwords do not match")
            valid = false;
        }

        if (valid) {
            // Proceed with form submission
            console.log("Form submitted successfully");
        }
    }

    return (
        <div>
            <Container className="font-DM px-3 lg:px-0">
                <Header text="Sign up" />
                <div className='border-b border-[#F0F0F0]'>
                    <p className='lg:w-[644px] text-[#767676] lg:text-base text-sm font-normal lg:leading-7 lg:pb-16 pb-8'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.
                    </p>
                </div>

                <Title className="text-[#262626] lg:text-[39px] text-base fon font-bold lg:mt-[57px] mt-10 lg:mb-[42px] mb-6" text="Your Personal Details" />

                <div className='flex flex-wrap lg:gap-y-6 lg: gap-y-3 lg:gap-x-10 gap-x-5'>
                    <Input value={name} onChange={changeName} type="text" text="First Name" placeholder="First Name " >
                        {nameerr && <FromError error={nameerr} />}
                    </Input>

                    <Input type="text" text="Last Name" placeholder="Last Name " />

                    <Input value={email} onChange={changeEmail} type="email" text="Email address" placeholder="company@domain.com" >
                        {emailerr && <FromError error={emailerr} />}
                    </Input>

                    <Input type="tel" text="Telephone" placeholder="Your phone number " />
                </div>

                <Title className="text-[#262626] lg:text-[39px] text-base fon font-bold lg:mt-[57px] mt-10 lg:mb-[42px] mb-6" text="New Customer" />

                <div className='flex flex-wrap lg:gap-y-6 lg: gap-y-3 lg:gap-x-10 gap-x-5'>
                    <Input type="text" text="Address 1" placeholder="4279 Zboncak Port Suite 6212" />
                    <Input type="text" text="Address 2" placeholder="_" />
                    <Input type="text" text="City" placeholder="Your city" />
                    <Input type="text" text="Post Code" placeholder="05228" />
                    <Input type="select" text="Division" placeholder="Please select" />
                    <Input type="select" text="District" placeholder="Please select" />
                </div>

                <div className='border-b border-[#F0F0F0]'>
                    <Title className="text-[#262626] lg:text-[39px] text-base fon font-bold lg:mt-[57px] mt-10 lg:mb-[42px] mb-6" text="Your Personal Details" />

                    <div className='flex lg:gap-x-10 gap-x-5 lg:pb-16 pb-8'>
                        <div className='w-[508px] h-[68px] relative'>
                            <h3 className='lg:text-base text-sm font-bold leading-6 '>Password</h3>
                            <input value={password} onChange={changePassword} type="password" placeholder='password' className='w-full lg:pt-[10px] lg:pb-[17px] py-1 outline-none border-b border-[#F0F0F0] text-[#767676] lg:text-sm text-xs' />
                            {passworderr && <FromError error={passworderr} />}
                        </div>

                        <div className='w-[508px] h-[68px] relative'>
                            <h3 className='lg:text-base text-sm font-bold leading-6 '>Repeat Password</h3>
                            <input value={repeatPassword} onChange={changeRepeatPassword} type="password" placeholder='Repeat Password' className='w-full lg:pt-[10px] lg:pb-[17px] py-1 outline-none border-b border-[#F0F0F0] text-[#767676] lg:text-sm text-xs' />
                            {repeatPasswordErr && <FromError error={repeatPasswordErr} />}
                        </div>
                    </div>
                </div>

                <div className='text-[#767676] text-base font-normal flex flex-col gap-y-6'>
                    <p className='flex items-center gap-x-4 lg:mt-16 mt-4'>
                        <span><input type="checkbox" /></span>
                        I have read and agree to the Privacy Policy
                    </p>

                    <p className='flex items-center'>Subscribe Newsletter
                        <span className='pl-8'><input type="checkbox" /></span>
                        <span className='pl-4'>Yes</span>
                        <span className='pl-10'><input type="checkbox" /></span>
                        <span className='pl-4'>No</span>
                    </p>

                    <Button onClick={submit} className="lg:py-4 py-2 lg:pl-[77px] pl-[37px] lg:pr-[83px] pr-[41px] w-[200px]" text="Continue" />
                </div>
            </Container>
        </div>
    )
}

export default Signup
