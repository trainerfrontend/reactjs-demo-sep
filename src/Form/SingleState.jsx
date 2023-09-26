import { useState } from 'react';


const SingleState = () => {
    const [formData, setFormData] = useState({}); // single source of truth

    const changeHandler = (e) => {
        // console.log(e.target.name);
        const { value, name } = e.target; // { fullname: tom, email: tom@we.com }

        // setFormData({ [name]: value }); // { fullname: tom, email: tom@we.com} 

        // Merging of multiple states
        setFormData((prevState) => ( // { fullname: tom}
            { ...prevState, [name]: value } // { obj1, obj2} => { }; { fullname: tom, email: tom@we.com} 
        ))
    }

    return (
        <section>
            <h1>{JSON.stringify(formData)}</h1>
            {/* <Heading userName={fullName} /> */}
            <div>
                <label>Enter your Name:</label>
                <input type="text"
                    placeholder="Enter your name"
                    onChange={changeHandler}
                    name="fullname" />
            </div>

            <div>
                <label>Enter your Email:</label>
                <input type="email"
                    placeholder="Enter your email"
                    defaultValue="guest@hey.com"
                    onChange={changeHandler}
                    name="email" />
            </div>



        </section>
    )
}

export default SingleState;