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
            description: "5歳の頃に放送されたジャンプ！〇〇中を見て釘付け！以降どんな用事があろうと欠かさずリアルタイム視聴",
            imagePath: "./images/IMG_3608.png"
        },
        {
            title: "支え",
            description: "幼少期からの難病で何もできなかった人生を支えてくれたのが逃走中の存在です。回復した今逃走成功を果たして一つの成功体験を掴みたい！",
            imagePath: "./images/IMG_3609.png"
        },
        {
            title: "3000時間プレイ",
            description: "『逃走中 史上最強のハンターたちからにげきれ』は発売から遊び続け、そのプレイ時間は12年間で3000時間を突破！！",
            imagePath: "./images/IMG_3733.jpg"
        }
    ];

    data.forEach(item => {
        const contents = createAndAppendElement('div', { class: 'contents' }, parent);
        const inner = createAndAppendElement('div', { class: 'inner' }, contents);
        const img = createAndAppendElement('img', { class: 'img', src: item.imagePath, alt: item.title }, inner);
        const description = createAndAppendElement('div', { class: 'description' }, inner);
        
        createAndAppendElement('h2', { class: 'title' }, description, item.title);
        createAndAppendElement('p', { class: 'text' }, description, item.description);
    });
}

function createAndAppendElement(tag, attributes, parent, innerText) {
    const element = document.createElement(tag);
    Object.entries(attributes).forEach(([key, value]) => element.setAttribute(key, value));
    if (innerText) {
        element.innerText = innerText;
    }
    parent.appendChild(element);
    return element;
}

function handleScroll() {
    const descriptions = document.querySelectorAll('.description');
    const images = document.querySelectorAll('.img');
    const title1Container = document.querySelector('.title1-container');
    const formContainer = document.querySelector('.formContainer');
    
    descriptions.forEach(description => {
        if (isElementInViewport(description) && !description.classList.contains('animate-right')) {
            description.classList.add('animate-right');
        }
    });
    
    images.forEach(image => {
        if (isElementInViewport(image) && !image.classList.contains('animate-left')) {
            image.classList.add('animate-left');
        }
    });

    if (title1Container && isElementInViewport(title1Container) && !title1Container.classList.contains('animate-right')) {
        title1Container.classList.add('animate-right');
    }
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
    const formContainer = createAndAppendElement('div', { class: 'formContainer' }, parent);
    createAndAppendElement('h2', { class: 'title' }, formContainer, 'お問い合わせフォーム');

    createAndAppendElement('input', { class: 'input', type: 'text', placeholder: '名前' }, formContainer);
    createAndAppendElement('input', { class: 'input', type: 'email', placeholder: 'メールアドレス' }, formContainer);
    createAndAppendElement('textarea', { class: 'textarea', placeholder: 'メッセージ' }, formContainer);

    createAndAppendElement('button', { class: 'button' }, formContainer, '送信');
}
