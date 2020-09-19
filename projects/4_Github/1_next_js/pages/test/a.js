
import dynamic from 'next/dynamic'
import getConfig from 'next/config'
import Link from 'next/link'
import Head from 'next/head'
import {withRouter} from 'next/router'
import styled from 'styled-components'
// import moment from 'moment'
const {serverRuntimeConfig,publicRuntimeConfig} = getConfig()
const LazyComp = dynamic(import('../../components/comp_lazy'))

const Title = styled.h1`
color:blue;
font-size:40px;
`

const B= ({router,name,time})=>{
    console.log(publicRuntimeConfig,serverRuntimeConfig)
    return (
        <>
        <Title>This is Title {time}{process.env.customKey}</Title>
        <LazyComp/>
        <div> {router.query.id}
        <Link href="#aaa">
            <a>name is :{name}</a>
        </Link>    
        </div>
       
        </>
      
)} 



B.getInitialProps = async (ctx)=>{
    const moment = await import('moment') // webpack offer import function
    const promise = new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve({
                name:'charlie',
                time: moment.default(Date.now()-60*1000).fromNow()
            })
        }, 2000);
    })
    return await promise
}


export default withRouter(B)
