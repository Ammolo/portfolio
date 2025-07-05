'use server'

import { nanoid } from 'nanoid';
import { redis } from './configs/redis';
import { resendEmail } from './email/email';

/** Constants */
import { KEY_ID } from './const';
import { mail_payload } from './const';
import { expiration } from './const';

/**
 * 
 * Function that chekcs if there exists a valid key
 * if no valid key exists emails the key and stores it in redis
 * 
*/
export async function GenerateKey(): Promise<{error: boolean; message: string}>{

    /* TODO: Add error handing and catches

    /** Generates a simple key */
    let key = await getKey(KEY_ID);
    
    if (key){
        console.log("Key Is Stored")
        return { error: false, message: "Valid Key Exists"};
    }
    
    /** generates a random key ID */
    key = nanoid();
    
    console.log("Key Generated");
    console.log(key);

    mail_payload.message = key;

    /** Emails Me The Key */
    await resendEmail(mail_payload);

    // /** Store the key with expiration*/
    await redis.set(KEY_ID, key, { ex: expiration });
    return { error: false, message: "New Key Generated" };
}


/**
 * 
 * Gets the current key if available
 * 
 */
export async function getKey(key_id: string): Promise<string | null>{
    return redis.get(key_id);
}


/**
 * 
 * Validates the given key with the stored valid key
 * 
 */
export async function validateKey(key: string): Promise<Boolean>{
    
    if(key === await getKey(KEY_ID))
       return true;
    
    return false;
}