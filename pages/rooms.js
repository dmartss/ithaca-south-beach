import Page from 'components/page'
import Container from 'components/container'
import Rooms from 'components/rooms'
import fs from 'fs'
import path from 'path'

export default function RoomsPage({ images }) {
  return (
    <Page title="Rooms">
      <Container role="main" wide dotBackground>
        <Container center padding>
          <Rooms images={images} />
        </Container>
      </Container>
    </Page>
  )
}

export const getStaticProps = () => {
  const images = fs
    .readdirSync('./public/showcase-thumbnails/')
    .filter(file => path.extname(file) === '.jpg')
    .filter(file => {
      if (file.startsWith('cks -')) return file
      if (file.startsWith('dqs -')) return file
      if (file.startsWith('sk -')) return file
      if (file.startsWith('sq -')) return file
      else return
    })
  return {
    props: { images }
  }
}
