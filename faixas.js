
  const albuns = [
    { pos:  1, artista: "Pink Floyd",              album: "The Dark Side of the Moon",              ano: 1973, vendas: 43.3, extra: false },
    { pos:  2, artista: "Led Zeppelin",             album: "Led Zeppelin IV",                       ano: 1971, vendas: 36.8, extra: false },
    { pos:  3, artista: "AC/DC",                    album: "Back in Black",                         ano: 1980, vendas: 35.8, extra: false },
    { pos:  4, artista: "Fleetwood Mac",            album: "Rumours",                               ano: 1977, vendas: 35.5, extra: false },
    { pos:  5, artista: "Alanis Morissette",        album: "Jagged Little Pill",                    ano: 1995, vendas: 33.6, extra: false },
    { pos:  6, artista: "Pink Floyd",               album: "The Wall",                              ano: 1979, vendas: 31.3, extra: false },
    { pos:  7, artista: "Dire Straits",             album: "Brothers in Arms",                      ano: 1985, vendas: 30.9, extra: false },
    { pos:  8, artista: "Guns N' Roses",            album: "Appetite for Destruction",              ano: 1987, vendas: 30.8, extra: false },
    { pos:  9, artista: "Metallica",                album: "Metallica (The Black Album)",           ano: 1991, vendas: 30.8, extra: false },
    { pos: 10, artista: "Eagles",                   album: "Hotel California",                      ano: 1976, vendas: 30.1, extra: false },
    { pos: 11, artista: "Bruce Springsteen",        album: "Born in the U.S.A.",                    ano: 1984, vendas: 29.3, extra: false },
    { pos: 12, artista: "Nirvana",                  album: "Nevermind",                             ano: 1991, vendas: 27.8, extra: false },
    { pos: 13, artista: "Meat Loaf",                album: "Bat Out of Hell",                       ano: 1977, vendas: 27.4, extra: false },
    { pos: 14, artista: "U2",                       album: "The Joshua Tree",                       ano: 1987, vendas: 26.8, extra: false },
    { pos: 15, artista: "The Beatles",              album: "Abbey Road",                            ano: 1969, vendas: 26.7, extra: false },
    { pos: 16, artista: "Santana",                  album: "Supernatural",                          ano: 1999, vendas: 26.0, extra: false },
    { pos: 17, artista: "Def Leppard",              album: "Hysteria",                              ano: 1987, vendas: 25.0, extra: false },
    { pos: 18, artista: "The Beatles",              album: "Sgt. Pepper's Lonely Hearts Club Band", ano: 1967, vendas: 24.8, extra: false },
    { pos: 19, artista: "Eric Clapton",             album: "Unplugged",                             ano: 1992, vendas: 23.7, extra: false },
    { pos: 20, artista: "Bon Jovi",                 album: "Slippery When Wet",                     ano: 1986, vendas: 23.6, extra: false },
    { pos: 21, artista: "Phil Collins",             album: "No Jacket Required",                    ano: 1985, vendas: 23.3, extra: false },
    { pos: 22, artista: "Boston",                   album: "Boston",                                ano: 1976, vendas: 22.4, extra: false },
    { pos: 23, artista: "Hootie & The Blowfish",   album: "Cracked Rear View",                      ano: 1994, vendas: 22.3, extra: false },
    { pos: 24, artista: "Pink Floyd",               album: "Wish You Were Here",                    ano: 1975, vendas: 22.3, extra: false },
    { pos: 25, artista: "Led Zeppelin",             album: "Led Zeppelin II",                       ano: 1969, vendas: 21.9, extra: false },
    { pos: 26, artista: "Linkin Park",              album: "Hybrid Theory",                         ano: 2000, vendas: 20.8, extra: false },
    { pos: 27, artista: "Phil Collins",             album: "...But Seriously",                      ano: 1989, vendas: 20.8, extra: false },
    { pos: 28, artista: "The Who",                  album: "Tommy",                                 ano: 1969, vendas: 20.0, extra: false },
    { pos: 29, artista: "Green Day",                album: "Dookie",                                ano: 1994, vendas: 19.8, extra: false },
    { pos: 30, artista: "Simon & Garfunkel",        album: "Bridge Over Troubled Water",            ano: 1970, vendas: 19.6, extra: false },
    { pos: 31, artista: "The Beatles",              album: "The Beatles (White Album)",             ano: 1968, vendas: 19.0, extra: false },
    { pos: 32, artista: "Guns N' Roses",            album: "Use Your Illusion II",                  ano: 1991, vendas: 18.8, extra: false },
    { pos: 33, artista: "Guns N' Roses",            album: "Use Your Illusion I",                   ano: 1991, vendas: 18.0, extra: false },
    { pos: 34, artista: "No Doubt",                 album: "Tragic Kingdom",                        ano: 1995, vendas: 18.0, extra: false },
    { pos: 35, artista: "The Cranberries",          album: "No Need to Argue",                      ano: 1994, vendas: 17.8, extra: false },
    { pos: 36, artista: "Led Zeppelin",             album: "Houses of the Holy",                    ano: 1973, vendas: 17.7, extra: false },
    { pos: 37, artista: "Oasis",                    album: "(What's the Story) Morning Glory?",     ano: 1995, vendas: 17.7, extra: false },
    { pos: 38, artista: "U2",                       album: "Achtung Baby",                          ano: 1991, vendas: 17.5, extra: false },
    { pos: 39, artista: "Peter Frampton",           album: "Frampton Comes Alive!",                 ano: 1976, vendas: 17.0, extra: false },
    { pos: 40, artista: "Supertramp",               album: "Breakfast in America",                  ano: 1979, vendas: 16.8, extra: false },
    { pos: 41, artista: "Evanescence",              album: "Fallen",                                ano: 2003, vendas: 16.7, extra: false },
    { pos: 42, artista: "Red Hot Chili Peppers",    album: "Californication",                       ano: 1999, vendas: 16.3, extra: false },
    { pos: 43, artista: "Nirvana",                  album: "MTV Unplugged in New York",             ano: 1994, vendas: 16.1, extra: false },
    { pos: 44, artista: "Blink-182",                album: "Enema of the State",                    ano: 1999, vendas: 16.0, extra: false },
    { pos: 45, artista: "Blondie",                  album: "Parallel Lines",                        ano: 1978, vendas: 16.0, extra: false },
    { pos: 46, artista: "R.E.M.",                   album: "Out of Time",                           ano: 1991, vendas: 16.0, extra: false },
    { pos: 47, artista: "Led Zeppelin",             album: "Led Zeppelin (I)",                      ano: 1969, vendas: 15.8, extra: false },
    { pos: 48, artista: "Metallica",                album: "...And Justice for All",                ano: 1988, vendas: 15.8, extra: false },
    { pos: 49, artista: "Pearl Jam",                album: "Ten",                                   ano: 1991, vendas: 15.7, extra: false },
    { pos: 50, artista: "Phil Collins",             album: "Face Value",                            ano: 1981, vendas: 15.6, extra: false },
    // 5 de escolha pessoal
    { pos: 51, artista: "Imagine Dragons",          album: "Night Visions",                         ano: 2012, vendas: 21.5, extra: true  },
    { pos: 52, artista: "Taylor Swift",             album: "1989",                                  ano: 2014, vendas: 10.0, extra: true  },
    { pos: 53, artista: "Legião Urbana",            album: "Dois",                                  ano: 1986, vendas: 1.2 , extra: true  },
    { pos: 54, artista: "Sepultura",                album: "Roots ",                                ano: 1996, vendas: 2.0 , extra: true  },
    { pos: 55, artista: "Mamonas Assassinas",       album: "Mamonas Assassinas",                    ano: 1995, vendas: 3.0 , extra: true  },
  ];

  // VARIÁVEIS DE ESTADO
  let colunaAtual = "pos";
  let ordemCrescente = true;

  // ordenaçao dos dados
  function ordenar(dados, coluna, crescente) {
    return [...dados].sort((a, b) => {
      let valA = a[coluna];
      let valB = b[coluna];

      // Comparação de texto (ignora maiúsculas)
      if (typeof valA === "string") {
        valA = valA.toLowerCase();
        valB = valB.toLowerCase();
      }

      if (valA < valB) return crescente ? -1 : 1;
      if (valA > valB) return crescente ? 1 : -1;
      return 0;
    });
  }

  // FUNÇÃO: construir a tabela com rowspan
  function construirTabela(dados) {
    const corpo = document.getElementById("corpo");
    corpo.innerHTML = ""; // limpar tabela anterior

    // Para aplicar rowspan, precisamos calcular quantas vezes
    // cada artista aparece em sequência
    const linhas = [];

    for (let i = 0; i < dados.length; i++) {
      const item = dados[i];

      // Verificar se o artista já apareceu na linha anterior
      let mostrarArtista = true;
      let rowspanArtista = 1;

      if (i > 0 && dados[i - 1].artista === item.artista) {
        // Artista igual ao anterior: não mostrar (já tem rowspan)
        mostrarArtista = false;
      } else {
        // Contar quantas vezes esse artista aparece em sequência
        let j = i + 1;
        while (j < dados.length && dados[j].artista === item.artista) {
          j++;
        }
        rowspanArtista = j - i;
      }

      linhas.push({ item, mostrarArtista, rowspanArtista });
    }

    // Montar as <tr> e <td>
    for (const { item, mostrarArtista, rowspanArtista } of linhas) {
      const tr = document.createElement("tr");
      if (item.extra) tr.classList.add("extra");

      // Coluna: posição
      const tdPos = document.createElement("td");
      tdPos.className = "num";
      tdPos.textContent = item.pos;
      tr.appendChild(tdPos);

      // Coluna: artista (com rowspan se necessário)
      if (mostrarArtista) {
        const tdArtista = document.createElement("td");
        tdArtista.className = "texto";
        tdArtista.textContent = item.artista;
        if (rowspanArtista > 1) {
          tdArtista.rowSpan = rowspanArtista;
          tdArtista.style.fontWeight = "bold";
          tdArtista.style.borderLeft = "3px solid #f0c040";
        }
        tr.appendChild(tdArtista);
      }

      // Coluna: álbum
      const tdAlbum = document.createElement("td");
      tdAlbum.className = "texto";
      tdAlbum.textContent = item.album;
      tr.appendChild(tdAlbum);

      // Coluna: ano
      const tdAno = document.createElement("td");
      tdAno.className = "num";
      tdAno.textContent = item.ano;
      tr.appendChild(tdAno);

      // Coluna: vendas
      const tdVendas = document.createElement("td");
      tdVendas.className = "num vendas";
      tdVendas.textContent = item.vendas.toFixed(1) + " mi";
      tr.appendChild(tdVendas);

      corpo.appendChild(tr);
    }
  }

  // atualizar setas nos cabeçalhos
  function atualizarCabecalho() {
    document.querySelectorAll("thead th").forEach(th => {
      // Remover setas antigas
      const seta = th.querySelector(".seta");
      if (seta) seta.remove();
    });

    // Adicionar seta na coluna ativa
    const thAtivo = document.querySelector(`thead th[data-col="${colunaAtual}"]`);
    if (thAtivo) {
      const seta = document.createElement("span");
      seta.className = "seta";
      seta.textContent = ordemCrescente ? "▲" : "▼";
      thAtivo.appendChild(seta);
    }
  }

  // renderizar tudo
  function renderizar() {
    const dadosOrdenados = ordenar(albuns, colunaAtual, ordemCrescente);
    construirTabela(dadosOrdenados);
    atualizarCabecalho();
  }

  // evento de quando se clica no cabeçalho
  document.querySelectorAll("thead th[data-col]").forEach(th => {
    th.addEventListener("click", () => {
      const col = th.getAttribute("data-col");
      if (col === colunaAtual) {
        //inversao da ordem
        ordemCrescente = !ordemCrescente;
      } else {
        // o botao de coluna crescente ou decrescente
        colunaAtual = col;
        ordemCrescente = true;
        document.getElementById("coluna").value = col;
      }
      document.getElementById("btnOrdem").textContent =
        ordemCrescente ? "↑ Crescente" : "↓ Decrescente";
      renderizar();
    });
  });

  
  // seleçao do botao
  document.getElementById("coluna").addEventListener("change", function () {
    colunaAtual = this.value;
    renderizar();
  });

  document.getElementById("btnOrdem").addEventListener("click", function () {
    ordemCrescente = !ordemCrescente;
    this.textContent = ordemCrescente ? "↑ Crescente" : "↓ Decrescente";
    renderizar();
  });

  // iniciar
  renderizar();