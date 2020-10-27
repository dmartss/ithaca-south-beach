import { SPECIALS, DESCRIPTIONS, TEXT } from 'lib/constants'
import SpecialsSection from 'components/specials-section'
import SectionHeader from 'components/section-header'
import Container from 'components/container'
import Page from 'components/page'

export default function Specials() {
  return (
    <Page title="Specials">
      <Container role="main" wide dotBackground aria-labelledby="specials">
        <Container center padding>
          <SectionHeader
            id="specials"
            title="Specials"
            description="Attitude-Free Pricing & Packages"
          />
          <div className="paragraph">
            <p className="fs">{TEXT[0]}</p>
            <p className="fs">{TEXT[1]}</p>
            <p className="fs">{TEXT[2]}</p>
          </div>
          <SpecialsSection
            special={SPECIALS[0]}
            description={DESCRIPTIONS[0]}
            alt="Room 2"
            src="/showcase-thumbnails/rooms/cks/7.jpg"
          />
          <SpecialsSection
            reverse
            special={SPECIALS[1]}
            description={DESCRIPTIONS[1]}
            alt="Room 3"
            src="/showcase-thumbnails/rooms/sk/3.jpg"
          />
          <SpecialsSection
            special={SPECIALS[2]}
            description={DESCRIPTIONS[2]}
            alt="Room 3"
            src="/showcase-thumbnails/rooms/sk/10.jpg"
          />
        </Container>
      </Container>
    </Page>
  )
}
