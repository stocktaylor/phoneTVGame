var html = {
    htmlElements: {
        whiteCard: (id, content) => {
            let card = document.createElement(`DIV`);
            let cardText = document.createElement(`DIV`);
            let cntrBox = document.createElement(`DIV`);
            let cnfmBttn = document.createElement(`DIV`);

            card.id = id;
            cardText.id = id + `Text`;
            cnfmBttn.id = id + `_cnfm_btn`;
            cardText.innerHTML = content;

            card.style.cssText = `
                width: 125px;
                max-width: 125px;
                height: 175px;
                max-height: 175px;
                border-radius: 12.5px;
                color: black;
                background-color: white;
                justify-content: flex-start;
                align-items: flex-start;
                text-align: left;
                box-shadow: 2.5px 2.5px 1.25px grey;
                margin: 12.5px;
            `;

            cardText.style.cssText = `
                width: 95px;
                height: 145px;
                padding: 15px;
                font-size: 10.5px;
                word-wrap: break-word;
            `;

            cntrBox.style.cssText = `
                width: 100%;
                height: 100%;
                display: none;
                justify-content: center;
                align-items: center;
            `;

            cnfmBttn.classList.add(`btn`);
            cnfmBttn.style.height = `30px`;
            cnfmBttn.innerHTML = `Confirm`;

            card.appendChild(cardText);
            cntrBox.appendChild(cnfmBttn);
            card.appendChild(cntrBox);

            let cardElem = {
                card: card,
                cardText: cardText,
                cntrBox: cntrBox,
                cnfmBttn: cnfmBttn
            }

            return cardElem;
        },

        blackCard: (id, content) => {
            let card = document.createElement(`DIV`);
            let cardText = document.createElement(`DIV`);
            let cntrBox = document.createElement(`DIV`);
            let cnfmBttn = document.createElement(`DIV`);

            card.id = id;
            cardText.id = id + `Text`;
            cardText.innerHTML = content;

            card.style.cssText = `
                width: 125px;
                max-width: 125px;
                height: 175px;
                max-height: 175px;
                border-radius: 12.5px;
                color: white;
                background-color: black;
                justify-content: flex-start;
                align-items: flex-start;
                text-align: left;
                box-shadow: 2.5px 2.5px 1.25px grey;
                margin: 12.5px;
            `;

            cardText.style.cssText = `
                width: 95px;
                height: 145px;
                padding: 15px;
                font-size: 10.5px;
            `;

            cntrBox.style.cssText = `
                width: 100%;
                height: 100%;
                display: none;
                justify-content: center;
                align-items: center;
            `;

            cnfmBttn.classList.add(`btn`);
            cnfmBttn.style.height = `30px`;
            cnfmBttn.style.color = `black`;
            cnfmBttn.innerHTML = `Confirm`;

            card.appendChild(cardText);
            cntrBox.appendChild(cnfmBttn);
            card.appendChild(cntrBox);

            let cardElem = {
                card: card,
                cardText: cardText,
                cntrBox: cntrBox,
                cnfmBttn: cnfmBttn
            }

            return cardElem;
        },

        blackCardAnyHeight: (id, content) => {
            let card = document.createElement(`DIV`);
            let cardText = document.createElement(`DIV`);
            let cntrBox = document.createElement(`DIV`);
            let cnfmBttn = document.createElement(`DIV`);

            card.id = id;
            cardText.id = id + `Text`;
            cardText.innerHTML = content;

            card.style.cssText = `
                width: 500px;
                max-width: 500px;
                height: 700px;
                border-radius: 50px;
                color: white;
                background-color: black;
                justify-content: flex-start;
                align-items: flex-start;
                text-align: left;
                box-shadow: 10px 10px 5px grey;
                margin: 50px;
            `;

            cardText.style.cssText = `
                width: 380px;
                height: calc(100% - 120px);
                padding: 60px;
                font-size: 42px;
            `;

            cntrBox.style.cssText = `
                width: 100%;
                height: 100%;
                display: none;
                justify-content: center;
                align-items: center;
            `;

            cnfmBttn.classList.add(`btn`);

            card.appendChild(cardText);
            cntrBox.appendChild(cnfmBttn);
            card.appendChild(cntrBox);

            let cardElem = {
                card: card,
                cardText: cardText,
                cntrBox: cntrBox,
                cnfmBttn: cnfmBttn
            }

            return cardElem;
        }
    }
}