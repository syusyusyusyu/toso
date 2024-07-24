document.addEventListener('DOMContentLoaded', () => {
    App();
    window.addEventListener('scroll', handleScroll);
});

function App() {
    const app = document.getElementById('app');
    Menu(app);
    ContactForm(app);
}

function Menu(parent) {
    const data = [
        {
            title: "逃走中との出会い",
            text: "5歳の頃に放送されたジャンプ！〇〇中を見て釘付け！以降どんな用事があろうと欠かさずリアルタイム視聴",
            imagePath: "./images/IMG_3608.png"
        },
        {
            title: "支え",
            text: "幼少期からの難病で何もできなかった人生を支えてくれたのが逃走中の存在です。回復した今逃走成功を果たして一つの成功体験を掴みたい！",
            imagePath: "./images/IMG_3609.png"
        },
        {
            title: "3000時間プレイ",
            text: "『逃走中 史上最強のハンターたちからにげきれ』は発売から遊び続け、そのプレイ時間は12年間で3000時間を突破！！",
            imagePath: "./images/IMG_3733.jpg"
        }
    ];

    data.forEach(item => {
        const c = createAndAppendElement('div', { class: 'cnt' }, parent);
        const i = createAndAppendElement('div', { class: 'inner' }, c);
        const img = createAndAppendElement('img', { class: 'img', src: item.imagePath, alt: item.title }, i);
        const desc = createAndAppendElement('div', { class: 'desc' }, i);
        
        createAndAppendElement('h2', { class: 'ttl' }, desc, item.title);
        createAndAppendElement('p', { class: 'txt' }, desc, item.text);
    });
}

function createAndAppendElement(tag, attrs, parent, text) {
    const el = document.createElement(tag);
    Object.entries(attrs).forEach(([key, value]) => el.setAttribute(key, value));
    if (text) {
        el.innerText = text;
    }
    parent.appendChild(el);
    return el;
}

function handleScroll() {
    const desc = document.querySelectorAll('.desc');
    const img = document.querySelectorAll('.img');
    const tContainer = document.querySelector('.title-container');
    const formElements = document.querySelectorAll('.form-container .float-in-el');
    
    desc.forEach(d => {
        if (isElementInViewport(d) && !d.classList.contains('animate-right')) {
            d.classList.add('animate-right');
        }
    });
    
    img.forEach(i => {
        if (isElementInViewport(i) && !i.classList.contains('animate-left')) {
            i.classList.add('animate-left');
        }
    });

    if (tContainer && isElementInViewport(tContainer) && !tContainer.classList.contains('animate-right')) {
        tContainer.classList.add('animate-right');
    }

    formElements.forEach(el => {
        if (isElementInViewport(el) && !el.classList.contains('animate-left')) {
            el.classList.add('animate-left');
        }
    });
}

function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function ContactForm(parent) {
    const formContainer = createAndAppendElement('div', { class: 'form-container' }, parent);
    createAndAppendElement('h2', { class: 'ttl float-in-el' }, formContainer, 'お問い合わせフォーム');

    createAndAppendElement('input', { class: 'input float-in-el', type: 'text', placeholder: '名前' }, formContainer);
    createAndAppendElement('input', { class: 'input float-in-el', type: 'email', placeholder: 'メールアドレス' }, formContainer);
    createAndAppendElement('textarea', { class: 'textarea float-in-el', placeholder: 'メッセージ' }, formContainer);

    createAndAppendElement('button', { class: 'btn float-in-el' }, formContainer, '送信');
}
