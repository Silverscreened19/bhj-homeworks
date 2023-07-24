const widgetSide = document.querySelector('.chat-widget__side')
const widget = document.querySelector('.chat-widget')
const input = document.querySelector('.chat-widget__input')
const messagesBox = document.querySelector('.chat-widget__messages')


function sendClientMessage() {
    messagesBox.innerHTML += `
        <div class="message message_client">
            <div class="message__time">${new Date().toLocaleTimeString()}</div>
            <div class="message__text">
            ${input.value}
            </div>
        </div>
    `;
    input.value = '';
    messagesBox.scrollIntoView(false);
}

function timeoutMessage() {
    messagesBox.innerHTML += `
        <div class="message">
            <div class="message__time">${new Date().toLocaleTimeString()}</div>
            <div class="message__text">
                Are you alive there love?
            </div>
        </div>
    `;
}

function robotAnswer() {
    const answers = [
        'Please wait',
        'Just a second',
        `There's no answer actually`,
        'Hold on love',
        'You really need to let go',
        'Cool down you'
    ];

    const index = Math.floor(Math.random() * answers.length);

    messagesBox.innerHTML += `
        <div class="message">
            <div class="message__time">${new Date().toLocaleTimeString()}</div>
            <div class="message__text">
            ${answers[index]}
            </div>
        </div>
    `;

    let timerId;
    clearTimeout(timerId);
    timerId = setTimeout(timeoutMessage, 30000);
}

widgetSide.addEventListener('click', () => {
    widget.classList.add('chat-widget_active');
})

input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && input.value !== "") {
        sendClientMessage();
        robotAnswer();
    };
})
