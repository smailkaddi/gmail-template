import React from 'react';
import { ReactDOM } from 'react';

export function Formsearch() {
    return (
        <div className='search-form'>
           <div className="card form-search">
            <div className="card-body pl-0 ">
                <form  className="card-body-search">
                <input className="form-control form-control-lg mr-2 rounded-0 input-search" type="text" />
                
                <button type="submit" className="btn-block-search " ><svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" fill="none" viewBox="0 0 21 21">
                <path stroke="#fff" stroke-linecap="round" stroke-linejoin="round"   d="m15.281 15.281 4.875 4.875m-10.968-3.25a7.719 7.719 0 1 0 0-15.437 7.719 7.719 0 0 0 0 15.437Z"/>
                </svg>
                </button>
                </form>
            </div>
            </div>
           
        </div>
    );
}
export default Formsearch;