// Dados dos jogos (exemplo com 12 grupos + mata-mata)
const jogos = {
    grupos: [
        { id: 'g1', fase: 'Grupo A', data: '11/06/2026', time1: 'México', time2: 'África do Sul', grupo: 'A' },
        { id: 'g2', fase: 'Grupo A', data: '12/06/2026', time1: 'Coreia do Sul', time2: 'Tchéquia', grupo: 'A' },
        { id: 'g3', fase: 'Grupo B', data: '12/06/2026', time1: 'Canadá', time2: 'Bósnia', grupo: 'B' },
        { id: 'g4', fase: 'Grupo B', data: '13/06/2026', time1: 'Catar', time2: 'Suíça', grupo: 'B' },
        { id: 'g5', fase: 'Grupo C', data: '13/06/2026', time1: 'Brasil', time2: 'Marrocos', grupo: 'C' },
        { id: 'g6', fase: 'Grupo C', data: '13/06/2026', time1: 'Haiti', time2: 'Escócia', grupo: 'C' },
        { id: 'g7', fase: 'Grupo D', data: '12/06/2026', time1: 'EUA', time2: 'Paraguai', grupo: 'D' },
        { id: 'g8', fase: 'Grupo D', data: '13/06/2026', time1: 'Austrália', time2: 'Turquia', grupo: 'D' },
        { id: 'g9', fase: 'Grupo E', data: '14/06/2026', time1: 'Alemanha', time2: 'Curaçao', grupo: 'E' },
        { id: 'g10', fase: 'Grupo E', data: '14/06/2026', time1: 'Costa do Marfim', time2: 'Equador', grupo: 'E' },
        { id: 'g11', fase: 'Grupo F', data: '14/06/2026', time1: 'Holanda', time2: 'Japão', grupo: 'F' },
        { id: 'g12', fase: 'Grupo F', data: '14/06/2026', time1: 'Suécia', time2: 'Tunísia', grupo: 'F' },
        { id: 'g13', fase: 'Grupo G', data: '15/06/2026', time1: 'Bélgica', time2: 'Egito', grupo: 'G' },
        { id: 'g14', fase: 'Grupo G', data: '15/06/2026', time1: 'Irã', time2: 'Nova Zelândia', grupo: 'G' },
        { id: 'g15', fase: 'Grupo H', data: '15/06/2026', time1: 'Espanha', time2: 'Cabo Verde', grupo: 'H' },
        { id: 'g16', fase: 'Grupo H', data: '15/06/2026', time1: 'Arábia Saudita', time2: 'Uruguai', grupo: 'H' },
        { id: 'g17', fase: 'Grupo I', data: '16/06/2026', time1: 'França', time2: 'Senegal', grupo: 'I' },
        { id: 'g18', fase: 'Grupo I', data: '16/06/2026', time1: 'Iraque', time2: 'Noruega', grupo: 'I' },
        { id: 'g19', fase: 'Grupo J', data: '16/06/2026', time1: 'Argentina', time2: 'Argélia', grupo: 'J' },
        { id: 'g20', fase: 'Grupo J', data: '16/06/2026', time1: 'Áustria', time2: 'Jordânia', grupo: 'J' },
        { id: 'g21', fase: 'Grupo K', data: '17/06/2026', time1: 'Portugal', time2: 'RD Congo', grupo: 'K' },
        { id: 'g22', fase: 'Grupo K', data: '17/06/2026', time1: 'Uzbequistão', time2: 'Colômbia', grupo: 'K' },
        { id: 'g23', fase: 'Grupo L', data: '17/06/2026', time1: 'Inglaterra', time2: 'Croácia', grupo: 'L' },
        { id: 'g24', fase: 'Grupo L', data: '17/06/2026', time1: 'Gana', time2: 'Panamá', grupo: 'L' }
    ],
    oitavas: [
        { id: 'o1', fase: 'Oitavas', data: '28/06/2026', time1: '2º Grupo A', time2: '2º Grupo B' },
        { id: 'o2', fase: 'Oitavas', data: '29/06/2026', time1: '1º Grupo C', time2: '2º Grupo F' },
        { id: 'o3', fase: 'Oitavas', data: '29/06/2026', time1: '1º Grupo E', time2: '3º melhor' },
        { id: 'o4', fase: 'Oitavas', data: '30/06/2026', time1: '1º Grupo A', time2: '3º melhor' },
        { id: 'o5', fase: 'Oitavas', data: '01/07/2026', time1: '1º Grupo B', time2: '3º melhor' },
        { id: 'o6', fase: 'Oitavas', data: '01/07/2026', time1: '1º Grupo D', time2: '3º melhor' },
        { id: 'o7', fase: 'Oitavas', data: '02/07/2026', time1: '2º Grupo K', time2: '2º Grupo L' },
        { id: 'o8', fase: 'Oitavas', data: '03/07/2026', time1: '1º Grupo G', time2: '3º melhor' }
    ],
    quartas: [
        { id: 'q1', fase: 'Quartas', data: '04/07/2026', time1: 'Vencedor O1', time2: 'Vencedor O2' },
        { id: 'q2', fase: 'Quartas', data: '05/07/2026', time1: 'Vencedor O3', time2: 'Vencedor O4' },
        { id: 'q3', fase: 'Quartas', data: '06/07/2026', time1: 'Vencedor O5', time2: 'Vencedor O6' },
        { id: 'q4', fase: 'Quartas', data: '07/07/2026', time1: 'Vencedor O7', time2: 'Vencedor O8' }
    ],
    semifinais: [
        { id: 's1', fase: 'Semifinal', data: '09/07/2026', time1: 'Vencedor Q1', time2: 'Vencedor Q2' },
        { id: 's2', fase: 'Semifinal', data: '10/07/2026', time1: 'Vencedor Q3', time2: 'Vencedor Q4' }
    ],
    final: [
        { id: 'f1', fase: 'Final', data: '12/07/2026', time1: 'Vencedor S1', time2: 'Vencedor S2' },
        { id: 'f2', fase: 'Terceiro Lugar', data: '11/07/2026', time1: 'Perdedor S1', time2: 'Perdedor S2' }
    ]
};

