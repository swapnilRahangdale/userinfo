import React, { useEffect ,useState  } from 'react';

import './App.css';

function App() {

  const [title , setTitle]   = useState('No Change');

    const userNameApi = () =>{

         return new Promise<any>((resolve, reject) =>{

          return setTimeout(() =>{
            resolve({name: 'Swapnil'});
          },1000);

         })
    };

     

      const getUserName = async() => {
       

        console.log('test before')

        const userData =await userNameApi().catch((err) => {console.log('err',err)});

        console.log('userData',userData)
        const {name} = userData;
        setTitle(name)
        
        console.log('test After res');
        
        
        
      }

    

     useEffect(() =>{

      getUserName()
         

     }, [] )

  return (
   <div>
        Name:- {title}
   </div>
  );
}

export default App;
