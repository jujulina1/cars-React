import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from '../Profile/Profile.module.css'
import { Link } from 'react-router-dom'
import { useAuthContext } from '../../../contexts/AuthContext'
import { getProfile } from '../../../services/AuthService';
import { chooseAvatar } from '../../../utils/chooseAvatar'

export default function Profile() {


    const context = useAuthContext();
    const navigate = useNavigate();
    console.log('PROFILE');

    const [user, setUser] = useState({
        username:'',
        email: '',
        gender: ''
    });
    const [avatar, setAvatar] = useState('')
   

   useEffect(() => {
    console.log('UseEfect');
      getProfile(context.accessToken)
      .then(data => {
        console.log(data);
        setUser(data);
        setAvatar(chooseAvatar(data.gender))
      })
   },[]);

   const onClick = (e) => {
       e.preventDefault();
       navigate(`/profile/edit/${context._id}`)
   }
    return (
        <section className='background'>
            <div className={styles.container}>

                <div className={styles.profile}><img src={avatar} alt="default user" />
                    <h2 style={{ fontWeight: 'bolder' }}>User Info:</h2>

                    <div className={styles.icons} >
                        <p style={{ fontWeight: '600' }}>Username: </p>
                        <p>{user.username}</p>
                    </div>
                    <div className={styles.icons}>
                        <p style={{ fontWeight: '600' }}>Email: </p>
                        <p>{user.email}</p>
                    </div>

                    <div className={styles.icons}>
                        <p style={{ fontWeight: '600' }}>Gender: </p>
                        <p>{user.gender}</p>
                    </div>

                    <div className={styles.listings_buttons} >
                        <Link type='submit' className={styles.button_list} onClick={onClick}>Edit</Link>

                    </div>

                </div>

            </div>
        </section>
    )
}