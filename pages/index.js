import SectionHeader from 'components/section-header'
import { NAME, TEXT } from 'lib/constants'
import Container from 'components/container'
import Section from 'components/section'
import Image from 'components/image'
import Page from 'components/page'

export default function Home() {
  return (
    <Page title="Home">
      <Container role="main" wide dotBackground aria-labelledby="welcome">
        <Container center padding>
          <Image
            shadow
            className="no-drag"
            oversize={false}
            alt="Room 1"
            src="/showcase/rooms/cks/5.jpg"
            width={3000 / 2}
            height={2000 / 2}
          />
          <SectionHeader id="welcome" title={`Welcome to ${NAME[0]}`} description={TEXT[0]} />
          <Section
            description={TEXT[1]}
            alt="Room 2"
            src="/showcase/rooms/sk/12.jpg"
            width={3000 / 6}
            height={2000 / 6}
          />
          <Section
            reverse
            description={TEXT[2]}
            alt="Room 3"
            src="/showcase/rooms/sk/3.jpg"
            width={3000 / 6}
            height={2000 / 6}
          />
        </Container>
      </Container>
    </Page>
  )
}
