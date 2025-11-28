const conteudo = {
    titulo: 0,
    entendimento: 1,
    ensino: 2,
    exemplos: 3,
    aprendizado: 4,
    estudo: 5,
}

link = (link) => "<a target=_blank href=" + link + ">" + link + "</a>";
sup = (n) => `<sup>${n}</sup>`;
sub = (n) => `<sub>${n}</sub>`;
frac = (a, b) => sup(a) + "/" + sub(b);
line = (s) => `<line>${s}</line>`

const centro = `style="margin-left: 50%; transform: translate(-50%, 0)"`;

const enunciados = ["",
    "O que entendi do assunto?",
    "Como posso ensinar alguém?",
    "Quais exemplos podem ilustrar minhas explicações?",
    "O que não entendi do assunto?",
    "Como estudo?",
];

class Conteudo {
    constructor(titulo, color, icone, entendimento, ensino, exemplos, aprendizado, estudo) {
        this.icone = icone;
        this.titulo = titulo;
        this.color = color;
        this.entendimento = entendimento;
        this.ensino = ensino;
        this.exemplos = exemplos;
        this.aprendizado = aprendizado;
        this.estudo = estudo;
    }
}

conteudos = [
    new Conteudo("Geometria Espacial", "#EF5350", "icons/teto.png",
        ``,
        ``,
        ``,
        ``,
        ``
    ),
    new Conteudo("Geometria Analítica", "#86cecb", "icons/miku.png",
        ``,
        ``,
        ``,
        ``,
        ``,
    ),
    new Conteudo("Conclusão", "", "icons/neru.png",
        `A`,
    )
];

muchoTexto = (texto) => texto.replaceAll("\\n", "").replaceAll("\n", "<br>");

pulaLinha = function (d) {
    d.appendChild(document.createElement("br"));
}

icon = function (name) {
    return "<img src=" + name + ">";
}

novoEnunciado = function (enunciado) {
    temp = document.createElement("h2");
    temp.innerHTML = enunciado;
    return temp;
}

novaExplica = function (exp) {
    temp = document.createElement("p");
    temp.style.textAlign = "justify";
    temp.innerHTML = exp;
    return temp;
}

inserirConteudo = function (elemento) {
    div = document.createElement("div");
    div.setAttribute("class", "caixa");
    div.style.backgroundImage = "linear-gradient(0deg," + elemento.color + ", #747474ff)";
    div.style.backgroundBlendMode = "overlay, difference";
    div.style.width = "700px;";
    div.style.color = elemento.color;
    title = document.createElement("h1");
    title.setAttribute("id", elemento.titulo);
    title.innerHTML = elemento.titulo;
    title.setAttribute("class", "center");
    div.appendChild(title);

    icon = document.createElement("img");
    icon.setAttribute("src", elemento.icone);
    icon.style.width = "80px";
    div.appendChild(icon);

    a = elemento.entendimento;
    if (a != undefined) {
        div.appendChild(novoEnunciado(enunciados[conteudo.entendimento]));
        div.appendChild(novaExplica(muchoTexto(a)));
        pulaLinha(div);
    }


    a = elemento.ensino;
    if (a != undefined) {
        div.appendChild(novoEnunciado(enunciados[conteudo.ensino]));
        div.appendChild(novaExplica(muchoTexto(a)));
        pulaLinha(div);
    }

    a = elemento.exemplos;
    if (a != undefined) {
        div.appendChild(novoEnunciado(enunciados[conteudo.exemplos]));
        div.appendChild(novaExplica(muchoTexto(a)));
        pulaLinha(div);
    }

    a = elemento.aprendizado;
    if (a != undefined) {
        div.appendChild(novoEnunciado(enunciados[conteudo.aprendizado]));
        div.appendChild(novaExplica(muchoTexto(a)));
        pulaLinha(div);
    }

    a = elemento.estudo;
    if (a != undefined) {
        div.appendChild(novoEnunciado(enunciados[conteudo.estudo]));
        div.appendChild(novaExplica(muchoTexto(a)));
    }
    document.body.appendChild(div);
    pulaLinha(document.body);
}

explorar = document.createElement("div");
explorar.setAttribute("class", "caixa");
exploraTit = document.createElement("h1");
exploraTit.innerHTML = "Explorar Conteúdos:";
explorar.appendChild(exploraTit);
insereExplora = function (e) {
    tit = e.titulo;
    if (tit == undefined) return;
    a = document.createElement("a");
    a.setAttribute("class", "simples");
    a.setAttribute("href", "#" + tit);
    a.innerHTML = "<h3>" + tit + "</h3>";
    explorar.appendChild(a);
}
conteudos.forEach(e => insereExplora(e));
document.body.appendChild(explorar);

pulaLinha(document.body);

conteudos.forEach(e => inserirConteudo(e));

conclusao = document.createElement("div");
conclusao.setAttribute("class", "caixa");
conclusaoTit = document.createElement("h1");
conclusaoTit.setAttribute("class", "center");
conclusaoTit.innerHTML = "Conclusão / Auto avaliação";
conclusaoText = document.createElement("h3");
conclusaoText.style.textAlign = "justify";
conclusaoText.innerHTML = muchoTexto(`Crio que subestimei um pouco o conteúdo, dado que já tenho conhecimento prévio considerável. Não acredito que tenha sido algo aconselhável ou correto.
    
    Não contribui muito nas aulas e realizei boa parte das questões somente em casa.
    
    Por parte da turma, notei falta de interesse no assunto, o que acabou refletindo nas notas.
    
    O conteúdo de geometria plana é algo de grande interesse meu, considero um dos conteúdos mais divertidos da matemática.
    
    Além disso, gostei muito das questões propostas pela professora e das explicações.
    
    Considero esse um dos melhores trimestres até agora.`);
conclusao.appendChild(conclusaoTit);
conclusao.appendChild(conclusaoText);
document.body.appendChild(conclusao);

pulaLinha(document.body);

disclaimer = document.createElement("div");
disclaimer.setAttribute("class", "caixa");
disclaimerTit = document.createElement("h1");
disclaimerTit.setAttribute("class", "center");
disclaimerTit.innerHTML = "Isenção de responsabilidade";
disclaimerText = document.createElement("h3");
disclaimerText.style.textAlign = "justify";
disclaimerText.innerHTML = muchoTexto(`Momentos em que não é citado a fonte externa, são onde o material foi retirado dos conteúdos repassados pela professora durante as aulas.`);
disclaimer.appendChild(disclaimerTit);
disclaimer.appendChild(disclaimerText);
document.body.appendChild(disclaimer);