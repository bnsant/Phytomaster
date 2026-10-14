# Phytomaster — SEO e publicação

Revisão: 14/10/2026. Landing page local; domínio de publicação ainda não definido.

## Implementado

- Removido o bloco “Manipular sua receita pode ser simples”.
- H1 único: “Farmácia de manipulação em Florianópolis”. Conteúdo visível alinhado ao serviço e à localização.
- Title, descrição, Open Graph e Twitter com informações da página.
- Texto direto sobre envio de receita, orçamento, preparo e entrega; sem promessa de prazo, resultado clínico, preço ou disponibilidade.
- Endereço informado pelo responsável: Av. Rio Branco, 808 — Centro, Florianópolis — SC, CEP 88015-202. Exibido no rodapé e no JSON-LD, com link para mapa.
- Dados estruturados Pharmacy e Service: identificação da farmácia, endereço, telefone, horário, atendimento por WhatsApp e serviço. Sem avaliações, estrelas ou ofertas inventadas.
- Horário e CNPJ da farmácia seguem o institucional. Os dados diferentes da loja virtual não foram misturados à identificação da farmácia.
- Imagens de produto com texto alternativo descritivo e carregamento adiado.
- WebP para as seis imagens utilizadas. Originais preservados; produtos convertidos sem perda e com as dimensões originais, mantendo o enquadramento.
- Imagens do hero: 5.756.725 → 474.738 bytes, redução de 91,8%.
- Conjunto das seis imagens: 9.711.943 → 2.981.966 bytes, redução de 69,3%.
- Pré-carregamento da imagem principal e remoção de duas famílias de fontes que não eram usadas.
- robots.txt permite rastreamento. Nenhuma metatag de palavras-chave, repetição de erros ortográficos ou conteúdo oculto para mecanismos de busca.
- Preferência por movimento reduzido respeitada.
- Adicionadas três seções editoriais, sem novos cards: fórmulas sob prescrição, informações para orçamento e localização no Centro de Florianópolis. Títulos descritivos e texto visível tornam serviço, processo e endereço compreensíveis por visitantes e mecanismos de busca, incluindo experiências de busca com IA.
- Novas seções conferidas em 1440, 390 e 320 px, sem overflow horizontal e com todas as âncoras válidas.
- Localização adaptada à referência R5SP: mapa incorporado com carregamento adiado, painel de endereço/telefone/horário e rota para Av. Rio Branco, 808. Mapa e marcador da Phytomaster conferidos visualmente em desktop e mobile; nenhuma avaliação da referência foi reproduzida.

## Verificado localmente

- Navegador Chrome, desktop de 1440 px e mobile de 390 px.
- Um H1, JSON-LD parseável, imagens carregadas e âncoras internas existentes.
- Sem rolagem horizontal; revisão visual do hero, produtos e rodapé.
- Interação dos frascos e preferência por movimento reduzido.
- HTTP 200 para catálogo, Trio de Magnésio e Meno Complex.
- Morosil e Eva360™ apontam para o catálogo, pois não foi identificada uma página individual oficial na pesquisa. Confirmar URLs individuais quando disponíveis.
- Esta revisão local não equivale a validação de resultados avançados pelo Google, medição de Core Web Vitals em produção ou medição de conversões.

## Completar com a URL de publicação

1. Inserir canonical autorreferente com a URL pública definitiva, sem parâmetros de campanha. Não apontar a canonical para a home institucional se ela for outra página.
2. Configurar og:url e imagem de compartilhamento com URLs absolutas. O url do objeto Pharmacy identifica o site institucional da empresa, não a canonical da landing page.
3. Criar sitemap.xml com a URL pública e referenciá-lo no robots.txt da raiz do domínio. Em domínio compartilhado, integrar à configuração existente.
4. Conferir HTTPS, resposta HTTP 200 e acesso do Googlebot/AdsBot na hospedagem; configurar cache e compressão dos recursos.
5. Validar a URL publicada no Search Console, Rich Results Test e PageSpeed Insights. Solicitar indexação após publicação.
6. Configurar a conversão do Google Ads com o ID e rótulo reais da conta. Clique no WhatsApp é uma intenção de contato, não confirmação de orçamento ou venda. Nenhuma tag ou coleta foi ativada nesta etapa.
7. Confirmar as URLs individuais de Morosil e Eva360™ e o link oficial de privacidade, se disponível. Não inserir links presumidos.
8. Publicar somente index.html, styles.css, product-motion.js, robots.txt e os assets usados. Excluir capturas de conferência, este documento, arquivos de teste e PNGs originais do pacote público.

## Referências consultadas

- [Phytomaster — institucional](https://phytomaster.com.br/): identidade da farmácia, tempo de atuação, telefone, WhatsApp, horário e CNPJ.
- [Phytomaster — loja](https://loja.phytomaster.com.br/) e [catálogo](https://loja.phytomaster.com.br/produtos/): produtos e destinos de navegação.
- [Dermus Pharma](https://dermus.com.br/): referência local de apresentação de serviço, contato e loja; sem copiar conteúdo ou atribuir serviços à Phytomaster.
- [Google — guia de SEO](https://developers.google.com/search/docs/fundamentals/seo-starter-guide): conteúdo útil, termos de busca, imagens e prevenção de repetição artificial.
- [Google — títulos](https://developers.google.com/search/docs/appearance/title-link) e [descrições](https://developers.google.com/search/docs/appearance/snippet).
- [Google — dados de empresas locais](https://developers.google.com/search/docs/appearance/structured-data/local-business) e [diretrizes de dados estruturados](https://developers.google.com/search/docs/appearance/structured-data/sd-policies).
- [Google Ads — landing page](https://support.google.com/google-ads/answer/14086) e [requisitos do destino](https://support.google.com/adspolicy/answer/6368661).
- [web.dev — otimização de LCP](https://web.dev/articles/optimize-lcp): carregamento e prioridade das imagens principais.
- [Google — recursos de IA e sites](https://developers.google.com/search/docs/appearance/ai-features): fundamentos de SEO continuam aplicáveis; não há marcação especial que garanta inclusão em respostas com IA.
- [Anvisa — definição de preparação magistral, RDC 67](https://bvs.saude.gov.br/bvs/saudelegis/anvisa/2007/rdc0067_08_10_2007.html): base para a explicação geral sobre fórmulas individualizadas a partir de prescrição. A página não fornece dosagens, indicações terapêuticas ou aconselhamento clínico.

SEO orgânico e desempenho de anúncios são avaliações diferentes. Estas alterações melhoram a clareza, o rastreamento e o carregamento da página; não garantem posição orgânica, aprovação de anúncios ou custo por conversão.
