import { ref } from 'vue';
import { firebaseAuth } from '../firebase/config'

const error = ref(null)

const logout = async () => {
    error.value = null

    try {
        await firebaseAuth.signOut()
    } catch (e) {
        console.log(e.message);
        error.value = e.message
    }
}

const LogOut = () => {
    return { logout, error }
}

export default LogOut