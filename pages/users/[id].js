import {useRouter} from "next/router"
import styles from '../../styles/user.module.scss';

import MainContainer from "../../components/MainContainer"

export default function User({user}) {
    const {query} = useRouter()
      

    return (
        <MainContainer keywords = {"user.name"}>
<div className={styles.user}>
            <h1>Пользователь с id {query.id}</h1>
        </div>
        </MainContainer>
        
    )
}

export async function getServerSideProps({params}) {
    console.log(params)
    return {
      props: {}, // will be passed to the page component as props
    }
  }