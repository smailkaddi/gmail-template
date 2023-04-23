import React from 'react';
import { ReactDOM } from 'react';
import EmailItems from './EmailItems'

export function Listemail() {
    return (
        <div className='email-list'>
            <h1>list Email</h1>
            <table>
              <EmailItems></EmailItems>
            </table>
             
        </div>
    );
}
export default Listemail;