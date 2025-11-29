const sup = n => `<sup>${n}</sup>`;
const sub = n => `<sub>${n}</sub>`;
const frac = (a, b) => `${sup(a)}/${sub(b)}`;
const hexToRGB = (hex) => {
    const bigint = parseInt(hex.replace('#', ''), 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return `${r}, ${g}, ${b}`;
};

const el = (tag, props = {}, ...children) => {
    const e = document.createElement(tag);
    for (const [k, v] of Object.entries(props)) {
        if (k === 'style') {
            Object.assign(e.style, v);
        } else if (k === 'attrs') {
            for (const [a, val] of Object.entries(v)) {
                e.setAttribute(a, val);
            }
        } else {
            e[k] = v;
        }
    }
    for (const c of children) {
        if (c != null) {
            e.append(typeof c === 'string' ? document.createTextNode(c) : c);
        }
    }
    return e;
};

const contents = [
    {
        title: "Geometria Espacial",
        color: "#EF5350",
        icon: "icons/teto.png",
        topics: [[
            "O que entendi do assunto?",
            ""
        ], [
            "Como posso ensinar alguém?",
            ""
        ], [
            "Quais exemplos podem ilustrar minhas explicações?",
            ""
        ], [
            "O que não entendi do assunto?",
            ""
        ], [
            "Como estudo?",
            ""
        ]]
    }, {
        title: "Geometria Analítica",
        color: "#86CECB",
        icon: "icons/miku.png",
        topics: [[
            "O que entendi do assunto?",
            ""
        ], [
            "Como posso ensinar alguém?",
            ""
        ], [
            "Quais exemplos podem ilustrar minhas explicações?",
            ""
        ], [
            "O que não entendi do assunto?",
            ""
        ], [
            "Como estudo?",
            ""
        ]]
    }, {
        title: "Conclusão",
        icon: "icons/neru.png",
        color: "#FFD543",
        topics: [[
            "Entendimento",
            ""
        ], [
            "Desempenho",
            ""
        ], [
            "Comportamento",
            ""
        ]]
    }, {
        title: "Isenção de responsabilidade", 
        icon: "icons/luka.png", 
        color: "#EA9999",
        topics: [[
            "Sobre os conteúdos",
            "Momentos em que não é citado a fonte externa, são onde o material foi retirado dos conteúdos repassados pela professora durante as aulas."
        ]]
    }
];

const explore = el('div', {className: 'box' }, el('h1', {}, 'Explorar Conteúdos:'));
explore.style.border = `2px solid`;
for (const c of contents) {
    const a = el('a', { className: 'o', href: '#' + c.title });
    a.style.color = c.color;
    a.innerHTML = `<h3>${c.title}</h3>`;
    explore.appendChild(a);
}
document.body.appendChild(explore);

for (const c of contents) {
    document.body.appendChild(document.createElement('br')).setAttribute('id', c.title);

    const box = el('div', { className: 'box' });

    box.style.border = `2px solid ${c.color}`;
    box.style.backgroundImage = `linear-gradient(0deg, rgba(${hexToRGB(c.color)}, .1), rgba(255, 255, 255, .05))`;
    box.style.backgroundBlendMode = 'overlay, difference';
    box.style.color = c.color;

    box.appendChild(el('h1', { className: 'center' }, c.title));

    const img = el('img', {});
    img.src = c.icon;
    img.style.width = '80px';
    box.appendChild(img);

    for (const [q, aText] of (c.topics || [])) {
        box.appendChild(el('h2', {}, q));
        const p = el('p', {});
        p.style.textAlign = 'justify';
        p.innerHTML = (aText || '').replace(/\r?\n/g, '<br>');
        box.appendChild(p);
        box.appendChild(document.createElement('br'));
    }

    document.body.appendChild(box);
}
document.body.appendChild(document.createElement('br'));