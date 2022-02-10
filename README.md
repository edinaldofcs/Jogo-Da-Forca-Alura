[TOCM]
# Jogo da forca

<a href="https://edinaldofcs.github.io/Jogo-Da-Forca-Alura/">Link do jogo</a>


<img src="https://drive.google.com/uc?export=view&id=1Dr0b6zuUA62n85QwWBfplsei8hNF1KEc">

<b style="font-size: 20px">Detalhes</b>
- Responsividade
- Permite adicionar mais palavras
- Validação do input e do select
- Alerta para campos vazios, com animação criada no CSS e implementada via js.
- Aceita entrada pelo teclado, ou pelos botões da tela;
- Animação de fim de jogo;
- sons para deixar o jogo mais divertido;
- Interação entre o personagem e o usuário; e
- É possível reiniciar o jogo sem perder as palavras adicionadas

<b style="font-size: 20px">Tela inicial</b>
- Na tela inicial, no canto superior direito, há o botão de `menu`
- Ao clicar neste Botão, será aberto o menu de opções do jogo

# Menu

<b style="font-size: 20px">O Menu, conta com os seguintes campos e botões:</b>

<img src="https://drive.google.com/uc?export=view&id=1LMoeNyZZywjJvq2F-bXyVWf8wlsDtfK6">

`Botão fechar`
- Fecha a modal e volta para a páginainicial

`Input type="text"`
- Recebe o valor digitado e faz a validação, para permitir apenas letras e convertendo tudo para maiúsculo

`Botão adicionar`
- faz a validação da quantidade de caracteres e , caso seja possível adicionar, mostra uma mensagem de <b style="color: green; padding: 2px 4px;margin: 4px 0;  border: 1px solid black">Palavra Adicionada</b>, caso contrários, mostra mensagem de <b style="color: red; padding: 2px 4px;  border: 1px solid black">Campo inválido</b>, animando o input, logo em seguida.

`<select>`
- Seleciona a quantidade de erros máximos permitidos

`Botão iniciar`
- faz a validação da quantidade de erros permitidos , caso seja possível iniciar, Fecha o menu, sorteia uma palavra aleatória e mostra o jogo, caso contrário, mostra uma mensagem de <b style="color: red; padding: 2px 4px;  border: 1px solid black">Quantidade inválida</b>

# O JOGO

<img src="https://drive.google.com/uc?export=view&id=1Ndw6N2KDJQqiHYLW5UVkuk7rBkJrNxms">

<b style="font-size: 16px; color: blue">O jogo, foi elaborado de forma que, a cada erro, um pedaço da plataforma desapareça. Caso toda a plataforma em vermelho seja removida, o personagem é enforcado. Caso a palavra seja inserida por completo, o personagem será salvo</b>

<b style="font-size: 16px">Com o jogo iniciado, o usuário tem as seguintes opções de entradas:</b>
- Teclado (digitando as letras)
- mouse (clicando nas letras da tela)

`LETRA INVÁLIDA`
- Ao clicar em uma letra que não consta na palavra, uma letra é adicionada ao cemitério e um pedaço da plataforma desaparece.
- o Personagem deixa uma frase para te alertar: <b style="font-size: 16px; color: red">Assim você me mata</b>

`LETRA VÁLIDA`
- Ao clicar em uma letra que consta na palavra, a letra será adicionada em todas os locais possíveis da palavra e a plataforma mantém-se intácta.
- o Personagem tenta te motivar, com a seguinte frase: <b style="font-size: 16px; color: green">Eu acredito em ti</b>

`VITÓRIA`
- Ao completar a palavra oculta, será mostrado uma imagem na tela, bem como, qual a letra escolhida.
- o Personagem agradecer por você ter salvo a vida dele, com a seguinte frase: <b style="font-size: 16px; color: green">Você me salvou</b>

`DERROTA`
- Ao fazer com que toda a plataforma em vermelho desapareça, o personagem será enforcado.
- Antes de cair, sua ultima palavra será: <b style="font-size: 16px; color: red">Adeus...</b>

`MENU PRINCIPAL`
- Faz o reload da página, voltando para a tela incial
OBS: <b>todas as frases adicionadas serão perdidas</b>

`NOVO JOGO`
- Coloca o personagem na posição inicial e "reinicia o jogo", sem que a tela seja recarregada