// Renderizar todos os jogos na tela
function renderizarJogos() {
    renderizarGrupos();
    renderizarMataMata('oitavas-container', jogos.oitavas);
    renderizarMataMata('quartas-container', jogos.quartas);
    renderizarMataMata('semis-container', jogos.semifinais);
    renderizarMataMata('final-container', jogos.final);
}

function renderizarGrupos() {
    const container = document.getElementById('grupos-container');
    container.innerHTML = '';
    
    jogos.grupos.forEach(jogo => {
        const jogoDiv = criarJogoCard(jogo);
        container.appendChild(jogoDiv);
    });
}

function renderizarMataMata(containerId, jogosArray) {
    const container = document.getElementById(containerId);
    container.innerHTML = '';
    
    jogosArray.forEach(jogo => {
        const jogoDiv = criarJogoCard(jogo);
        container.appendChild(jogoDiv);
    });
}

function criarJogoCard(jogo) {
    const div = document.createElement('div');
    div.className = 'jogo-card';
    
    div.innerHTML = `
        <div class="jogo-info">
            <div class="data">📅 ${jogo.data}</div>
            <div class="times">${jogo.time1} vs ${jogo.time2}</div>
            <div class="fase">${jogo.fase}</div>
        </div>
        <div class="jogo-placar">
            <input type="number" id="gols_${jogo.id}_1" class="placar-input" placeholder="0" min="0" max="20" value="">
            <span>vs</span>
            <input type="number" id="gols_${jogo.id}_2" class="placar-input" placeholder="0" min="0" max="20" value="">
        </div>
    `;
    
    // Carregar valor salvo no localStorage se existir
    const savedGols1 = localStorage.getItem(`gols_${jogo.id}_1`);
    const savedGols2 = localStorage.getItem(`gols_${jogo.id}_2`);
    if (savedGols1) div.querySelector(`#gols_${jogo.id}_1`).value = savedGols1;
    if (savedGols2) div.querySelector(`#gols_${jogo.id}_2`).value = savedGols2;
    
    // Salvar alterações no localStorage
    const input1 = div.querySelector(`#gols_${jogo.id}_1`);
    const input2 = div.querySelector(`#gols_${jogo.id}_2`);
    
    input1.addEventListener('change', () => localStorage.setItem(`gols_${jogo.id}_1`, input1.value));
    input2.addEventListener('change', () => localStorage.setItem(`gols_${jogo.id}_2`, input2.value));
    
    return div;
}

