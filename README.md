# Passo a Passo

## Login
`docker login azure`
<br/>
`az login`

## Build Dockerfile
`docker build -t tdsaude95741 .`

## Grupo de recursos azure
`az group create --name tdsaude95741 --location eastus`

## ACR
`az acr create --resource-group rg-tdsaude95741 --name tdsaude95741 --sku Basic`
- Anotar: `loginServer` e `name`

## Rodar localmente
`docker run tdsaude95741 -d -p 3000:3000 tdsaude95741`

## Endpoints 
`localhost:3000`

| Req | URL |
|-----|-----|
| GET | /medicos |
| GET | /exames |
| POST | /medicos |
| POST | /exames |
| PUT | /medicos |
| PUT | /exames |
| DEL | /medicos |
| DEL | /exames |

## Removendo container
`docker rm tdsaude95741 -f`

## Logando no acr para dar push e pull
`az acr login --name tdsaude95741`

## Criando registro de container privado
`docker tag tdsaude95741 tdsaude95741.azurecr.io/tdsaude95741:v1`

## Fazendo push da imagem
`docker push tdsaude95741.azurecr.io/tdsaude95741:v1`

## Removendo imagem do ambiente local
`docker rmi tdsaude95741.azurecr.io/tdsaude:v1 -f`

## Removendo imagem antiga
`docker image rm tdsaude95741`

## Logando no acr como administrador
`az acr login --name tdsaude95741 --username <user gerado em Access Key> --password <senha gerada em Access Key>`

## Criando container dentro da azure
`az container create --resource-group rg-tdsaude95741 --name tdsaude95741 --image tdsaude95741.azurecr.io/tdsaude95741:v1 --cpu 1 --memory 1 --registry-login-server tdsaude95741.azurecr.io --registry-username <userDeAdm> --registry-password <senhaDeAdm> --ip-address Public --dns-name-label tdsaude95741 --ports 3000 80 8080`
- Anotar: `fqdn` e `ip`
- Para rodar na nuvem `tdsaude95741.eastus.azurecontainer.io:3000`
