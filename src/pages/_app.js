import '@/styles/globals.css'

export default function App({ Component, pageProps }) {

  return( 
    <>
      <Navbar/>
      <Component {...pageProps} />  
    </>
  )
  
}

function Navbar(){
  return(
  <nav class="font-sans flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-4 px-6 bg-white shadow sm:items-baseline w-full">
    <div class="mb-2 sm:mb-0">
      <a href="/home" class="text-2xl no-underline text-grey-darkest hover:text-blue-dark">Document Dispatch Register</a>
    </div>
    <div>
    <a href="/" class="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2">Main</a>
      <a href="/application" class="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2">Application</a>
      <a href="/login" class="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2">Login</a>
      <a href="/admin" class="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2">Admin</a>
    </div>
  </nav>
  )
  
}
