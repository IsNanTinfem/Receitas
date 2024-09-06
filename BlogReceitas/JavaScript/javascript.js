document.addEventListener("DOMContentLoaded", function() {
    const modal = document.getElementById("recipeModal");
    const modalContent = document.getElementById("recipe-details");
    const closeBtn = document.querySelector(".close");

    // Adiciona evento de clique para cada card de receita
    document.querySelectorAll(".recipe-card").forEach(card => {
        card.addEventListener("click", function() {
            const receita = this.getAttribute("data-receita");
            openRecipe(receita);
        });
    });

    function openRecipe(receita) {
        let receitaDetalhes = "";

        // Definir detalhes com base na receita
        switch (receita) {
            case 'receita1':
                receitaDetalhes = `
                    <h3>Bolo de Chocolate</h3>
                    Ingredientes:
                    - 2 xícaras de farinha de trigo
                    - 1 xícara de açúcar
                    - 1/2 xícara de manteiga
                    - 3 ovos
                    - 1 xícara de cacau em pó

                    Modo de Preparo:
                    1. Pré-aqueça o forno a 180°C.
                    2. Misture a farinha, o açúcar e o cacau em pó.
                    3. Adicione a manteiga e os ovos, misturando bem.
                    4. Asse por 25-30 minutos.
                `;
                break;
            case 'receita2':
                receitaDetalhes = `
                    <h3>Lasanha de Frango</h3>
                    Ingredientes:
                    - 500g de peito de frango desfiado
                    - 1 pacote de massa para lasanha
                    - 2 xícaras de molho branco
                    - 1 xícara de queijo ralado
                    - 1 xícara de molho de tomate

                    Modo de Preparo:
                    1. Cozinhe o frango e desfie.
                    2. Monte a lasanha intercalando camadas de massa, frango, molho branco e queijo.
                    3. Asse por 40-50 minutos.
                `;
                break;
            case 'receita3':
                receitaDetalhes = `
                    <h3>Salada Grega</h3>
                    Ingredientes:
                    - 2 tomates cortados em cubos
                    - 1 pepino cortado em cubos
                    - 1/2 cebola roxa fatiada
                    - 100g de queijo feta
                    - Azeitonas pretas a gosto
                    - Azeite, sal e pimenta a gosto

                    Modo de Preparo:
                    1. Misture todos os ingredientes em uma tigela.
                    2. Tempere com azeite, sal e pimenta.
                    3. Sirva imediatamente.
                `;
                break;
            default:
                receitaDetalhes = `
                    <h3>Receita não encontrada</h3>
                    Desculpe, os detalhes desta receita não estão disponíveis.
                `;
        }

        // Atualiza o conteúdo do modal com os detalhes da receita
        modalContent.innerHTML = receitaDetalhes;
        modal.style.display = "block";

        // Fecha o modal ao clicar no "x"
        closeBtn.addEventListener("click", function() {
            modal.style.display = "none";
        });

        // Fecha o modal ao clicar fora do conteúdo
        window.addEventListener("click", function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        });
    }
});
