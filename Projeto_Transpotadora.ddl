-- *********************************************
-- * Standard SQL generation                   
-- *--------------------------------------------
-- * DB-MAIN version: 10.0.1              
-- * Generator date: Jan 10 2017              
-- * Generation date: Thu Apr 20 15:17:35 2017 
-- * LUN file: C:\Users\host\Documents\LBD\Projeto_Transpotadora.lun 
-- * Schema: Transportadora_ER/1 
-- ********************************************* 


-- Database Section
-- ________________ 

-- create database Transportadora_ER;


-- DBSpace Section
-- _______________


-- Tables Section
-- _____________ 

create table ajuda_caminhao (
     id_funcionario varchar(9) not null,
     id_vei varchar(9) not null,
     constraint ID_ajuda_caminhao_ID primary key (id_vei, id_funcionario));

create table AJUDANTE (
     id_funcionario varchar(9) not null,
     tipo_ajudante varchar(10) not null,
     constraint FKFUN_AJU_ID primary key (id_funcionario));

create table BAU (
     id_vei varchar(9) not null,
     id_ped varchar(9),
     metros_cub numeric(9) not null,
     constraint FKcoleta_grande_ID unique (id_ped),
     constraint FKCAM_BAU_ID primary key (id_vei));

create table CAMINHAO (
     id_vei varchar(9) not null,
     num_eixos numeric(9) not null,
     max_ton numeric(10) not null,
     tara_peso numeric(9) not null,
     peso_liquido numeric(9) not null,
     CARROCERIA varchar(9),
     BAU varchar(9),
     constraint FKFRO_CAM_ID primary key (id_vei));

create table CARROCERIA (
     id_vei varchar(9) not null,
     id_ped varchar(9),
     metros_quad numeric(9) not null,
     constraint FKentrega_grande_ID unique (id_ped),
     constraint FKCAM_CAR_ID primary key (id_vei));

create table CLIENTE (
     id_cli varchar(9) not null,
     nome varchar(45) not null,
     sobrenome varchar(45) not null,
     rua varchar(45) not null,
     numero varchar(10) not null,
     cidade varchar(45) not null,
     email varchar(45),
     qte_pedidos numeric(9),
     constraint ID_CLIENTE_ID primary key (id_cli));

create table COLETA (
     id_ped varchar(9) not null,
     data_coleta date not null,
     horario_coleta varchar(5) not null,
     num_nf_coleta char(1) not null,
     id_vei varchar(9) not null,
     constraint FKPED_COL_ID primary key (id_ped));

create table DEPENDENTE (
	 id_funcionario varchar(9) not null,	 
     nome varchar(45) not null,
     sobrenome varchar(45) not null,
     parentesco varchar(15) not null,
     data_nascimento date not null,
     constraint ID_DEPENDENTE_ID primary key (id_funcionario, nome));

create table ENTREGA (
     id_ped varchar(9) not null,
     data_entrega date not null,
     horario_entrega varchar(5) not null,
     num_nf_entrega varchar(15) not null,
     id_vei varchar(9) not null,
     constraint FKPED_ENT_ID primary key (id_ped));

create table FROTA (
     id_vei varchar(9) not null,
     placa varchar(15) not null,
     max_velo varchar(10) not null,
     FURGAO varchar(9),
     CAMINHAO varchar(9),
     constraint ID_FROTA_ID primary key (id_vei));

create table FUNCIONARIO (
     id_funcionario varchar(9) not null,
     nome varchar(45) not null,
     sobrenome varchar(45) not null,
     rua varchar(45) not null,
     numero varchar(10) not null,
     cidade varchar(45) not null,
     salario numeric(6) not null,
     cargo char(1) not null,
     data_admissao date not null,
     MOTORISTA varchar(9),
     AJUDANTE varchar(9),
     constraint ID_FUNCIONARIO_ID primary key (id_funcionario));

create table FURGAO (
     id_vei varchar(9) not null,
     num_portas numeric(9) not null,
     max_capacidade varchar(10) not null,
     max_itens numeric(10) not null,
     constraint FKFRO_FUR_ID primary key (id_vei));

create table MOTORISTA (
     id_funcionario varchar(9) not null,
     habilitacao_num varchar(15) not null,
     habilitacao_categoria varchar(5) not null,
     MOTORISTA_LEVE varchar(9),
     MOTORISTA_PESADO varchar(9),
     constraint FKFUN_MOT_ID primary key (id_funcionario));

