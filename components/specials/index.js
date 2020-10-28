import { SPECIALS, DESCRIPTIONS, TEXT } from 'lib/constants'
import SpecialsSection from './specials-section'
import SectionHeader from 'components/section-header'
import styles from './specials.module.css'

export default function Specials() {
  return (
    <>
      <SectionHeader
        id="specials"
        title="Specials"
        description="Attitude-Free Pricing & Packages"
      />
      <div className={styles.paragraph}>
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
    </>
  )
}
