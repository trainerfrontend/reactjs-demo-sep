import { useState, useRef } from 'react';


const NoState = () => {
    // const [formdata, setFormData] = useState();
    const fullNameRef = useRef();
    const emailRef = useRef();

    const changeHandler = (e) => {
        const fullName = fullNameRef.current.value;
        const email = emailRef.current.value;

        const formData = { 'fullname': fullName, 'email': email }
        console.log(formData)
    }

    const submitHandler = () => {
        console.log("hey")
        //setFormData(formData)
    }

    return (
        <section>
            <div>
                <label>Enter your Name:</label>
                <input type="text"
                    placeholder="Enter your name"
                    ref={fullNameRef}
                    onChange={changeHandler} />
            </div>

            <div>
                <label>Enter your Email:</label>
                <input type="email"
                    placeholder="Enter your email"
                    defaultValue="guest@hey.com"
                    onChange={changeHandler}
                    ref={emailRef}
                />
            </div>
            <button onClick={submitHandler}>Submit</button>

        </section>
    )
}

export default NoState;