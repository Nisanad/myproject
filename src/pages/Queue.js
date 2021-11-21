import React, { useState } from 'react';
import DropDura1 from '../component/DropDura1';
import Duration1 from '../component/Duration';



export default function Queue() {


    const [state, setState] = useState({
        time: null,
        range: 0
    })


    return (
        <div>
            {
                state.range > 0 ? <DropDura1 state ={state}  /> : <Duration1 setState={setState} />
            }

            {state.range > 0 ? <button class="btn btn-outline-secondary" onClick={() => setState({ range: 0 })}>ย้อนกลับ</button> : null}
            
        </div>
    )

}