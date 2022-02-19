import Dynamic from 'next/dynamic'
import Login from './login'

const ModalView = Dynamic(() => import('./login'), { ssr: false })

export default function Index() {
    return (
      <div>
          <ModalView/>
      </div>
    );
  }