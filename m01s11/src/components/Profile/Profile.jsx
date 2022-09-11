import { usePerfil } from "../../context/Perfil/usePerfil"
import PropTypes from 'prop-types'

export const Profile = ( {profile}) => {

    const [handleFollow] = usePerfil()

    return(
        <>
        
            <div >
                <p>{profile.nome}</p>
                <button onClick={() => handleFollow(profile.id)}>{
                    profile.seguindo? 'Seguindo':'Seguir'}
                </button>
            </div>
    
    
    </>

    )
    
}

Profile.propTypes = {
    profile: PropTypes.object
}