create table MOTORISTA_LEVE (
     id_funcionario varchar(9) not null,
     tipo_veiculo_leve varchar(10) not null,
     constraint FKMOT_MOT_1_ID primary key (id_funcionario));

create table MOTORISTA_PESADO (
     id_funcionario varchar(9) not null,
     tipo_veiculo_pesado1 char(1) not null,
     tipo_veiculo_pesado2 char(1),
     constraint FKMOT_MOT_ID primary key (id_funcionario));

create table dirige_caminhao (
     id_funcionario varchar(9) not null,
     id_vei varchar(9) not null,
     constraint ID_dirige_caminhao_ID primary key (id_vei, id_funcionario));

create table dirige_furgao (
     id_funcionario varchar(9) not null,
     id_vei varchar(9) not null,
     constraint ID_dirige_furgao_ID primary key (id_vei, id_funcionario));

create table PEDIDO (
     id_ped varchar(9) not null,
     peso_ton numeric(5,2) not null,
     rua varchar(45) not null,
     numero varchar(10) not null,
     cidade varchar(45) not null,
     bairro varchar(45) not null,
     num_nf_ped varchar(15) not null,
     varlor_nf numeric(10,2) not null,
     confirmado char not null,
     id_cli varchar(9) not null,
     ENTREGA varchar(9),
     COLETA varchar(9),
     constraint ID_PEDIDO_ID primary key (id_ped));

-- Constraints Section
-- ___________________ 

alter table ajuda_caminhao add constraint FKaju_CAM
     foreign key (id_vei)
     references CAMINHAO;

alter table ajuda_caminhao add constraint FKaju_AJU_FK
     foreign key (id_funcionario)
     references AJUDANTE;

alter table AJUDANTE add constraint FKFUN_AJU_FK
     foreign key (id_funcionario)
     references FUNCIONARIO;

alter table BAU add constraint FKcoleta_grande_FK
     foreign key (id_ped)
     references COLETA;

alter table BAU add constraint FKCAM_BAU_FK
     foreign key (id_vei)
     references CAMINHAO;

alter table CAMINHAO add constraint EXTONE_CAMINHAO
     check((CARROCERIA is not null and BAU is null)
           or (CARROCERIA is null and BAU is not null)); 

alter table CAMINHAO add constraint FKFRO_CAM_CHK
     check(exists(select * from ajuda_caminhao
                  where ajuda_caminhao.id_vei = id_vei)); 

alter table CAMINHAO add constraint FKFRO_CAM_CHK
     check(exists(select * from dirige_caminhao
                  where dirige_caminhao.id_vei = id_vei)); 

alter table CAMINHAO add constraint FKFRO_CAM_FK
     foreign key (id_vei)
     references FROTA;

alter table CARROCERIA add constraint FKentrega_grande_FK
     foreign key (id_ped)
     references ENTREGA;

alter table CARROCERIA add constraint FKCAM_CAR_FK
     foreign key (id_vei)
     references CAMINHAO;

alter table CLIENTE add constraint ID_CLIENTE_CHK
     check(exists(select * from PEDIDO
                  where PEDIDO.id_cli = id_cli)); 

alter table COLETA add constraint FKPED_COL_CHK
     check(exists(select * from BAU
                  where BAU.id_ped = id_ped)); 

alter table COLETA add constraint FKPED_COL_FK
     foreign key (id_ped)
     references PEDIDO;

alter table COLETA add constraint FKcoleta_pequena_FK
     foreign key (id_vei)
     references FURGAO;

alter table ENTREGA add constraint FKPED_ENT_CHK
     check(exists(select * from CARROCERIA
                  where CARROCERIA.id_ped = id_ped)); 

alter table ENTREGA add constraint FKPED_ENT_FK
     foreign key (id_ped)
     references PEDIDO;

alter table ENTREGA add constraint FKentrega_pequena_FK
     foreign key (id_vei)
     references BAU;

alter table FROTA add constraint EXCL_FROTA
     check((FURGAO is not null and CAMINHAO is null)
           or (FURGAO is null and CAMINHAO is not null)
           or (FURGAO is null and CAMINHAO is null)); 

