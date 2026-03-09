//* agar hame ek user ke account se dosare user ke account me paise bhejene hai too voo work kaise karta hai:


/**
 ** - From - A account
 ** - To - B account
 ** - Amount - 100 rupees
 ** - Idempotency Key - ye ek string hoti hai joo haqr transaction ke liye unique hoti hai
 ** - Status - Pending  (by default status pending hota hai) aur jaise hii transaction complete ho jayegi too status ko hmm "Completed" mark kar denge
*/


/**
 ** - Account of user A (Ledger for A)
 ** - Account - A (A ka account ka use hua hai paise send karne ke liye)
 ** - Amount - 100 (jitne amount send karne hai)
 ** - Type - Debit (account se paise send kiye gaye hai)
*/


/**
 ** - Account of user B (Ledger for B)
 ** - Account - B (B ka account ka use hua hai paise receive karne ke liye)
 ** - Amount - 100 (jitna amount receive kiya hai)
 ** - Type - Credit (account se paise receive kiye gaye hai)
*/


/**
 ** - Hame ye four steps ko perform karna hota hai ek user ke account se doosare user ke account me paise ko transfer karne ke liye:
 ** - Step 1 - sabse pehle ek transaction create kiya hai with status (Pending) jaha par hmm A user ke account se B user ke account me paise transfer kiye
 ** - Step 2 - A user ke account se amount ko deduct kiya
 ** - Step 3 - B user ke account me amount ko daala with the help of ledger
 ** - Step 4 - transaction ke status ko hamne "Pending" se "Completed" me update kiya
 ** - agar ek user ke account se hame doosare user ke account me paise ko transfer kiya aur kisi problem ki wajah se doosare user ke account me paise transfer nhi hue too hame voo amount pehle user ke account me vapas karna hota hai
*/


//* Idempotency Key - idempotency key unique hoti hai aur ye har ek transaction ko doo baar karne se rokti hai, iska matlab idempotency key unique honi chahiye