
import SideNav from '../ui/dashboard/sidenav'

export default function Layout({ children }) {
  return (
    <div style={{display:'flex'}}>
      <SideNav />
      <div style={{padding:40, flex:1}}>
        {children}
      </div>
    </div>
  )
}
