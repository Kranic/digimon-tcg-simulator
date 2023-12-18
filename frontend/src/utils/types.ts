export type CardType = {
    uniqueCardNumber: string,
    name: string,
    imgUrl: string,
    cardType: string,
    color: string[],
    attribute?: string,
    cardNumber: string,
    digivolveConditions?: DigivolveCondition[],
    specialDigivolve?: string,
    stage?: string,
    digiType?: string[],
    dp?: number,
    playCost?: number,
    level?: number,
    mainEffect?: string,
    inheritedEffect?: string,
    aceEffect?: string,
    burstDigivolve?: string,
    digiXros?: string,
    dnaDigivolve?: string,
    securityEffect?: string,
    restriction_en: string,
    restriction_jp: string,
    illustrator: string
}

type DigivolveCondition = {
    color: string,
    cost: number,
    level: number,
}

export type CardTypeWithId = CardType & { id: string };

export type CardTypeGame = CardTypeWithId & { isTilted: boolean };

export type SearchCards = (
    name: string | null,
    cardType: string | null,
    color: string | null,
    attribute: string | null,
    cardNumber: string | null,
    stage: string | null,
    digiType: string | null,
    dp: number | null,
    playCost: number | null,
    level: number | null,
    mainEffect: string | null,
    inheritedEffect: string | null) => void;

export type DeckType = {
    id: string,
    name: string,
    color: string,
    decklist: string[],
    deckStatus: string,
}

export type Player = {
    username: string,
    avatarName: string,
    sleeveName: string,
}

export type GameDistribution = {
    player1Memory?: number,
    player2Memory?: number,

    player1Reveal?: CardTypeGame[],
    player2Reveal?: CardTypeGame[],

    player1Hand: CardTypeGame[],
    player1DeckField: CardTypeGame[],
    player1EggDeck: CardTypeGame[],
    player1Trash?: CardTypeGame[],
    player1Security: CardTypeGame[],

    player1Digi1?: CardTypeGame[],
    player1Digi2?: CardTypeGame[],
    player1Digi3?: CardTypeGame[],
    player1Digi4?: CardTypeGame[],
    player1Digi5?: CardTypeGame[],
    player1Digi6?: CardTypeGame[],
    player1Digi7?: CardTypeGame[],
    player1Digi8?: CardTypeGame[],
    player1Digi9?: CardTypeGame[],
    player1Digi10?: CardTypeGame[],
    player1Digi11?: CardTypeGame[],
    player1Digi12?: CardTypeGame[],
    player1Digi13?: CardTypeGame[],
    player1Digi14?: CardTypeGame[],
    player1Digi15?: CardTypeGame[],
    player1BreedingArea?: CardTypeGame[],

    player2Hand: CardTypeGame[],
    player2DeckField: CardTypeGame[],
    player2EggDeck: CardTypeGame[],
    player2Trash?: CardTypeGame[],
    player2Security: CardTypeGame[],

    player2Digi1?: CardTypeGame[],
    player2Digi2?: CardTypeGame[],
    player2Digi3?: CardTypeGame[],
    player2Digi4?: CardTypeGame[],
    player2Digi5?: CardTypeGame[],
    player2Digi6?: CardTypeGame[],
    player2Digi7?: CardTypeGame[],
    player2Digi8?: CardTypeGame[],
    player2Digi9?: CardTypeGame[],
    player2Digi10?: CardTypeGame[],
    player2Digi11?: CardTypeGame[],
    player2Digi12?: CardTypeGame[],
    player2Digi13?: CardTypeGame[],
    player2Digi14?: CardTypeGame[],
    player2Digi15?: CardTypeGame[],
    player2BreedingArea?: CardTypeGame[]
}

export type OneSideDistribution = {
    playerReveal?: CardTypeGame[],

    playerHand: CardTypeGame[],
    playerDeckField: CardTypeGame[],
    playerEggDeck: CardTypeGame[],
    playerTrash?: CardTypeGame[],
    playerSecurity: CardTypeGame[],

    playerDigi1?: CardTypeGame[],
    playerDigi2?: CardTypeGame[],
    playerDigi3?: CardTypeGame[],
    playerDigi4?: CardTypeGame[],
    playerDigi5?: CardTypeGame[],
    playerDigi6?: CardTypeGame[],
    playerDigi7?: CardTypeGame[],
    playerDigi8?: CardTypeGame[],
    playerDigi9?: CardTypeGame[],
    playerDigi10?: CardTypeGame[],
    playerDigi11?: CardTypeGame[],
    playerDigi12?: CardTypeGame[],
    playerDigi13?: CardTypeGame[],
    playerDigi14?: CardTypeGame[],
    playerDigi15?: CardTypeGame[],
    playerBreedingArea?: CardTypeGame[],
}

export type DraggedItem = {
    id: string,
    location: string,
    cardnumber: string,
    type: string,
    name: string,
}

export type DraggedStack = {
    index: number,
    location: string,
}

export type HandCardContextMenuItemProps = {
    index: number;
}

export type Picture = {
    name: string,
    imagePath: string,
}
