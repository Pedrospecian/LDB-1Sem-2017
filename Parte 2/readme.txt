O modelo sofreu algumas alterações para que algumas regras de negócio pudessem ser atendidas. O arquivo .ddl segue em anexo junto com os artefatos. As mudanças, que são adições de colunas novas em tabelas já existentes, seguem abaixo:

- A tabela PEDIDO agora possui uma coluna chamada 'confirmado', que armazena '0' para pedidos não confirmados e '1' para pedidos confirmados.

- A tabela CLIENTE agora possui uma coluna chamada 'qte_pedidos', que é um número que armazena a quantidade de pedidos que o cliente já fez e que já foram confirmados.

- A tabela FUNCIONARIO agora possui uma coluna chamada 'data_nascimento', que armazena sua data de nascimento.