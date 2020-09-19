import Link from 'next/link'
import { Button } from 'antd'

export default ({children})=>(
   <>
      <header>
            <Link href="/test/a?id=1" as="/a/1">   
            <Button>to A</Button>      
            </Link>
            <Link href="/test/b" >   
            <Button>to B</Button>      
            </Link>
            <Link href="/test/c" >   
            <Button>to C</Button>      
            </Link>
        </header>
       {children}
   </>
   )
  
