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

      <section>
        <Box
          sx={{
            position: 'relative',
            zIndex: 1,
            backgroundImage: {
              xs: 'linear-gradient(180deg, #5D080D 0%, #2C0B0E 100%)',
              sm: 'linear-gradient(180deg, #5D080D 0%, #2C0B0E 100%)',
              md: 'linear-gradient(180deg, #5D080D 0%, #2C0B0E 100%)',
              lg: "url('/catas3.png')",
            },
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center top',
            backgroundSize: {
              xs: 'cover',
              sm: 'cover',
              md: 'cover',
              lg: '100% auto',
            },
            minHeight: { xs: 'auto', sm: 'auto', md: '600px', lg: '600px', xl: '600px' },
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
            zIndex: 2,
            backgroundColor: '#fff',
            minHeight: { xs: 'auto', md: '800px', lg: '1006px', xl: '1006px' },
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {/* Parte superior con fondo rojo y texto */}
          <Box
            sx={{
              backgroundImage: {
                xs: 'linear-gradient(180deg, #5D080D 0%, #5D080D 100%)',
                sm: 'linear-gradient(180deg, #5D080D 0%, #5D080D 100%)',
                md: 'linear-gradient(180deg, #5D080D 0%, #5D080D 100%)',
                lg: "url('/cestaT1.png')",
              },
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center top',
              minHeight: { xs: '200px', sm: '250px', md: '250px', lg: '250px' },
              width: '100%',
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'center',
              pt: { xs: 4, md: 6 },
            }}
          >
            <CestaSection />
          </Box>

          <Box
            sx={{
              backgroundImage: "url('/botcesta.png')",
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center top',
              backgroundSize: '100% auto',
              flex: 1,
              width: '100%',
              '&::before': {
                content: '""',
                position: 'flex',
                top: 0,
                left: 0,
                height: '100%',
                width: '100px',
                background: 'linear-gradient(to right, rgba(0, 0, 0, 0.15), transparent)',
                pointerEvents: 'none',
                zIndex: 1,
              },
              '&::after': {
                content: '""',
                position: 'absolute',
                top: 0,
                right: 0,
                height: '100%',
                width: '100px',
                background: 'linear-gradient(to left, rgba(0, 0, 0, 0.15), transparent)',
                pointerEvents: 'none',
                zIndex: 1,
              },
            }}
          >
            <CestaNavideniaSection />
          </Box>
        </Box>
      </section>

      <section>
        <Box
          sx={{
            position: 'relative',
            zIndex: 3,
            backgroundColor: '#fff',
            display: 'flex',
            flexDirection: 'column',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              height: '100%',
              width: '100px',
              background: 'linear-gradient(to right, rgba(0, 0, 0, 0.15), transparent)',
              pointerEvents: 'none',
              zIndex: 1,
            },
            '&::after': {
              content: '""',
              position: 'absolute',
              top: 0,
              right: 0,
              height: '100%',
              width: '100px',
              background: 'linear-gradient(to left, rgba(0, 0, 0, 0.15), transparent)',
              pointerEvents: 'none',
              zIndex: 1,
            },
          }}
        >
          {/* Parte superior con fondo rojo para LoteSection */}
          <Box
            sx={{
              backgroundImage: {
                xs: 'linear-gradient(180deg, #5D080D 0%, #5D080D 100%)',
                sm: 'linear-gradient(180deg, #5D080D 0%, #5D080D 100%)',
                md: 'linear-gradient(180deg, #5D080D 0%, #5D080D 100%)',
                lg: "url('/packTop.png')",
              },
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center top',
              backgroundSize: '100% auto',
              minHeight: {
                xs: '200px',
                sm: '250px',
                md: '250px',
                lg: '200px'
              },
              width: '100%',
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'center',
              pt: { xs: 4, md: 6 },
            }}
          >
            <LoteSection />
          </Box>

          {/* Parte media con guirnaldas para PackSection */}
          <Box
            sx={{
              backgroundImage: "url('/lotesArribaT.png')",
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center top',
              backgroundSize: '100% auto',
              width: '100%',
              flex: 1,
              position: 'relative',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                height: '100%',
                width: '100px',
                background: 'linear-gradient(to right, rgba(0, 0, 0, 0.15), transparent)',
                pointerEvents: 'none',
                zIndex: 1,
              },
              '&::after': {
                content: '""',
                position: 'absolute',
                top: 0,
                right: 0,
                height: '100%',
                width: '100px',
                background: 'linear-gradient(to left, rgba(0, 0, 0, 0.15), transparent)',
                pointerEvents: 'none',
                zIndex: 1,
              },
            }}
          >
            <PackSection />
          </Box>
          <Box
            sx={{
              width: '100%',
              height: { xs: 200, sm: 250, md: 300, lg: 400 },
              backgroundImage: "url('/lotesAbajo.png')",
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center bottom',
              backgroundSize: '100% auto',
              position: 'relative',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                height: '100%',
                width: '100px',
                background: 'linear-gradient(to right, rgba(0, 0, 0, 0.15), transparent)',
                pointerEvents: 'none',
                zIndex: 1,
              },
              '&::after': {
                content: '""',
                position: 'absolute',
                top: 0,
                right: 0,
                height: '100%',
                width: '100px',
                background: 'linear-gradient(to left, rgba(0, 0, 0, 0.15), transparent)',
                pointerEvents: 'none',
                zIndex: 1,
              },
            }}
          />
        </Box>
      </section>

      <section>
        <Box
          sx={{
            backgroundImage: {
              xs: 'linear-gradient(180deg, #5D080D 0%, #5D080D 100%)',
              sm: 'linear-gradient(180deg, #5D080D 0%, #5D080D 100%)',
              md: 'linear-gradient(180deg, #5D080D 0%, #5D080D 100%)',
              lg: "url('/cestatopT.png')",
            },
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center top',
            minHeight: { xs: '200px', sm: '250px', md: '250px', lg: '250px' },
            width: '100%',
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'center',
            pt: { xs: 4, md: 6 },
          }}
        >
          <CustomSection />

        </Box>
        <Box
          sx={{
            position: 'relative',
            zIndex: 5,
            mt: { xs: -4, md: -6 },
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center ',
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
