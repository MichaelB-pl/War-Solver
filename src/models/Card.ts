export function getCardsDeck(lowestCardValue: CardValue): Card[] {
    const values = getCardValues();
    const index = values.indexOf(lowestCardValue);

    const desiredValues = values.slice(index);
    const suits = getCardSuits();

    let cards: Card[] = [];

    for (let i = 0; i < suits.length; i++) {
        const suit = suits[i];
        for (let i = 0; i < desiredValues.length; i++) {
            const value = desiredValues[i];

            const card = new Card(value, suit);
            cards.push(card);
        }
    }

    return cards;
}

export function getCardSuits(): string[] {
    return Object.keys(CardSuit).filter(suit => isNaN(Number(suit)));
}

export function getCardValues(): string[] {
    return Object.keys(CardValue).filter(value => isNaN(Number(value)));
}

export function getCardUnicode(card: Card): string {
    const index = getSuitStartIndex(card.suit) + getCardLetterIndex(card.value);
    return cards[index];
}

const cards = [
    '\u{1F0B2}',
    '\u{1F0B3}',
    '\u{1F0B4}',
    '\u{1F0B5}',
    '\u{1F0B6}',
    '\u{1F0B7}',
    '\u{1F0B8}',
    '\u{1F0B9}',
    '\u{1F0BA}',
    '\u{1F0BB}',
    '\u{1F0BD}',
    '\u{1F0BE}',
    '\u{1F0B1}',
    '\u{1F0A2}',
    '\u{1F0A3}',
    '\u{1F0A4}',
    '\u{1F0A5}',
    '\u{1F0A6}',
    '\u{1F0A7}',
    '\u{1F0A8}',
    '\u{1F0A9}',
    '\u{1F0AA}',
    '\u{1F0AB}',
    '\u{1F0AD}',
    '\u{1F0AE}',
    '\u{1F0A1}',
    '\u{1F0C2}',
    '\u{1F0C3}',
    '\u{1F0C4}',
    '\u{1F0C5}',
    '\u{1F0C6}',
    '\u{1F0C7}',
    '\u{1F0C8}',
    '\u{1F0C9}',
    '\u{1F0CA}',
    '\u{1F0CB}',
    '\u{1F0CD}',
    '\u{1F0CE}',
    '\u{1F0C1}',
    '\u{1F0D2}',
    '\u{1F0D3}',
    '\u{1F0D4}',
    '\u{1F0D5}',
    '\u{1F0D6}',
    '\u{1F0D7}',
    '\u{1F0D8}',
    '\u{1F0D9}',
    '\u{1F0DA}',
    '\u{1F0DB}',
    '\u{1F0DD}',
    '\u{1F0DE}',
    '\u{1F0D1}',
];

const getSuitStartIndex = (cardSuit: string): number => {
    const suitDeckSize = cards.length / 4;

    switch (cardSuit) {
        case CardSuit.HEARTS:
            return 0;
        case CardSuit.SPADES:
            return 1 * suitDeckSize;
        case CardSuit.DIAMONDS:
            return 2 * suitDeckSize;
        case CardSuit.CLUBS:
            return 3 * suitDeckSize;
    }
    return 0;
}

const getCardLetterIndex = (cardValue: string): number => {
    switch (cardValue) {
        case CardValue.TWO:
            return 0;
        case CardValue.THREE:
            return 1;
        case CardValue.FOUR:
            return 2;
        case CardValue.FIVE:
            return 3;
        case CardValue.SIX:
            return 4;
        case CardValue.SEVEN:
            return 5;
        case CardValue.EIGHT:
            return 6;
        case CardValue.NINE:
            return 7;
        case CardValue.TEN:
            return 8;
        case CardValue.JACK:
            return 9;
        case CardValue.QUEEN:
            return 10;
        case CardValue.KING:
            return 11;
        case CardValue.ACE:
            return 12;
    }
    return 0;
}

export function getCardColor(cardSuit: string): string {
    if (cardSuit === CardSuit.HEARTS || cardSuit === CardSuit.DIAMONDS)
        return 'red';
    return 'black';
}


export class Card {
    value: string;
    suit: string;

    constructor(value: string, suit: string) {
        this.value = value;
        this.suit = suit;
    }
}

export enum CardValue {
    TWO = 'TWO',
    THREE = 'THREE',
    FOUR = 'FOUR',
    FIVE = 'FIVE',
    SIX = 'SIX',
    SEVEN = 'SEVEN',
    EIGHT = 'EIGHT',
    NINE = 'NINE',
    TEN = 'TEN',
    JACK = 'JACK',
    QUEEN = 'QUEEN',
    KING = 'KING',
    ACE = 'ACE',
}

export enum CardSuit {
    HEARTS = 'HEARTS',
    SPADES = 'SPADES',
    DIAMONDS = 'DIAMONDS',
    CLUBS = 'CLUBS',
}