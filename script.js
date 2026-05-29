// script.js
document.getElementById('btn-analisar').addEventListener('click', function() {
    const mesSelecionado = document.getElementById('mes').value;
    const resultadoSeccao = document.getElementById('resultado');
    const statusNivel = document.getElementById('status-nivel');
    const statusDescricao = document.getElementById('status-descricao');
    const listaAcoes = document.getElementById('lista-acoes');

    // Limpa a lista de ações anterior
    listaAcoes.innerHTML = '';

    // Base de dados simulando a inteligência hídrica do site
    const dadosCenarios = {
        janeiro: {
            nivel: "Baixo Risco de Seca",
            descricao: "Período com alta pluviosidade. O foco deve ser o armazenamento e captação de água excedente.",
            acoes: [
                "Ativar sistemas de captação de água da chuva (cisternas).",
                "Focar no manejo de drenagem para evitar erosão do solo.",
                "Abastecer reservatórios subterrâneos."
            ]
        },
        junho: {
            nivel: "Alerta Moderado",
            descricao: "Entrada no período de estiagem. A evapotranspiração está aumentando.",
            acoes: [
                "Implementar cobertura morta (palhada) no solo para reter umidade.",
                "Migrar turnos de irrigação para o período da noite/madrugada (reduz perda por evaporação).",
                "Monitorar sensores de umidade para evitar regas desnecessárias."
            ]
        },
        setembro: {
            nivel: "Risco Crítico de Seca",
            descricao: "Pico da estiagem. Escassez hídrica severa na região.",
            acoes: [
                "Utilizar estritamente a irrigação por gotejamento localizada.",
                "Aplicar técnicas de manejo de estresse hídrico controlado nas culturas tolerantes.",
                "Reutilizar água cinza tratada para lavagem de maquinários e áreas comuns."
            ]
        }
    };

    const cenarioAtual = dadosCenarios[mesSelecionado];

    // Atualiza a interface com os dados do cenário
    statusNivel.textContent = cenarioAtual.nivel;
    statusDescricao.textContent = cenarioAtual.descricao;

    // Altera a cor do alerta dinamicamente baseado no risco
    if(mesSelecionado === 'setembro') {
        statusNivel.style.color = '#d32f2f'; // Vermelho Crítico
    } else if(mesSelecionado === 'junho') {
        statusNivel.style.color = '#ef6c00'; // Laranja Alerta
    } else {
        statusNivel.style.color = '#2e7d32'; // Verde Seguro
    }

    // Adiciona as ações sustentáveis na tela
    cenarioAtual.acoes.forEach(function(acao) {
        const li = document.createElement('li');
        li.textContent = acao;
        listaAcoes.appendChild(li);
    });

    // Mostra os resultados com uma transição simples
    resultadoSeccao.classList.remove('hidden');
});