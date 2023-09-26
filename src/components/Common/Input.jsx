const Input = ({ type, placeholder, handler }) => {

    return <input type={type}
        placeholder={placeholder}
        onChange={handler} />
}

export default Input;