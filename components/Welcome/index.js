import { useState } from 'react'

// Hooks
import { useChangeScreen } from '../../lib/context/ScreenProvider'

// Framer
import { motion } from 'framer-motion'

// Components
import Password from './Password'

const passwordScreen = true
function Welcome() {
    const change = useChangeScreen()
    const [error, setError] = useState(false)
    const [success, setSuccess] = useState(false)
    const secretPassword = "jackjackjack"

    function showError() {
        setError(true)
        setTimeout(() => {
            setError(false)
        }, [2000])
    }
    function validate(e, input) {
        e.preventDefault()
        if (input === secretPassword) {
            setTimeout(() => {
                setSuccess(true)
            }, [2000])
            setTimeout(() => {
                change("main")
            }, [4000])
        } else {
            showError()
        }
    }

    //  setTimeout(() => {
    //       change("main")
    //   }, [2000])


    // Variants 
    const main = {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: {
            scale: 0, opacity: 0,
            transition: {
                duration: 0.5,
                when: "afterChildren",
                staggerChildren: 0.8
            }
        }
    }
    const container = {
        initial: {
            opacity: 0,
            rotate: -180,
            borderRadius: '100%'
        },
        animate: {
            opacity: 1,
            rotate: 0,
            borderRadius: '1.5rem',
            transition: {
                type: "spring",
                bounce: 0.2,
                duration: 1.5,
                when: "beforeChildren"
            },

        },
    }
    return (

        <>
            {passwordScreen
                ? <>
                    {
                        !success
                            ? <Password
                                validate={validate}
                                error={error}
                            />
                            : <motion.div
                                variants={main}
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                className='overflow-hidden h-screen w-screen flex flex-col items-center justify-center'>

                                <motion.div
                                    variants={container}
                                    className='w-[300px] h-[300px] bg-accent-500  flex justify-center items-center'>

                                    <div className='w-[150px] h-[190px]  '>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg" viewBox="0 -0.5 75 97" className='w-full'>
                                            <motion.path
                                                // variants={logo}
                                                stroke="#ffffff"
                                                d="M32 1h42M32 2h42M32 3h42M32 4h42M32 5h42M32 6h42M32 7h42M32 8h42M32 9h42M32 10h42M32 11h42M32 12h42M50 13h24M50 14h24M50 15h24M50 16h24M50 17h24M50 18h24M50 19h24M50 20h24M50 21h24M50 22h24M50 23h24M50 24h24M50 25h24M50 26h24M50 27h24M50 28h24M50 29h24M50 30h24M50 31h24M50 32h24M50 33h24M50 34h24M50 35h24M50 36h24M50 37h24M50 38h24M50 39h24M50 40h24M50 41h24M50 42h24M50 43h24M50 44h24M50 45h24M50 46h24M50 47h24M50 48h24M50 49h24M50 50h24M50 51h24M50 52h24M50 53h24M50 54h24M50 55h24M50 56h24M50 57h24M50 58h24M50 59h24M50 60h24M2 61h24M50 61h24M2 62h24M50 62h24M2 63h24M50 63h24M2 64h24M50 64h24M2 65h24M50 65h24M2 66h24M50 66h24M2 67h24M50 67h24M2 68h24M50 68h24M2 69h24M50 69h24M2 70h24M50 70h24M2 71h24M50 71h24M2 72h24M50 72h24M2 73h24M50 73h24M2 74h24M50 74h24M2 75h24M50 75h24M2 76h24M50 76h24M2 77h24M50 77h24M2 78h24M50 78h24M20 79h42M20 80h42M20 81h42M20 82h42M20 83h42M20 84h42M20 85h42M20 86h42M20 87h42M20 88h42M20 89h42M20 90h42M20 91h42M20 92h42M20 93h42M20 94h42M20 95h42M20 96h42" />
                                        </svg>
                                    </div>

                                </motion.div>
                            </motion.div>
                    }
                </>
                : <motion.div
                    variants={main}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className='overflow-hidden h-screen w-screen flex flex-col items-center justify-center'>


                    <motion.div
                        variants={container}
                        className=' w-[200px] h-[200px] bg-accent-500  flex justify-center items-center'>


                        <div className='w-[100px] h-[130px]  '>
                            <svg
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 -0.5 75 97" className='w-full'>
                                <motion.path
                                    // variants={logo}
                                    stroke="#ffffff"
                                    d="M32 1h42M32 2h42M32 3h42M32 4h42M32 5h42M32 6h42M32 7h42M32 8h42M32 9h42M32 10h42M32 11h42M32 12h42M50 13h24M50 14h24M50 15h24M50 16h24M50 17h24M50 18h24M50 19h24M50 20h24M50 21h24M50 22h24M50 23h24M50 24h24M50 25h24M50 26h24M50 27h24M50 28h24M50 29h24M50 30h24M50 31h24M50 32h24M50 33h24M50 34h24M50 35h24M50 36h24M50 37h24M50 38h24M50 39h24M50 40h24M50 41h24M50 42h24M50 43h24M50 44h24M50 45h24M50 46h24M50 47h24M50 48h24M50 49h24M50 50h24M50 51h24M50 52h24M50 53h24M50 54h24M50 55h24M50 56h24M50 57h24M50 58h24M50 59h24M50 60h24M2 61h24M50 61h24M2 62h24M50 62h24M2 63h24M50 63h24M2 64h24M50 64h24M2 65h24M50 65h24M2 66h24M50 66h24M2 67h24M50 67h24M2 68h24M50 68h24M2 69h24M50 69h24M2 70h24M50 70h24M2 71h24M50 71h24M2 72h24M50 72h24M2 73h24M50 73h24M2 74h24M50 74h24M2 75h24M50 75h24M2 76h24M50 76h24M2 77h24M50 77h24M2 78h24M50 78h24M20 79h42M20 80h42M20 81h42M20 82h42M20 83h42M20 84h42M20 85h42M20 86h42M20 87h42M20 88h42M20 89h42M20 90h42M20 91h42M20 92h42M20 93h42M20 94h42M20 95h42M20 96h42" />
                            </svg>
                        </div>

                    </motion.div>
                </motion.div>

            }


        </>


    )
}

export default Welcome