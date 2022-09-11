import { Profile } from "../../components/Profile"
import { usePerfil } from "../../context/Perfil/usePerfil"



export const Profiles = () => {

    
    const [perfil, handleFollow] = usePerfil()

    return(
        <>
        {perfil.map((p) => (
            <Profile key={p.id} profile={p} />

        ))}
    
    </>

    )

}