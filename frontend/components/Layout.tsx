import styles from '../styles/Layout.module.css'
import Nav from './Nav'

// figure out what type the props should actually be
const Layout: React.FC<any> = (props) => {
  //_app.tsx is passing in an object with a .children property. .children contains the active page(?)
  return (
    <>
      <Nav />
      <div className="flex flex-col">
        <main className="mx-auto">{props.children}</main>
      </div>
    </>
  )
}

export default Layout

// another way to write this; tbd if it actually makes a difference
// export default function Layout({ children }: any) {
//   return (
//     <div className={styles.container}>
//       <main className={styles.main}>{children}</main>
//     </div>
//   )
// }
