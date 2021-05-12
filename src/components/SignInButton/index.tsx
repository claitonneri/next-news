import { FaGoogle } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'
import { signIn, signOut, useSession } from 'next-auth/client'

import styles from './styles.module.scss'

export function SignInButton() {
    const [session] = useSession();

    return session ? (
        <button type="button" className={styles.signInButton} onClick={() => signOut()}>
            <img src={session.user.image} alt="Foto Perfil" />
            {session.user.name}
            <FiX color="#737380" className={styles.closeIcon} />
        </button>
    ) : (
        <button type="button" className={styles.signInButton} onClick={() => signIn('google')}>
            <FaGoogle color="#eba417" />Sign in with Google
        </button>
    )
}