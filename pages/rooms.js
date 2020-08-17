import Container from 'components/container'
import Image from 'components/image'
import Page from 'components/page'
import rooms from 'lib/rooms'

const imgWidth = 300
const imgHeight = 200

export default function Rooms() {
  return (
    <Page title="Rooms">
      <Container role="main" wide dotBackground>
        <Container center padding>
          {rooms.map(
            ({ name, type, occupancy, quantity, description, images }) =>
              description && (
                <div className="room" key={name}>
                  <h3 className="fp fw3">{name}</h3>
                  <div className="info fs">
                    <h5 className="fw3">Type: {type}</h5>
                    <h5 className="fw3">Occupancy: {occupancy}</h5>
                    <h5 className="fw3"># of Rooms: {quantity}</h5>
                  </div>
                  <h5 className="fp fw4">{description}</h5>
                  <div className="images">
                    {images.map(({ src, alt }) => (
                      <Image
                        key={src}
                        className="no-drag"
                        margin={10}
                        shadow
                        src={src}
                        alt={alt}
                        width={imgWidth}
                        height={imgHeight}
                        layout="responsive"
                      />
                    ))}
                  </div>
                  <style jsx>{`
                    .room {
                      padding-bottom: var(--gap-double);
                    }
                    .room:not(:first-of-type) {
                      border-top: 1px solid var(--accents-3);
                      padding-top: var(--gap-double);
                    }
                    .info {
                      display: flex;
                      justify-content: space-around;
                      align-items: center;
                    }
                    .info > h5 {
                      flex: 1;
                    }

                    .images {
                      display: grid;
                      grid-template-columns: ${images.length >= 3 ? 'repeat(3, 1fr)' : '1fr 1fr'};
                    }

                    .images > :global(figure):nth-last-child(1):nth-child(odd) {
                      grid-column: 2;
                    }

                    @media (max-width: 960px) {
                      .images {
                        grid-template-columns: 1fr;
                      }
                      .images > :global(figure):nth-last-child(1):nth-child(odd) {
                        grid-column: 1;
                      }
                    }
                  `}</style>
                </div>
              )
          )}
        </Container>
      </Container>
    </Page>
  )
}
