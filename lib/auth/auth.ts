'use server'

import { validateKey } from '../key';
import { createSession } from './session';


/**
 * 
 * Simple function to "Authenticate" the browser
 * Uses Cookies to create a session
 * 
 * 
 */
export async function authenticate(data: FormData){
    const key = data.get('key') as string;

    if (!validateKey(key)){
        return { success: false, message: 'Invalid Key'};
    }

    await createSession(key);

    return { success: true, message: 'Access Granted'}
}