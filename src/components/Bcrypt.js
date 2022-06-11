import React from 'react'

function Bcrypt() {
    return (
        // create a special container to put large amount of contents into it
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6">
                    <h1>What is Bcrypt JS??</h1>
                    <blockquote className="blockquote">
                        <p className='mb-3'>
                        Bcrypt was designed by Niels Provos and David Mazières based on the Blowfish cipher>): b for Blowfish and crypt for the name of the hashing function used by the UNIX password system.
                        </p>
                        <footer className="blockquote-footer">Twitter Security Analyst<cite title="Source Title">Mike Banning</cite></footer>
                    </blockquote>
                </div>
                <div className="col-md-6 m-auto">
                    <img src="https://images.ctfassets.net/23aumh6u8s0i/4kR0K8ZKnZKhcspF2ImeaE/a3d7bee55a00a70526fc0b4ea2442666/bcrypt-algo" alt="bcrypt" className="img-fluid" />
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-md-8">
                    <h1>What is Blowfish algorithm??</h1>
                    <p>
                        <ul>
                            <li>
                        The Blowfish cipher is a fast block cipher except when changing keys>), the parameters that establish the functional output of a cryptographic algorithm: each new key requires the pre-processing equivalent to encrypting about 4 kilobytes of text>), which is considered very slow compared to other block ciphers.
                            </li>
                            <li>
                                bcrypt is able to mitigate those kinds of attacks by combining the expensive key setup phase of Blowfish with a variable number of iterations to increase the workload and duration of hash calculations. The largest benefit of bcrypt is that, over time, the iteration count can be increased to make it slower allowing bcrypt to scale with computing power. We can diminish any benefits attackers may get from faster hardware by increasing the number of iterations to make bcrypt slower.
                            </li>
                        </ul>
                    </p>
                </div>
                <div className="col-md-4 m-auto">
                    <img src="https://www.researchgate.net/profile/Palak-Jain-13/publication/318368992/figure/fig2/AS:631667295277106@1527612627610/Blowfish-Encryption-Algorithm.png" alt="bcrypt" className="img-fluid" />
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-md-6">
                    <h1>How does bcrypt work??</h1>
                    <p>
                        Provos and Mazières, the designers of bcrypt, used the expensive key setup phase of the Blowfish cipher to develop a new key setup algorithm for Blowfish named "eksblowfish", which stands for "expensive key schedule Blowfish."
                    </p>
                    <p>
                        What's "key setup"? According to Ian Howson, a software engineer at NVIDIA: "Most ciphers consist of a key setup phase and an operation phase. During key setup, the internal state is initialised. During operation, input ciphertext or plaintext is encrypted or decrypted. Key setup only needs to be conducted once for each key that is used" bcrypt runs in two phases:
                    </p>
                    
                </div>
                <div className="col-md-6 m-auto">
                    <img src="https://i.imgur.com/al3kptj.jpg" alt="bcrypt" className="img-fluid" />
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                <h3>Phase 1:</h3>
                    <p>
                        A function called EksBlowfishSetup is setup using the desired cost, the salt, and the password to initialize the state of eksblowfish. Then, bcrypt spends a lot of time running an expensive key schedule which consists of performing a key derivation where we derive a set of subkeys from a primary key. Here, the password is used as the primary key. In case that the user selected a bad or short password, we stretch that password/key into a longer password/key. The aforementioned practice is also known as key stretching.

                        What we are going through this first phase is to promote key strengthening to slow down calculations which in turn also slow down attackers.
                    </p>
                <h3>Phase 2:</h3>
                    <p>
                        <ul>
                            <li> 
                        The magic value is the 192-bit value OrpheanBeholderScryDoubt. This value is encrypted 64 times using eksblowfish in ECB mode>) with the state from the previous phase. The output of this phase is the cost and the 128-bit salt value concatenated with the result of the encryption loop.
                            </li>
                            <li>
                                The resulting hash is prefixed with $2a$, $2y$, or $2b$. The prefixes are added to indicate usage of bcrypt and its version.
                            </li>
                            <li>
                                The designers of bcrypt believe that the function will hold its strength and value for many years. Its mathematical design gives assurance to cryptographers about its resilience to attacks.
                            </li>
                            <li>
                                Regarding adaptable cost, we could say that bcrypt is an adaptive hash function as we are able to increase the number of iterations performed by the function based on a passed key factor, the cost. This adaptability is what allows us to compensate for increasing computer power, but it comes with an opportunity cost: speed or security?
                            </li>
                            <li>
                                Plotting this data in Wolfram Alpha to create a least-squares fit graph, we observe that the time to hash a password grows exponentially as the cost is increased in this particular hardware configuration:
                            </li>
                        </ul>
                    </p>
                </div>
            </div>

            {/* container for image */}
            <div className="row">
                <div className="col-md-12 d-flex justify-content-center mb-3">
                    <img src="https://images.ctfassets.net/23aumh6u8s0i/2lyPfTYS6uWSrplQ9bouc2/d14a78b18d1618eeb85adad9d2368fd5/graph" alt="bcrypt" className="img-fluid" />
                </div>
            </div>
        </div>
    )
}

export default Bcrypt