alter table FUNCIONARIO add constraint EXCL_FUNCIONARIO
     check((AJUDANTE is not null and MOTORISTA is null)
           or (AJUDANTE is null and MOTORISTA is not null)
           or (AJUDANTE is null and MOTORISTA is null)); 

alter table FURGAO add constraint FKFRO_FUR_CHK
     check(exists(select * from dirige_furgao
                  where dirige_furgao.id_vei = id_vei)); 

alter table FURGAO add constraint FKFRO_FUR_FK
     foreign key (id_vei)
     references FROTA;

alter table MOTORISTA add constraint EXTONE_MOTORISTA
     check((MOTORISTA_PESADO is not null and MOTORISTA_LEVE is null)
           or (MOTORISTA_PESADO is null and MOTORISTA_LEVE is not null)); 

alter table MOTORISTA add constraint FKFUN_MOT_FK
     foreign key (id_funcionario)
     references FUNCIONARIO;

alter table MOTORISTA_LEVE add constraint FKMOT_MOT_1_FK
     foreign key (id_funcionario)
     references MOTORISTA;

alter table MOTORISTA_PESADO add constraint FKMOT_MOT_FK
     foreign key (id_funcionario)
     references MOTORISTA;

alter table dirige_caminhao add constraint FKdir_CAM
     foreign key (id_vei)
     references CAMINHAO;

alter table dirige_caminhao add constraint FKdir_MOT_1_FK
     foreign key (id_funcionario)
     references MOTORISTA_PESADO;

alter table dirige_furgao add constraint FKdir_FUR
     foreign key (id_vei)
     references FURGAO;

alter table dirige_furgao add constraint FKdir_MOT_FK
     foreign key (id_funcionario)
     references MOTORISTA_LEVE;

alter table PEDIDO add constraint EXTONE_PEDIDO
     check((COLETA is not null and ENTREGA is null)
           or (COLETA is null and ENTREGA is not null)); 

alter table PEDIDO add constraint FKrealiza_FK
     foreign key (id_cli)
     references CLIENTE;

-- Index Section
-- _____________ 

create unique index ID_ajuda_caminhao_IND
     on ajuda_caminhao (id_vei, id_funcionario);

create index FKaju_AJU_IND
     on ajuda_caminhao (id_funcionario);

create unique index FKFUN_AJU_IND
     on AJUDANTE (id_funcionario);

create unique index FKcoleta_grande_IND
     on BAU (id_ped);

create unique index FKCAM_BAU_IND
     on BAU (id_vei);

create unique index FKFRO_CAM_IND
     on CAMINHAO (id_vei);

create unique index FKentrega_grande_IND
     on CARROCERIA (id_ped);

create unique index FKCAM_CAR_IND
     on CARROCERIA (id_vei);

create unique index ID_CLIENTE_IND
     on CLIENTE (id_cli);

create unique index FKPED_COL_IND
     on COLETA (id_ped);

create index FKcoleta_pequena_IND
     on COLETA (id_vei);

create unique index ID_DEPENDENTE_IND
     on DEPENDENTE (id_dependente);

create unique index FKPED_ENT_IND
     on ENTREGA (id_ped);

create index FKentrega_pequena_IND
     on ENTREGA (id_vei);

create unique index ID_FROTA_IND
     on FROTA (id_vei);

create unique index ID_FUNCIONARIO_IND
     on FUNCIONARIO (id_funcionario);

create unique index FKFRO_FUR_IND
     on FURGAO (id_vei);

create unique index FKFUN_MOT_IND
     on MOTORISTA (id_funcionario);

create unique index FKMOT_MOT_1_IND
     on MOTORISTA_LEVE (id_funcionario);

create unique index FKMOT_MOT_IND
     on MOTORISTA_PESADO (id_funcionario);

create unique index ID_dirige_caminhao_IND
     on dirige_caminhao (id_vei, id_funcionario);

create index FKdir_MOT_1_IND
     on dirige_caminhao (id_funcionario);

create unique index ID_dirige_furgao_IND
     on dirige_furgao (id_vei, id_funcionario);

create index FKdir_MOT_IND
     on dirige_furgao (id_funcionario);

create unique index ID_PEDIDO_IND
     on PEDIDO (id_ped);

create index FKrealiza_IND
     on PEDIDO (id_cli);