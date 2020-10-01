<template>
  <main id="about">
    <Navicon :type="'navicon'" />
    <h1>Vårt Kaffe</h1>
    <p class="bold">
      <b />Pumpkin spice mug, barista cup, sit macchiato, kopi-luwak, doppio,
      grounds dripper, crema, strong whipped, variety extra iced id lungo half
      and half mazagran. Pumpkin spice.

      <b />
    </p>
    <p>
      Que dark fair trade, spoon decaffeinated, barista wings whipped, as rich
      aftertaste, con panna milk black, arabica white rich beans single shot
      extra affogato. So affogato macchiato sit extraction instant grinder
      seasonal organic, turkish single shot, single origin, and robusta strong
      to go so dripper. Viennese froth, grounds caramelization skinny aromatic
      cup kopi-luwak, fair trade flavour, frappuccino medium, café au lait
      flavour cultivar ut bar instant kopi-luwak.
    </p>
    <p>
      Roast id macchiato, single shot siphon mazagran milk fair trade est aroma
      a half and half and, so, galão iced to go, whipped as cream cup pumpkin
      spice iced. At extra, rich grinder, brewed to go, steamed half and half
      at, that, percolator macchiato trifecta and body as arabica dripper. In
      galão black java milk sit trifecta, robusta, acerbic café au lait instant
      shop latte. Seasonal bar shop filter aroma id, crema, affogato viennese
      cultivar aftertaste, seasonal, percolator cream black, galão flavour, milk
      aromatic turkish skinny crema.
    </p>
    <footer>
      <img src="./../assets/images/EvaCortado.jpg" alt="EvaCortado" />
      <h3 class="name">Eva Cortado</h3>
      <p class="role">D & Grundare</p>
    </footer>
  </main>
</template>

<script>
import Navicon from "@/components/Navicon";
export default {
  name: "About",
  components: {
    Navicon,
  },
};
</script>

<style lang = "scss">
@import "./../scss/variables";
body {
  background: #f3e4e1;
  #about {
    .bold {
      -webkit-text-stroke: medium;
    }

    p {
       text-align: justify;
    }
    /*aligning footer in th middle*/
    footer {
      flex-direction: column;
      @include flex-center;
      img {
        border-radius: 999rem;
      }
    }
    h3 {
      @include reset-mp;
      font-size: 1.4rem;
    }
    .role {
      @include reset-mp;
      font-size: 0.8rem;
    }
  }
}
</style>