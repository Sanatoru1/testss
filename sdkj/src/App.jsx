import React, { useState } from "react";

function MultiValidation () {
    const [formData, setFormData ] = useState({
        email: '',
        password: '',
    })
    const [errors, setErrors] = useState({});
    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }
    const handleSubmit = (event) => {
        const newErrors = []
        if(!formData.email.includes('@')){
            newErrors.email = 'несуществующая почта'
        } else if(formData.password.length < 6) {
            newErrors.password = 'пароль должен быть не менее 6 символов'
        } 
         if(Object.keys(newErrors).length > 0){
            setErrors(newErrors);
        } else{
            setErrors({})
            alert('формао отправлена');
        }
        event.preventDefault();
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>
                    email:
                    <input type="email"  name="email" value={formData.email} onChange={handleChange} />
                </label>
                <label>
                    password:
                    <input type="password"  name="password" value={formData.password} onChange={handleChange} />
                </label>
                {errors.password &&  <p style={{color: "red"}}>{errors.password}</p>}
                <button type="submit">отправить</button>
            </form>
        </>
    )
}

// function SimpleValidation() {
//     const [name, setName ] = useState('');
//     const [error, setError] = useState('');

//     const handleChange = (event) => {
//         setName(event.target.value);
//     }

//     const  handleSubmit = (event) => {
//         if(!name) {
//             setError('Имя обязательно')
//         } else {
//             setError('');
//             alert(`Имя: ${name}`);
//         }
//         event.preventDefault();
//     }
//     return(
//         <>
//             <form onSubmit={handleSubmit}>
//                 <label htmlFor="">
//                     Name: 
//                     <input type="text" value={name} onChange={handleChange} />
//                 </label>
//                 {error && <p style={{color: "red"}}>error</p>}
//                 <button type="submit">отправить</button>
//             </form>
//         </>
//     )
// }

// function MultiForm() {
//     const [formData, setFormData] = useState({
//         firstName: "",
//         lastName: ""
//     }); 

//     const handleChange = (event) => {
//         const { name, value } = event.target;
//         setFormData({ 
//             ...formData,
//             [name]: value
//         });
//     };

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         alert(`Name: ${formData.firstName} ${formData.lastName}`);
//     };

//     return (
//         <>
//             <form onSubmit={handleSubmit}>
//                 <label>
//                     Name:
//                     <input 
//                         type="text" 
//                         name="firstName" 
//                         value={formData.firstName}  
//                         onChange={handleChange}
//                     />
//                 </label>
//                 <label>
//                     Last name:
//                     <input 
//                         type="text" 
//                         name="lastName" 
//                         value={formData.lastName}  
//                         onChange={handleChange}
//                     />
//                 </label>        
//                 <button type="submit">Send</button>
//             </form>
//         </>
//     );
// }

function App() {
    return (
        <div className="App">
        <MultiValidation />
        </div>
    ); 
}

export default App;
