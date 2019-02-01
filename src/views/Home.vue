<template>
  <main>

    <VueParticles />

    <TeaserSectionCmp title="Unsere Leistungen" :items="service_items" />

    <ParallaxWithText 
      text="Fragen kost nix"
      image="https://firebasestorage.googleapis.com/v0/b/computerschmiede-jenbach.appspot.com/o/parallax%2Fhome_bg_2.png?alt=media&token=b211dee8-22cb-4dac-83c2-43080dadf911"
      btn_text="Kontakt"
      btn_link="kontakt" />

    <TeaserSectionCmp title="Unsere Produkte" :items="our_products" />

    <Parallax image="https://firebasestorage.googleapis.com/v0/b/computerschmiede-jenbach.appspot.com/o/home%2FDSC_64311.jpg?alt=media&token=2704946e-cbf9-4af2-a4bf-31cb5ed7c3da " />
      
  </main>
</template>

<script>
  import VueParticles from '@/components/Shared/Particles'
  import Parallax from '@/components/Shared/Parallax'
  import TeaserSectionCmp from '@/components/Shared/TeaserSectionCmp'
  import ParallaxWithText from '@/components/Shared/ParallaxWithText'

  export default {
    name: 'Home',
    metaInfo: {
      title: 'Home',
      titleTemplate: '%s | Computerschmiede Jenbach'
    },
    components: {
      VueParticles,
      Parallax,
      TeaserSectionCmp,
      ParallaxWithText
    },
    data () {
      return {
        service_items: [
          { 
            icon: 'https://firebasestorage.googleapis.com/v0/b/computerschmiede-jenbach.appspot.com/o/icons%2Fberatung.jpg?alt=media&token=741071d3-6c7b-438c-933e-2cbe9f292fdb', 
            title: 'Beratung', 
            text: 'Hier ist der Laie gut aufgehoben und der Profi wird auf Augenhöhe verstanden. Zusammen finden wir die Lösung für Ihre individuellen Bedürfnisse! Ehrlich und Unabhängig!'
          },
          {
            icon: 'https://firebasestorage.googleapis.com/v0/b/computerschmiede-jenbach.appspot.com/o/icons%2Freparatur.jpg?alt=media&token=feeb5fe7-2300-49bd-bcb7-e2886156b66c',
            title: 'Reparatur',
            text: 'Meistens ist die Reparatur eines defekten Geräts sinnvoller und günstiger, als ein Neukauf. Miteinander gegen das vorzeitige Wegwerfen!'
          },
          {
            icon: 'https://firebasestorage.googleapis.com/v0/b/computerschmiede-jenbach.appspot.com/o/icons%2Fsonderzeug.jpg?alt=media&token=22aa2860-a906-416b-82fb-47063de83917',
            title: 'Anfertigungen',
            text: 'Mit der Auswahl an optimal aufeinander abgestimmten, hochwertigen Komponenten bieten wir PC-Sonderfertigungen nach Ihren Vorstellungen an.'
          },
          {
            icon: 'https://firebasestorage.googleapis.com/v0/b/computerschmiede-jenbach.appspot.com/o/icons%2Fsoftwareberatung.jpg?alt=media&token=eafd5a36-fd46-4bb9-8492-25a7eaf3048a',
            title: 'Software-Service',
            text: 'Computer wieder flott machen – Windows neu aufsetzen – Software entrümpeln – Festplatte bereinigen – Virenschutz und Datensicherung einrichten – Expressbestellungen – Sonderanfertigungen – Umbauten – Upgrades – und noch viel mehr!'
          },
          {
            icon: 'https://firebasestorage.googleapis.com/v0/b/computerschmiede-jenbach.appspot.com/o/icons%2Fservice.jpg?alt=media&token=db260170-6e9b-4cee-98bb-32721282a20a',
            title: 'Abholung und Lieferung',
            text: 'Sie wollen Ihre Produkte geliefert bekommen oder wollen Ihr Gerät zum Service abholen lassen? Das lässt sich unkompliziert organisieren!'
          },
          {
            icon: 'https://firebasestorage.googleapis.com/v0/b/computerschmiede-jenbach.appspot.com/o/icons%2Fsuchen-1.jpg?alt=media&token=f935e0d2-88fa-4cf2-ae0e-6cf5d32487d3',
            title: 'Datenrettung',
            text: 'Ihre Daten können bei uns zu über 95 % vollkommen gerettet werden. Wir analysieren Ihre Festplatten, Speicherkarten und USB-Sticks und retten Ihre Daten, wenn möglich selbst. In den schwierigsten Fällen stehen wir in Verbindung mit einem Datenrettungslabor.'
          }
        ],
        our_products: [
          { icon: 'https://firebasestorage.googleapis.com/v0/b/computerschmiede-jenbach.appspot.com/o/icons%2Fbirne.png?alt=media&token=50aae886-7cb5-4604-8fb3-f8194a9da4c8', title: 'Batterien', text: 'Batterien, Netzteile, Ladegeräte, Ersatzakkus Kabel und Adapter für Strom, Bild, Ton, Daten, etc.' },
          { icon: 'https://firebasestorage.googleapis.com/v0/b/computerschmiede-jenbach.appspot.com/o/icons%2Fmonitore.png?alt=media&token=14b31fa4-3632-4e07-b8eb-535d4b598eb0', title: 'Computer', text: 'Computer – Standard-Systeme oder individuell konfiguriert! Laptops – selbst konfiguriert bzw. Markengeräte. Tablets, Monitore, Lautsprechersysteme,…' },
          { icon: 'https://firebasestorage.googleapis.com/v0/b/computerschmiede-jenbach.appspot.com/o/icons%2Ffarben-1.png?alt=media&token=5a858986-fce5-474f-ac5b-e6f720eb4824', title: 'Farbe', text: 'Tinten/Laser/LED/Gel/3D-Drucker, Tintenpatronen, Tonerkartuschen, Laserdrucker-Ersatzteile, Kopierpapier und spezielle Papiere Druckservice (bis A4, max. 10.000 Blatt, ca. € 0,10/Seite, je nach Deckung)' },
          { icon: 'https://firebasestorage.googleapis.com/v0/b/computerschmiede-jenbach.appspot.com/o/icons%2Fgame.png?alt=media&token=a386078d-67e7-4c95-8be3-eb5171b39ffd', title: 'Gaming', text: 'Gaming-Equipment, wie z.B. spezielle Gaming-Mäuse und passende Mauspads, Tastaturen mit Sondertasten und Beleuchtung, Headsets mit erweiterten Eigenschaften. Controller und Joysticks, Gaming-Chairs,…' },
          { icon: 'https://firebasestorage.googleapis.com/v0/b/computerschmiede-jenbach.appspot.com/o/icons%2F959-Keyboard-1.png?alt=media&token=a309f5c7-df82-4c5c-b463-6e797f34fa09', title: 'Zubehör', text: 'Tastaturen, Mäuse, Webcams, Headsets, WLAN- und Bluetooth Adapter, USB-Hubs, Reinigungsmittel und vieles mehr …' },
          { icon: 'https://firebasestorage.googleapis.com/v0/b/computerschmiede-jenbach.appspot.com/o/icons%2F19-SD-Card.png?alt=media&token=72f62f09-f383-469a-9aec-c96a7d2083b2', title: 'Speichermedien', text: 'USB Speicherkarte, Speicherplatten oder externe Festplatten.' }
        ]
      }
    }
  }
</script>
