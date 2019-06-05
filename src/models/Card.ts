export function getCardsDeck(startNumber: CardValue): Card[] {
    const values = Object.keys(CardValue).filter(value => isNaN(Number(value)));
    const desiredValues = values.slice(startNumber);

    const colors = Object.keys(CardColor).filter(color => isNaN(Number(color)));

    let cards: Card[] = [];

    for (let i = 0; i < colors.length; i++) {
        const color = colors[i];
        for (let i = 0; i < desiredValues.length; i++) {
            const value = desiredValues[i];

            const card = new Card(value, color);
            cards.push(card);
        }
    }

    return cards;
}

export class Card {
    value: string;
    color: string;

    constructor(value: string, color: string) {
        this.value = value;
        this.color = color;
    }
}

export enum CardValue {
    TWO,
    THREE,
    FOUR,
    FIVE,
    SIX,
    SEVEN,
    EIGHT,
    NINE,
    TEN,
    JACK,
    QUEEN,
    KING,
    ACE,
}

export enum CardColor {
    HEART,
    SPADE,
    DIAMOND,
    CLUB,
}