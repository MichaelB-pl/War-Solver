<template>
  <v-container>
    <span>Solver</span>
    <v-expansion-panel v-model="panel">
      <v-expansion-panel-content v-for="suit in cardSuits" :key="suit">
        <div slot="header">{{ suit }}</div>
        <v-layout class="row wrap">
          <v-flex
            xs6
            sm4
            md3
            lg2
            xl1
            v-for="(card, i) in getCardsBySuit(suit)"
            :key="`${card.suit}_${card.value}`"
          >
            <v-card flat>
              <v-divider v-if="canDisplayDivider(i)" class="mx-3"/>
              <v-card-title
                :class="`display-4 justify-center ${getCardColor(card.suit)}--text`"
              >{{ getCardUnicode(card) }}</v-card-title>
              <v-card-text class="text-xs-center">{{ card.value }}</v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";

import {
  Card,
  CardValue,
  getCardsDeck,
  getCardSuits,
  getCardUnicode,
  getCardColor
} from "@/models/Card";

export default Vue.extend({
  data() {
    return {
      panel: [false, false, false, false],
      cards: [] as Card[],
      cardSuits: getCardSuits(),
      player1Deck: [] as Card[],
      player2Deck: [] as Card[]
    };
  },
  methods: {
    getCardsBySuit(suit: string) {
      return this.cards.filter(card => card.suit === suit);
    },

    getCardUnicode: (card: Card) => getCardUnicode(card),
    getCardColor: (cardSuit: string) => getCardColor(cardSuit),

    canDisplayDivider(index: number): boolean {
      if (this.$vuetify.breakpoint.xs) {
        return index > 1;
      } else if (this.$vuetify.breakpoint.sm) {
        return index > 2;
      } else if (this.$vuetify.breakpoint.md) {
        return index > 3;
      } else if (this.$vuetify.breakpoint.lg) {
        return index > 5;
      } else if (this.$vuetify.breakpoint.lx) {
        return index > 11;
      }
      return true;
    }
  },
  mounted() {
    this.cards = getCardsDeck(CardValue.TWO);
  }
});
</script>