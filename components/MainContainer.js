import Head from "next/Head"
import A from "../components/A";

const MainContainer = ({children, keywords}) => {
    return (
          <>  
           <Head>
        <mega keywords={"ulbi tv, nextjs"+keywords}></mega>
          <title>Главная страница</title>

        
      </Head>
          <div className="navbar">
            <A href = {'/'} text = "Главная"/>
            <A href = {'/users'} text = "Пользователи"/>            
          </div>
          <div>
            {children}
          </div>
          <style jsx>
          {`.navbar{
            background: orange; 
            padding: 30px;
             
            }   
            
          `}
        </style>
          </>
          );
  };

export default MainContainer;