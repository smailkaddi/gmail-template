import React from 'react';
import { ReactDOM } from 'react';
import FormSearch from './components/formSearch'
import Header from './components/header';
import Listemail from './components/listEmail';
import Sidebar from './components/sidebar';
export function App() {
    return (
        <div className='container'>
             <Header/> 
             <div className='container-content' >
             <Sidebar>
                
             </Sidebar>
             <FormSearch/> 
             
             <Listemail/>
             </div>
             
        </div>
    );
}
