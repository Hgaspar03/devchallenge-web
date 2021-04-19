# CountryWeb

Este é um cliente front end feito em angular, para consumir o CountryAPI de mode a  gerenciar as informações das propriedades dos países (identificador – gerado automaticamente, nome, capital, região, sub-região, área).

    É possível criar um novo país a partir da API criada com todas as suas propriedades;
    É possível listar todos os países anteriormente criados;
    É possível modificar os dados de um país anteriormente criado;
    É possível eliminar um país anteriormente criado;

#CountryAPI

A API feita em spring-boot com base de dados relacional postgreSQL, encontra-se no seguinte url:

https://hgaspar-country-api.herokuapp.com/country

Com o seguinte mapeamento dos metodos:

METODO           Mapping                Descricão     
GET              /all                   buscar todos os paises da base
GET              /{id}                  Buscar País por ID
POST                                    Salvar um novo país
PUT                                     Actualizar informacao de um país
DELETE            /delete/{id}          Remover um país por ID

