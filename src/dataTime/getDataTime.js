import {store} from "../config/firebase"

export const getDataTime =()=>{

    store.collection("Times").get().then((snapshot)=>{
        return(
            snapshot.forEach((doc)=>{
                console.log(doc.data())
                
            })
        )
        }
    )
}
  