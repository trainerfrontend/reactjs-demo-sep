import { useState } from 'react';
import Heading from '../components/Global/Heading/Heading';

const Form = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');

    const changeHandler = (e) => {
        // console.log(e.target.value);
        const { value } = e.target;
        setFullName(value);
    }

    const changeEmailHandler = (e) => {
        // console.log(e.target.value);
        const { value } = e.target;
        setEmail(value);
    }

    return (
        <section>
            <h1>{email}</h1>
            <Heading userName={fullName} />
            <div>
                <label>Enter your Name:</label>
                <input type="text"
                    placeholder="Enter your name"
                    value={fullName}
                    onChange={changeHandler} />
            </div>

            <div>
                <label>Enter your Email:</label>
                <input type="email"
                    placeholder="Enter your email"
                    defaultValue="guest@hey.com"
                    onChange={changeEmailHandler} />
            </div>


        </section>
    )
}

export default Form;