import React from 'react';

const FormAction = () => {
    let handleAction=(e)=>{
        console.log(e.get('name'));
        console.log(e.get('email'));
    }
    return (
        <div>
            <form action={handleAction}>
                <input type="text" name='name' placeholder='name' />
                <input type="email" name='email' placeholder='email' />
                <br />
                <input type="submit" value="value" />
            </form>
        </div>
    );
};

export default FormAction;