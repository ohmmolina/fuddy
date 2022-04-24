import { defineStore } from "pinia";
import { auth } from "../firebaseConfig"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from "firebase/auth";
import router from '../router'

export const useUserStore = defineStore("user", {
   state: () => ({
       userData: {},
       loadingUser: false,
       loading: false,
   }),
   actions: {
        async registerUser(email, password) {
            this.loadingUser = true
            try {
                const { user } = await createUserWithEmailAndPassword(
                    auth,
                    email,
                    password
                );
                this.userData = {email:user.email, uid: user.uid}
                router.push('/')
            } catch (error) {
                if(error.message === 'Firebase: Error (auth/email-already-in-use).'){
                    return('user-exists')
                } else{
                    console.log(error)
                }
            }finally{
                this.loadingUser = false
            }
        },
        async loginUser(email, password) {
            this.loadingUser = true
            try {
                const { user } = await signInWithEmailAndPassword(auth, email, password);
                this.userData = {email:user.email, uid:user.uid};
                router.push('/');
            } catch (error) {
                console.log(error.code);
                switch (error.code){
                    case 'auth/wrong-password':
                        return 'wrong-password';
                    
                    case 'auth/too-many-requests':
                        return 'try-later'
                    
                    case 'auth/user-not-found':
                        return 'no-user'
                    
                    default:
                        console.log(error.code)
                    
                }
            } finally {
                this.loadingUser = false
            }
        },
        async logoutUser(){
            try {
                await signOut(auth);
                this.userData = null;
                router.push('/login');
            } catch (error) {
                console.log(error);
            }
        }
    }
})