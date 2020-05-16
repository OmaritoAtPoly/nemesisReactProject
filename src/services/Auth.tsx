state = login:false



const payload = {
        check:  true       //todo aki se lo ek devuelve el metodo isValidUser 
       };

       const token = jwt.sign(payload, app.get('llave'), {
        expiresIn: 300000
       });

       localStorage.setItem('login',{login_state= true,token:token})