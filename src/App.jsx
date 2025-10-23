import { useState } from 'react'
import './global.css'
import {
  HeroSection,
  PackSection,
  WineSection,
  CestaSection,
  LoteSection,
  Customization,
  CustomSection,
  CestaNavideniaSection,
  Footer
} from './components'
import { Box } from '@mui/material'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section>
        <HeroSection />
      </section>

      <section >
        <Box
          sx={{
            position: 'relative',
            zIndex: 1,
            backgroundImage: "url('/catas3.png')",
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center top',
            
            backgroundSize: '100% auto',
            zIndex: 10,
            minHeight: { xs: 'auto', md: '600px', lg: '600px', xl: '600px' },
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <WineSection />
        </Box>
      </section>

      <section>
        <Box
          sx={{
            position: 'relative',
            zIndex: 1,
            backgroundImage: "url('/cestaT1.png')",
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center top',
            backgroundSize: '100% auto',
            backgroundColor: '#fff',
            minHeight: { xs: 'auto', md: '800px', lg: '1006px', xl: '1006px' },
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <CestaSection />
          <CestaNavideniaSection />
        </Box>
      </section>

      <section>
        <Box
          sx={{
            position: 'relative',
            zIndex: 1,
            backgroundImage: "url('/lotesArriba.png')",
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center top',
            backgroundSize: '100% auto',
            backgroundColor: '#fff',
            minHeight: { xs: 'auto', md: '800px', lg: '1006px', xl: '1006px' },
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <LoteSection />
          <PackSection />
          {/* Imagen inferior (1920x400) */}
          <Box
            sx={{
              width: '100%',
              height: { xs: 300, md: 400 }, // altura adaptable
              backgroundImage: "url('/lotesAbajo.png')", // ⬅️ tu nueva imagen
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center bottom',
              backgroundSize: '100% auto',
              backgroundColor: '#fff',
            }}
          />
        </Box >

      </section>


      <section>
        <Box
          sx={{
            position: 'relative',
            zIndex: 1,
            backgroundImage: "url('/lastSeccion.png')",
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center -43px',

            backgroundSize: '100% auto',
            backgroundColor: '#fff',
            minHeight: { xs: 'auto', md: '400', lg: '400px', xl: '400px' },
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <CustomSection />

        </Box>
        <Box
          sx={{
            position: 'relative',
            zIndex: 1,
            backgroundImage: "url('/lastSeccion.png')",
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center -490px',

            backgroundSize: '100% auto',
            backgroundColor: '#fff',
            minHeight: { xs: 'auto', md: '400', lg: '400px', xl: '400px' },
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <Customization />
        </Box>
      </section>
      <section>
        <Footer />
      </section>
    </>
  )
}

export default App
