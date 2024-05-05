
 const Button = (props) => {

    const { name, color} = props

    return(
        <button className={`w-full h-10 px-6 ${color} text-white border rounded-md font-semibold`}>
            {name}
        </button>
    )

}

export default Button