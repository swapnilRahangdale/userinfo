import React, { useEffect ,useState  } from 'react';

import './App.css';



function App() { 

  const [title , setTitle] = useState('Company Name is ')

  const userCompanyName =() =>{
   
    return new Promise<any>((resolve,reject) =>{

      return setTimeout(() =>{
        resolve({Company: 'TCS'});
      },1000);

    })

  }
 
  const getUserCompanyName = async() =>{

    console.log('test Before');

    const userData = await userCompanyName().catch((err) =>{console.log('err',err)})

    console.log('userData',userData);
    const{Company} = userData;
    setTitle(Company)
    
    console.log('test After');
    
  }

  useEffect(()=>{

    getUserCompanyName()

  },[])
  

  return (

   <div>
        Company Name:- {title}
   </div>
  );
}

export default App;
