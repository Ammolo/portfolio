import 'server only'

import { cookies } from 'next/headers'

/**
 * 
 * Cookies-Based session for demo access
 * 
 * @param key key to be saved in session cookie
 * 
 */
export async function createSession(key: string){
    /** expires in one week */
    const expires = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
    const cookieStore = await cookies();

    /**
     * 
     *  should probably encrypt the keypair to create unique session key
     *  but nothing sensetive information tbf
     * 
     */
    cookieStore.set('demo_key', key, {
        httpOnly: true,
        secure: true,
        expires: expires,
        sameSite: 'lax',
        path: '/',
    })
}