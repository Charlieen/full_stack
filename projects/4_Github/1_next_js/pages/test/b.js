import Comp from '../../components/comp'
import {withRouter} from 'next/router'

const A = ({router })=>{
    return (
        <div> 
        <Comp children={['b',2,2,9]}>{router.query.id}</Comp>
        </div>
    )
}

export default withRouter(A)