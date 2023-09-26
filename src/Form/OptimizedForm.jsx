import { useState } from 'react';
import Heading from '../components/Global/Heading/Heading';
import Label from '../components/Common/Label';
import Input from '../components/Common/Input';
import { FORM } from '../constants/messges';

const OptimizedForm = () => {

    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');

    const changeHandler = (e) => {
        console.log(e.target.value);
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
                <Label labelName={FORM.enteryourname} />
                <Input type="text"
                    placeholder="Enter your name"
                    handler={changeHandler} />
            </div>

            <div>
                <Label labelName={FORM.ENTER_YOUR_EMAIL} />
                <Input type="email"
                    placeholder="Enter your email"
                    handler={changeEmailHandler} />
            </div>
            <div>
                <Label labelName="Enter your message:" />
                <Input type="text"
                    placeholder="Enter your message"
                    handler={changeEmailHandler} />
            </div>


        </section>
    )
}

export default OptimizedForm;