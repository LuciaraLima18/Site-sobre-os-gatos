let listaTarefas = document.querySelector('#listaTarefas');
    let inputPesquisa = document.querySelector('#inputPesquisa');
    let btnFiltrar = document.querySelector('#btnFiltrar');
    let btnAdicionarTarefa = document.querySelector('#btnAdicionarTarefa');
    let inputNovaTarefa = document.querySelector('#inputNovaTarefa');

    
    function criarTagLI(tarefa) {
        let li = document.createElement('li');
        li.id = tarefa.id;

        let span = document.createElement('span');
        span.classList.add('textoTarefa');
        span.innerHTML = tarefa.nome;

        let btnExcluir = document.createElement('button');
        btnExcluir.classList.add('btnAcao');
        btnExcluir.innerHTML = '<i class="fa fa-trash"></i>';
        btnExcluir.addEventListener('click', () => excluir(tarefa.id));

        li.appendChild(span);
        li.appendChild(btnExcluir);
        return li;
    }

    
    function adicionarTarefa() {
        let nomeTarefa = inputNovaTarefa.value.trim();
        if (nomeTarefa !== '') {
            let tarefa = {
                id: Date.now(),
                nome: nomeTarefa
            };

            let li = criarTagLI(tarefa);
            listaTarefas.appendChild(li);

            
            let tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];
            tarefas.push(tarefa);
            localStorage.setItem('tarefas', JSON.stringify(tarefas));

            inputNovaTarefa.value = ''; // 
        } else {
            alert('Por favor, insira uma tarefa.');
        }
    }

    
    function excluir(idTarefa) {
        let confirmacao = window.confirm('Tem certeza que deseja excluir?');
        if (confirmacao) {
            let li = document.getElementById(idTarefa);
            if (li) {
                listaTarefas.removeChild(li);
                let tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];
                tarefas = tarefas.filter(tarefa => tarefa.id !== idTarefa);
                localStorage.setItem('tarefas', JSON.stringify(tarefas));
            } else {
                alert('Elemento HTML não encontrado!');
            }
        }
    }

    
    function filtrarTarefas() {
        let filtro = inputPesquisa.value.toLowerCase();
        let tarefas = listaTarefas.getElementsByTagName('li');

        for (let i = 0; i < tarefas.length; i++) {
            let tarefaNome = tarefas[i].querySelector('.textoTarefa').textContent.toLowerCase();
            if (tarefaNome.includes(filtro)) {
                tarefas[i].style.display = '';
            } else {
                tarefas[i].style.display = 'none';
            }
        }
    }

    
    function resetarFiltro() {
        inputPesquisa.value = '';
        let tarefas = listaTarefas.getElementsByTagName('li');
        for (let i = 0; i < tarefas.length; i++) {
            tarefas[i].style.display = '';
        }
    }

    
    btnFiltrar.addEventListener('click', filtrarTarefas);
    btnResetarFiltro.addEventListener('click', resetarFiltro);
    btnAdicionarTarefa.addEventListener('click', adicionarTarefa);

    
    document.addEventListener('DOMContentLoaded', () => {
        let tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];
        tarefas.forEach(tarefa => {
            let li = criarTagLI(tarefa);
            listaTarefas.appendChild(li);
        });
    });