document.addEventListener('DOMContentLoaded', function() {
    const medalhas = [
        { pais: 'Brasil', bandeira: 'https://flagcdn.com/w320/br.png', ouro: 7, prata: 6, bronze: 8 },
        { pais: 'Estados Unidos', bandeira: 'https://flagcdn.com/w320/us.png', ouro: 39, prata: 41, bronze: 33 },
        { pais: 'Itália', bandeira: 'https://flagcdn.com/w320/it.png', ouro: 10, prata: 10, bronze: 20 },
        { pais: 'Argentina', bandeira: 'https://flagcdn.com/w320/ar.png', ouro: 2, prata: 4, bronze: 3 },
        { pais: 'Alemanha', bandeira: 'https://flagcdn.com/w320/de.png', ouro: 9, prata: 8, bronze: 7 },
        { pais: 'França', bandeira: 'https://flagcdn.com/w320/fr.png', ouro: 5, prata: 6, bronze: 4 },
        { pais: 'Japão', bandeira: 'https://flagcdn.com/w320/jp.png', ouro: 8, prata: 4, bronze: 7 },
        { pais: 'Canadá', bandeira: 'https://flagcdn.com/w320/ca.png', ouro: 6, prata: 5, bronze: 6 },
        { pais: 'Holanda', bandeira: 'https://flagcdn.com/w320/nl.png', ouro: 8, prata: 6, bronze: 7 },
        { pais: 'Austrália', bandeira: 'https://flagcdn.com/w320/au.png', ouro: 7, prata: 8, bronze: 11 },
        { pais: 'China', bandeira: 'https://flagcdn.com/w320/cn.png', ouro: 44, prata: 32, bronze: 19 },
        { pais: 'Coreia do Sul', bandeira: 'https://flagcdn.com/w320/kr.png', ouro: 6, prata: 4, bronze: 10 },
        { pais: 'Chile', bandeira: 'https://flagcdn.com/w320/cl.png', ouro: 3, prata: 2, bronze: 4 },
        { pais: 'Grã-Bretanha', bandeira: 'https://www.eccobandeiras.com.br/image/cache/catalog/antigas/reino-unido-1111x740.jpg', ouro: 0, prata: 1, bronze: 2 }
    ];

    function calcularTotalMedalhas(medalha) {
        return medalha.ouro + medalha.prata + medalha.bronze;
    }

    medalhas.sort((a, b) => {
        if (a.ouro !== b.ouro) return b.ouro - a.ouro;
        if (a.prata !== b.prata) return b.prata - a.prata;
        return b.bronze - a.bronze;
    });

    function criarQuadroDeMedalhas(medalhas) {
        const tabela = document.getElementById('medal-table').getElementsByTagName('tbody')[0];
        tabela.innerHTML = ''; // Limpa a tabela antes de adicionar novos dados

        medalhas.forEach((medalha, index) => {
            const linha = document.createElement('tr');

            const classificacaoCelula = document.createElement('td');
            classificacaoCelula.textContent = index + 1;
            linha.appendChild(classificacaoCelula);

            const paisCelula = document.createElement('td');
            paisCelula.className = 'flag-cell';
            
            const img = document.createElement('img');
            img.src = medalha.bandeira;
            img.alt = medalha.pais;
            img.className = 'flag';

            const textoPais = document.createElement('span');
            textoPais.className = 'country-name';
            textoPais.textContent = medalha.pais;

            paisCelula.appendChild(img);
            paisCelula.appendChild(textoPais);
            linha.appendChild(paisCelula);

            const ouroCelula = document.createElement('td');
            ouroCelula.textContent = medalha.ouro;
            linha.appendChild(ouroCelula);

            const prataCelula = document.createElement('td');
            prataCelula.textContent = medalha.prata;
            linha.appendChild(prataCelula);

            const bronzeCelula = document.createElement('td');
            bronzeCelula.textContent = medalha.bronze;
            linha.appendChild(bronzeCelula);

            const totalMedalhas = calcularTotalMedalhas(medalha);
            const totalMedalhasCelula = document.createElement('td');
            totalMedalhasCelula.textContent = totalMedalhas;
            linha.appendChild(totalMedalhasCelula);

            tabela.appendChild(linha);
        });
    }

    criarQuadroDeMedalhas(medalhas);
});