// Gerar CSV com todos os palpites
function gerarCSV() {
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const telefone = document.getElementById('telefone').value.trim();
    
    if (!nome || !email) {
        throw new Error('Preencha nome e e-mail');
    }
    
    const linhas = [];
    
    // Cabeçalho do CSV
    linhas.push(['Nome', 'Email', 'Telefone', 'Fase', 'Jogo', 'Time1', 'Time2', 'Palpite_Time1', 'Palpite_Time2', 'Data_Jogo'].join(','));
    
    // Coletar palpites de todos os jogos
    const todosJogos = [...jogos.grupos, ...jogos.oitavas, ...jogos.quartas, ...jogos.semifinais, ...jogos.final];
    
    todosJogos.forEach(jogo => {
        const gols1 = document.getElementById(`gols_${jogo.id}_1`)?.value || '';
        const gols2 = document.getElementById(`gols_${jogo.id}_2`)?.value || '';
        
        const linha = [
            escapeCSV(nome),
            escapeCSV(email),
            escapeCSV(telefone),
            escapeCSV(jogo.fase),
            escapeCSV(`${jogo.time1} vs ${jogo.time2}`),
            escapeCSV(jogo.time1),
            escapeCSV(jogo.time2),
            gols1,
            gols2,
            jogo.data
        ];
        
        linhas.push(linha.join(','));
    });
    
    return linhas.join('\n');
}

function escapeCSV(valor) {
    if (valor === undefined || valor === null) return '';
    if (valor.includes(',') || valor.includes('"') || valor.includes('\n')) {
        return `"${valor.replace(/"/g, '""')}"`;
    }
    return valor;
}

// Enviar e-mail (abre cliente de e-mail padrão)
function enviarPorEmail(csv) {
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    
    const assunto = `Bolão Copa 2026 - Palpites de ${nome}`;
    const corpo = `Segue em anexo os palpites do participante ${nome} (${email}).\n\nCopie o CSV abaixo e cole em um arquivo .csv:\n\n${csv}`;
    
    // Opção 1: Abrir cliente de e-mail
    window.location.href = `mailto:seu-email@exemplo.com?subject=${encodeURIComponent(assunto)}&body=${encodeURIComponent(corpo)}`;
    
    // Opção 2: Mostrar CSV para copiar manualmente (fallback)
    setTimeout(() => {
        const copiar = confirm('Se o e-mail não abriu automaticamente, clique em OK para copiar os dados e colar no seu e-mail manualmente.');
        if (copiar) {
            navigator.clipboard.writeText(csv).then(() => {
                alert('CSV copiado! Cole no corpo do e-mail e envie para seu-email@exemplo.com');
            });
        }
    }, 500);
}

// Limpar todos os palpites
function limparPalpites() {
    if (confirm('Tem certeza que deseja limpar TODOS os palpites?')) {
        const inputs = document.querySelectorAll('.placar-input');
        inputs.forEach(input => input.value = '');
        localStorage.clear();
        alert('Todos os palpites foram limpos!');
    }
}

// Event Listeners
document.getElementById('bolaoForm').addEventListener('submit', (e) => {
    e.preventDefault();
    
    try {
        const csv = gerarCSV();
        enviarPorEmail(csv);
        
        const msgDiv = document.getElementById('mensagem');
        msgDiv.className = 'mensagem sucesso';
        msgDiv.innerHTML = '✅ E-mail aberto! Envie para participar do bolão. O CSV foi gerado com sucesso.';
        
        setTimeout(() => {
            msgDiv.className = 'mensagem';
            msgDiv.innerHTML = '';
        }, 5000);
    } catch (error) {
        const msgDiv = document.getElementById('mensagem');
        msgDiv.className = 'mensagem erro';
        msgDiv.innerHTML = `❌ ${error.message}`;
        
        setTimeout(() => {
            msgDiv.className = 'mensagem';
            msgDiv.innerHTML = '';
        }, 5000);
    }
});

document.getElementById('limparBtn').addEventListener('click', limparPalpites);

// Inicializar
renderizarJogos();
