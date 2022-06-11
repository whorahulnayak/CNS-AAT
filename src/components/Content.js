import React from 'react'
import {Link} from 'react-router-dom'
import TextScrambler from 'react-scramble-text'

function Content() {
    const phrases = [
        "Caesar Cipher","Monoalphabetic Cipher","Playfair Cipher",
        "Vigenere Cipher","Hill Cipher","Rail Fence Cipher",
        "Transposition Cipher","One-Time Pad Cipher","RSA Cipher",
        "Elgamal Cipher","Diffie-Hellman Cipher","DSA Cipher",
        "Blowfish Cipher","Bcrypt Cipher","Secure Hash Algorithm","Protocol"];
    return (
        <div>
            {/* create a container to put texts in them */}
            <div className="container">
                {/* create a row to put texts in them */}
                <div className="row">
                    <div className="col-md-12">
                    <p className='text-justify scramble-text'>
                        <TextScrambler phrases={phrases}
                          speed={50}
                          pauseTime={800}/>
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <h1>Welcome to CNS</h1>
                        <p>
                            This is a website for the Cryptography & Network security Subject 6th sem.
                        </p>
                    </div>
                </div>
                {/* create a new row */}
                <div className="row">
                    <div className="col-md-12">
                        <h1>Bcrypt JS</h1>
                        <p>
                            The bcrypt hashing function allows us to build a password security platform that scales with computation power and always hashes every password with a salt.
                        </p>
                        <Link to="/bcrypt" className='hyperlink'>Read More</Link>
                    </div>
                </div>
            </div>
            {/* // create a new container to put texts in them */}
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1>Definitions of terms used by Bcrypt JS</h1>
                        <h3>Salt</h3>
                        <p>
                            <ul>
                                <li>
                                    Salting is simply the addition of a unique, random string of characters known only to the site to each password before it is hashed, typically this “salt” is placed in front of each password.
                                </li>
                                <li>
                                    The salt is used to make the password harder to guess.
                                </li>
                            </ul>
                        </p>
                    </div>
                </div>
            </div>
            {/* // create a new container to put paragraphs in them */}
            <div className="container">
                <div className="row">
                    <div className="col-md-12 trim-content">
                        <h1>Reasons for Using Bcrypt JS</h1>
                        <p>
                        There are plenty of cryptographic functions to choose from such as the SHA2 family and the SHA-3 family. However, one design problem with the SHA families is that they were designed to be computationally fast. How fast a cryptographic function can calculate a hash has an immediate and significant bearing on how safe the password is.
                        </p>
                        <p>
                        Faster calculations mean faster brute-force attacks, for example. Modern hardware in the form of CPUs and GPUs could compute millions, or even billions, of SHA-256 hashes per second against a stolen database. Instead of a fast function, we need a function that is slow at hashing passwords to bring attackers almost to a halt. We also want this function to be adaptive so that we can compensate for future faster hardware by being able to make the function run slower and slower over time.
                        </p>
                        <p>
                        Some cryptographic software is not designed to scale with computing power. As explained earlier, the safety of the password depends on how fast the selected cryptographic hashing function can calculate the password hash. A fast function would execute faster when running in much more powerful hardware.
                        </p>
                        <p>
                        To mitigate this attack vector, we could create a cryptographic hash function that can be tuned to run slower in newly available hardware; that is, the function scales with computing power. This is particularly important since, through this attack vector, people tend to keep the length of the passwords constant. Hence, in the design of a cryptographic solution for this problem, we must account for rapidly evolving hardware and constant password length.
                        </p>
                    </div>
                    </div>
                </div>  
        </div>
    )
}

export default Content