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
            `Seria a parte da matemática que estuda figuras que realmente vemos, então não só no plano, mas nas 3 dimensões. Em vez de só linhas e triângulos, se trabalha com sólidos como prismas, pirâmides, cilindros, cones e esferas.`
        ], [
            "Como posso ensinar alguém?",
            `Mostrar para a pessoa inicialmente um objeto simples e utilizado no dia a dia, como um dado ou copo. Depois disso, mostrar as análises que são feitas com esse objeto (como um tronco de cone ser um copo).`
        ], [
            "Quais exemplos podem ilustrar minhas explicações?",
            `\
            <div class=box><h2>POLIEDROS</h2>\
            É um objeto 3D que tem toda sua superficie feita de faces planas (o que significa que cones ou cilindros não são poliedros).
            
            <div class=box><h3>Poliedros convexos</h3>\
            É um objeto 3D que se passarmos uma linha por ele, ela só entra e sai uma vez.

            <div class=box><h3>Poliedros de Platão</h3>\
            Em um jogo que eu jogo, encontrei todos esses (o jogo tem itens que são dados, que fazem efeitos diferentes no jogador).
            
            <div class=box>\
            <h2>Tetraedro (D4)</h2>\
            <img width="200"style="image-rendering:pixelated"src="images/d4.png">
            \<grey>(fonte: The Binding of Isaac: Repentance)</grey>
            </div>
            <div class=box>\
            <h2>Hexaedro ou Cubo (D6)</h2>\
            <img width="200"style="image-rendering:pixelated"src="images/d6.png">
            \<grey>(fonte: The Binding of Isaac: Repentance)</grey>
            </div>
            <div class=box>\
            <h2>Octaedro (D8)</h2>\
            <img width="200"style="image-rendering:pixelated"src="images/d8.png">
            \<grey>(fonte: The Binding of Isaac: Repentance)</grey>
            </div>
            <div class=box>\
            <h2>Dodecaedro (D12)</h2>\
            <img width="200"style="image-rendering:pixelated"src="images/d12.png">
            \<grey>(fonte: The Binding of Isaac: Repentance)</grey>
            </div>
            <div class=box>\
            <h2>Icosaedro (D20)</h2>\
            <img width="200"style="image-rendering:pixelated"src="images/d20.png">
            \<grey>(fonte: The Binding of Isaac: Repentance)</grey>
            </div>\
            </div>\

            <div class=box><h3>Poliedros duais</h3>\
            Pares de poliedros onde os vértices de um correspondem às faces do outro (e vice-versa).
            <img src="images/dual.jpg">
            Pesquisando online, percebi que existem 3 tipos, como mostrado na imagem.
            </div>\
            </div>\

            <div class=box><h3>Poliedros não convexos</h3>\
            É um objeto 3D que se passarmos uma linha por ele, ela entra e sai mais de uma vez.
            </div>\
            </div>\
            </div>
            <div class=box><h2>PRISMAS</h2>\
            Um sólido geométrico com bases poligonais paralelas.
            </div>
            `
        ], [
            "O que não entendi do assunto?",
            `Não acho que houveram lacunas, só ressalto que os que envolvem figuras com circulos (como os cones) foram mais difíceis de entender os cálculos por trás.`
        ], [
            "Como estudo?",
            `Primeiramente, identificar os conteúdos que teve dificuldade. Após isso, resolver várias questões sobre o tema.
            Isso buscando deixar o assunto mais mecanizado e reduzir a quantidade de erros bobos que as vezes acontecem no meio dos cálculos. Falo isso porque era geralmente o que acontecia comigo.`
        ]]
    }, {
        title: "Geometria Analítica",
        color: "#86CECB",
        icon: "icons/miku.png",
        topics: [[
            "O que entendi do assunto?",
            `A geometria analítica estuda objetos geométricos usando álgebra no plano cartesiano — pontos, retas e cônicas (circunferência, parábola, elipse e hipérbole). Principais ferramentas: coordenadas (x,y), distância entre pontos, ponto médio, condição de colinearidade (determinante / proporção), equações de retas (formas geral e reduzida), inclinação (coeficiente angular), posição relativa entre retas, distância ponto - reta, área de triângulo por determinante e definições analíticas das cônicas.Fonte: material do curso (introdução e sumário).`
        ], [
            "Como posso ensinar alguém?",
            `\
            1 - Começar colocando pontos no plano e explicando os pares ordenados. Depois, mostrar como medir distância entre dois pontos (usando o Teorema de Pitágoras, como a Prof. fez na aula).
            2 - Explicar ponto médio como média das coordenadas (bem simples).
            3 - Para retas, apresentar a condição de alinhamento só depois de dar um contexto geral do que seria a reta.`
        ], [
            "Quais exemplos podem ilustrar minhas explicações?",
            `\
        <div class="box"><h2>Distância entre pontos</h2>\
        Fórmula: d = √((x${sub("B")} - x${sub("A")})² + (y${sub("B")} - y${sub("A")})²). Ex.: A(2, -3), B(-2, -5) ⇒ d = 2√5.
        </div>
        <div class="box"><h2>Ponto médio</h2>\
        Fórmula: M(${frac(`(x${sub("A")} + x${sub("B")})`, 2)}, ${frac(`(y${sub("A")} + y${sub("B")})`, 2)}). Ex.: A(3, -2), B(-1, -6) ⇒ M(1, -4).
        </div>
        <div class="box"><h2>Equação da reta a partir de dois pontos</h2>\
        Use o determinante 3x3 = 0 para P(x, y) na mesma reta. Ex.: A(3, 5), B(1, 3) ⇒ y = x + 2.
        </div>
        <div class="box"><h2>Distância ponto - reta</h2>\
        Fórmula: d = | a x0 + b y0 + c | / √(a² + b²). Ex.: P(3, 2) e reta 3x+2y - 1=0 ⇒ d = ${frac("12", "√13")}.
        </div>
        <div class="box"><h2>Área por determinante</h2>\
        Área do triângulo com vértices (x1, y1),(x2, y2),(x3, y3) → A = |det|/2 onde det é a matriz 3x3 com colunas [x y 1].
        </div>
        <div class="box"><h2>Resumo de cônicas (exemplos)</h2>\
        • Circunferência: (x - a)² + (y - b)²=r². • Parábola: (x - h)² = 2p(y - k) ou (y - k)² = 2p(x - h). • Elipse: x²/a² + y²/b² = 1 (ou transladada). • Hipérbole: x²/a² - y²/b² = 1 (ou variantes). Exemplos e exercícios no material. \
        </div>`
        ], [
            "Como estudo?",
            `É bem importante ler e reescrever as fórmulas principais (distância, ponto médio, coeficiente angular, distância ponto - reta, determinante para área). Também é pertinente resolver os exercícios do final do material.`
        ]]
    }, {
        title: "Conclusão",
        icon: "icons/neru.png",
        color: "#FFD543",
        topics: [[
            "Entendimento",
            `Creio que consegui absorver todo o conteúdo ministrado. Por ser o último trimestre, acredito que não tive a preocupação que gostaria com os conteúdos, dado que tinha outras responsabilidades (como os vestibulares e entregas de trabalhos maiores - PI).`
        ], [
            "Opinião acerca das aulas",
            `Gostei bastante especialmente das aulas feitas no laboratório de matemática. Foram um momento divertido compartilhado com os colegas, servindo também como uma forma de despedida. Seguem algumas fotos dos nossos resultados (mesmo após algumas brigas e discussões):
            
            <div style="display:flex; justify-content:center; width:100%; box-sizing:border-box;">\
            <div style="display:flex; gap:10px; flex-wrap:wrap; justify-content:center; max-width:100%; box-sizing:border-box;">\
            <img src="images/i1.jpg"class="ignore"style="width:150px;object-fit:cover;">\
            <img src="images/i2.jpg"class="ignore"style="width:150px;object-fit:cover;">\
            <img src="images/i3.jpg"class="ignore"style="width:150px;object-fit:cover;">\
            <img src="images/i4.jpg"class="ignore"style="width:150px;object-fit:cover;">\
            <img src="images/i5.jpg"class="ignore"style="width:150px;object-fit:cover;">\
            </div>\
            </div>`
        ], [
            "Conclusão",
            `Agradeço muito aos professores e colegas por todos os momentos que compartilhamos nesses 3 anos.
            Especialmente em outras escolas, eu era geralmente colocado de escanteio dos grupinhos da sala, mas nunca passei por uma turma que me acolheu tanto.
            Com certeza sentirei muita saudade.`
        ]]
    }, {
        title: "Isenção de responsabilidade",
        icon: "icons/luka.png",
        color: "#EA9999",
        topics: [[
            "Sobre os conteúdos",
            "Momentos em que não é citado a fonte externa, são onde o material foi retirado dos conteúdos repassados pela professora durante as aulas ou dos documentos disponibilizados pelo SIGAA."
        ]]
    }
];

const explore = el('div', { className: 'box' }, el('h1', {}, 'Explorar Conteúdos:'));
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